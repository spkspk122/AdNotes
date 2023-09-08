import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {NavigationContainer} from '@react-navigation/native';
import NavigationService from './NavigationServices';
import screenNames from './screenNames';
import {SCREENS} from '../constant';
import DrawerNavigator from './drawerNavigation';
import {HomeNavigation} from './homeNavigation';

export const AppStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer
      ref={NavigationService.navigationRef}
      independent={true}>
      <Stack.Navigator initialRouteName={SCREENS.login}>
        <Stack.Screen
          name={SCREENS.drawerNavigation}
          component={DrawerNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={SCREENS.login}
          component={screenNames.Login}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
