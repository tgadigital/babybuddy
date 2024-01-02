import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {enableScreens} from 'react-native-screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList, RootTabsParamList} from '../types/navigation';
import Baby from '../screens/Baby';
import Discover from '../screens/Discover';
import NotFound from '../screens/NotFound';
import SignIn from '../screens/SignIn';
import {navigationRef} from '../router';
import {useAuthContext} from '../services/context/auth';
import AxiosProvider from '../services/provider/axios';
import Today from '../screens/Today';
import Me from '../screens/Me';
import constants from '../constants';
import Recovery from '../screens/Recovery';
import SignUp from '../screens/SignUp';

enableScreens();

const RootStack = createNativeStackNavigator<RootStackParamList>();
const Tab = createMaterialBottomTabNavigator<RootTabsParamList>();

function Stack() {
  return (
    <RootStack.Navigator
      initialRouteName="SignIn"
      screenOptions={{headerShown: false}}>
      <RootStack.Screen name="Inside" component={Tabs} />
      <RootStack.Screen name="SignIn" component={SignIn} />
      <RootStack.Screen name="SignUp" component={SignUp} />
      <RootStack.Screen name="Recovery" component={Recovery} />
      <RootStack.Screen name="NotFound" component={NotFound} />
    </RootStack.Navigator>
  );
}

const Tabs = () => {
  return (
    <Tab.Navigator
      inactiveColor={constants.palette.gray}
      activeColor={constants.palette.main}
      barStyle={{backgroundColor: constants.palette.white}}
      labeled={false}>
      <Tab.Screen
        name="Today"
        component={Today}
        options={{
          tabBarIcon: () => null,
        }}
      />
      <Tab.Screen
        name="Baby"
        component={Baby}
        options={{
          tabBarIcon: () => null,
        }}
      />
      <Tab.Screen
        name="Discover"
        component={Discover}
        options={{
          tabBarIcon: () => null,
        }}
      />
      <Tab.Screen
        name="Me"
        component={Me}
        options={{
          tabBarIcon: () => null,
        }}
      />
    </Tab.Navigator>
  );
};

function Navigation() {
  const {setupToken} = useAuthContext();
  return (
    <NavigationContainer ref={navigationRef} onReady={() => setupToken()}>
      <AxiosProvider>
        <Stack />
      </AxiosProvider>
    </NavigationContainer>
  );
}

export default Navigation;
