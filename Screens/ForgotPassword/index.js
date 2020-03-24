import React, {Component} from 'react';
import {Button, Card, Divider, Input, Layout, Text, TopNavigation} from '@ui-kitten/components';
import {Alert, StyleSheet, View, ScrollView, Image} from 'react-native';
import {connect} from 'react-redux';
import {ImageOverlay} from '../../components/image-overlay.component';
import loginImage from '../../assets/img/login.jpg';
import {forgotPasswordRequest} from './actions';

export function ForgotPasswordScreen({dispatch, navigation}) {

  const [email, setEmail] = React.useState('');

  function submitForm() {
    dispatch(forgotPasswordRequest({email}));
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
            Forgot Password
          </Text>
        </View>
        <View style={styles.formContainer}>
          <Input
            placeholder='Email'
            value={email}
            onChangeText={setEmail}
            textContentType={'emailAddress'}
            autoCompleteType={'email'}
            keyboardType={'email-address'}
            blurOnSubmit={false}
          />
        </View>
        <Button
          style={styles.signInButton}
          size='giant'
          onPress={submitForm}>
          SEND RESET MAIL
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

export default connect(mapDispatchToProps)(ForgotPasswordScreen);

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
