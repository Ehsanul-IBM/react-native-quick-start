import React from 'react';
import {
  ApolloProvider,
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
} from '@apollo/react-hooks';
import { setContext } from 'apollo-link-context';
import { WebSocketLink } from 'apollo-link-ws';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import { onError } from 'apollo-link-error';
import { URL } from 'react-native-url-polyfill';
import env from 'react-native-config';

const serviceURL = env.SERVICES_URL || 'http://localhost:4000';

const GraphQLProvider = ({ children }) => {
  try {
    // Handle subscription operations
    const hasSubscriptionOperation = ({ query: { definitions } }) =>
      definitions.some(
        ({ kind, operation }) =>
          kind === 'OperationDefinition' && operation === 'subscription',
      );

    // Handle errors client side
    const errorLink = onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path, extensions }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}, Extension Code: ${extensions.code}`,
          ),
        );
      if (networkError) console.log(`[Network error]: ${networkError}`);
    });

    // Attempt to get auth token from OID provider
    const getTokenSilently = async () => null;

    // Create authentication middleware to add id_token to requests
    const authLink = setContext(async (_, { headers }) => {
      // return the headers to the context so httpLink can read them
      return {
        headers: {
          ...headers,
          authorization: (await getTokenSilently()) || '',
        },
      };
    });

    // Get server URL segments
    const hostSegments = new URL(serviceURL);
    const wsProtocol = hostSegments.protocol === 'https:' ? 'wss' : 'ws';

    // Create HTTP and WS link
    const link = ApolloLink.split(
      hasSubscriptionOperation,
      new WebSocketLink(
        new SubscriptionClient(`${wsProtocol}://${hostSegments.host}/graphql`, {
          reconnect: true,
          reconnectionAttempts: 5,
          timeout: 30000,
          connectionParams: async () => ({
            authToken: await getTokenSilently(),
          }),
        }),
      ),
      createHttpLink({
        uri: `${serviceURL}/graphql`,
      }),
    );

    // Create new apollo client
    const apolloClient = new ApolloClient({
      link: ApolloLink.from([errorLink, authLink, link]),
      cache: new InMemoryCache(),
    });

    return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
  } catch (e) {
    console.log('Provider Error', e);
    return null;
  }
};

export default GraphQLProvider;
