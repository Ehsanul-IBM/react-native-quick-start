import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar, BackHandler } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';
import GraphQLProvider from '@graphql/client';
import { setNavigator, handleHardwareBack } from '@utils/navigation';
import Screens from '@screens';

const App = () => {
  // Set reference to navigation stack for use in nav util functions
  const setRef = (navRef) => setNavigator(navRef);

  // Handle on app launch handlers here
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleHardwareBack);
    RNBootSplash.hide({ duration: 500 });
  }, []);

  return (
    <GraphQLProvider>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer ref={setRef}>
          <Screens />
        </NavigationContainer>
      </SafeAreaView>
    </GraphQLProvider>
  );
};

export default App;
