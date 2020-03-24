import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './Screens/Home';
import {Button, Icon, Text} from '@ui-kitten/components';
import LoginScreen from './Screens/Login';
import inlineLogo from './assets/img/album-inline-black.png';
import {Image} from 'react-native';
import {logout} from './Screens/Login/actions';
import RegisterScreen from './Screens/Register';
import {navigationRef} from './RootNavigation';
import ForgotPasswordScreen from './Screens/ForgotPassword';

const Stack = createStackNavigator();

function Navigation({login, dispatch}) {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        {
          login.authenticated ? (
            <>
              <Stack.Screen name="Home" component={HomeScreen} options={{
                headerTitle: (
                  <Image style={{width: 85, height: 20}} resizeMode="contain" source={inlineLogo}/>),
                headerRight: () => <Button onPress={() => dispatch(logout())} appearance='ghost' status='danger'
                                           icon={() => <Icon name='power-outline'/>}/>,
              }}/>
            </>
          ) : (
            <>
              <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
              <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown: false}}/>
              <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{headerShown: false}}/>
            </>
          )
        }

      </Stack.Navigator>
    </NavigationContainer>
  );
}


function mapStateToProps(state) {
  return {
    login: state.login,
  };
}

function mapDispatchToProps(dispatch) {
  return {dispatch};
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
