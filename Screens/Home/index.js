import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FeedScreen from '../Feed';
import CameraRollScreen from '../CameraRoll';
import ProfileScreen from '../Profile';
import {View} from 'react-native';
import {Icon, Tab, TabBar} from '@ui-kitten/components';

const BottomTab = createBottomTabNavigator();

export function HomeScreen() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name='Feed' component={FeedScreen}
                        options={{
                          tabBarIcon: ({focused, color, size}) =>
                            <Icon name='home-outline' width={size} height={size} fill={color}/>,
                        }}/>
      <BottomTab.Screen name='CameraRoll' component={CameraRollScreen}
                        options={{
                          tabBarIcon: ({focused, color, size}) =>
                            <Icon name='plus-square-outline' width={size} height={size} fill={color}/>,
                        }}/>
      <BottomTab.Screen name='Profile' component={ProfileScreen}
                        options={{
                          tabBarIcon: ({focused, color, size}) =>
                            <Icon name='person-outline' width={size} height={size} fill={color}/>,
                        }}/>
    </BottomTab.Navigator>
  );
}


export default HomeScreen;
