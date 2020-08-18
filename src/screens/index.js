import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from './auth';
import DashboardScreen from './dashboard';
import ContentScreen from './content';

// Screen stack model, makes nested screens easier to visualise
const Screens = {
  Auth: AuthScreen,
  Dashboard: DashboardScreen,
  Content: ContentScreen,
};

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Auth"
      component={Screens.Auth}
      options={{
        headerShown: true,
      }}
    />
    <Stack.Screen
      name="Dashboard"
      component={Screens.Dashboard}
      options={{
        headerShown: true,
      }}
    />
    <Stack.Screen
      name="Content"
      component={Screens.Content}
      options={{
        headerShown: true,
      }}
    />
  </Stack.Navigator>
);
