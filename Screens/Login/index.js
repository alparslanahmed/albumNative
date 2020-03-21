import React, {Component} from 'react';
import {Button, Card, Divider, Input, Layout, Text, TopNavigation} from '@ui-kitten/components';
import {SafeAreaView, Image} from 'react-native';
import {connect} from 'react-redux';
import {loginRequest} from './actions';
import logo from '../../assets/img/logo.png';

export function LoginScreen({login, dispatch, navigation}) {

  console.log('LOGIN SCREEN!');

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const passwordInput = React.useRef();

  function submitForm() {
    dispatch(loginRequest(email, password));
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <Divider/>
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20}}>
        <Image
          style={{height: 100, resizeMode: 'contain'}}
          source={logo}
        />
        <Input
          placeholder='Email'
          value={email}
          onChangeText={setEmail}
          textContentType={'emailAddress'}
          autoCompleteType={'email'}
          keyboardType={'email-address'}
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
          onSubmitEditing={submitForm}
        />
        <Button onPress={submitForm} style={{width: '100%'}}>
          Login
        </Button>
      </Layout>
    </SafeAreaView>
  );
}

LoginScreen.navigationOptions = {
  header: null,
};

function mapStateToProps(state) {
  return {
    login: state.login,
  };
}

function mapDispatchToProps(dispatch) {
  return {dispatch};
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
