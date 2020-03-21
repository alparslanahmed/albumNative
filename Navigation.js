import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './Screens/Home';
import {Text} from '@ui-kitten/components';
import LoginScreen from './Screens/Login';

const Stack = createStackNavigator();

function Navigation({login}) {
  console.log(login)
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
          login.authenticated ? (
            <>
              <Stack.Screen name="Home" component={HomeScreen}/>
            </>
          ) : (
            <>
              <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
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
