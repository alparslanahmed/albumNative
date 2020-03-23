import React, {Component} from 'react';
import {Button, Card, Divider, Input, Layout, Text, TopNavigation} from '@ui-kitten/components';
import {Alert, StyleSheet, View, ScrollView, Image} from 'react-native';
import {connect} from 'react-redux';
import {loginRequest, readToken, registerRequest} from './actions';
import {ImageOverlay} from '../../components/image-overlay.component';
import loginImage from '../../assets/img/login.jpg';

export function RegisterScreen({dispatch, navigation}) {

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [password2, setPassword2] = React.useState('');

  const emailInput = React.useRef();
  const usernameInput = React.useRef();
  const passwordInput = React.useRef();
  const password2Input = React.useRef();

  function submitForm() {

    if (password !== password2) {
      return Alert.alert('Register Error!', 'Passwords doesnt match.');
    }

    dispatch(registerRequest({name, email, username, password}));
  }

  return (
    <ImageOverlay
      style={styles.container}
      source={loginImage}>
      <ScrollView style={{flex: 1}}>
        <View style={styles.headerContainer}>
          <Text
            style={styles.signInLabel}
            category='h1'
            status='control'>
            Sign Up
          </Text>
        </View>
        <View style={styles.formContainer}>
          <Input
            placeholder='Name'
            value={name}
            onChangeText={setName}
            textContentType={'name'}
            autoCompleteType={'name'}
            keyboardType={'default'}
            onSubmitEditing={() => {
              emailInput.current.focus();
            }}
            blurOnSubmit={false}
          />
          <Input
            ref={emailInput}
            placeholder='Email'
            value={email}
            onChangeText={setEmail}
            textContentType={'emailAddress'}
            autoCompleteType={'email'}
            keyboardType={'email-address'}
            onSubmitEditing={() => {
              usernameInput.current.focus();
            }}
            blurOnSubmit={false}
            autoCapitalize={'none'}
          />
          <Input
            ref={usernameInput}
            placeholder='Username'
            value={username}
            onChangeText={setUsername}
            textContentType={'username'}
            autoCompleteType={'username'}
            keyboardType={'default'}
            onSubmitEditing={() => {
              passwordInput.current.focus();
            }}
            blurOnSubmit={false}
            autoCapitalize={'none'}
          />
          <Input
            ref={passwordInput}
            placeholder='Password'
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
            autoCapitalize={'none'}
            onSubmitEditing={() => {
              password2Input.current.focus();
            }}
          />
          <Input
            ref={password2Input}
            placeholder='Password Again'
            value={password2}
            onChangeText={setPassword2}
            secureTextEntry={true}
            onSubmitEditing={submitForm}
            autoCapitalize={'none'}
          />
        </View>
        <Button
          style={styles.signInButton}
          size='giant'
          onPress={submitForm}>
          CREATE ACCOUNT
        </Button>
        <Button
          style={styles.signUpButton}
          appearance='ghost'
          status='control'
          onPress={() => {
            navigation.navigate('Login');
          }}>
          Have an account? Sign In
        </Button>
      </ScrollView>
    </ImageOverlay>
  );
}

function mapDispatchToProps(dispatch) {
  return {dispatch};
}

export default connect(mapDispatchToProps)(RegisterScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    minHeight: 216,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  signInLabel: {
    marginTop: 16,
  },
  passwordInput: {
    marginTop: 16,
  },
  signInButton: {
    marginHorizontal: 16,
  },
  forgotPasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  forgotPasswordButton: {
    paddingHorizontal: 0,
  },
  signUpButton: {
    marginVertical: 12,
  },
  socialAuthContainer: {
    marginTop: 32,
  },
  socialAuthButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  socialAuthHintText: {
    alignSelf: 'center',
    marginBottom: 16,
  },
});
