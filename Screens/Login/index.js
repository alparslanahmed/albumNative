import React, {Component} from 'react';
import {Button, Card, Divider, Input, Layout, Text, TopNavigation} from '@ui-kitten/components';
import {KeyboardAvoidingView, StyleSheet, View, ScrollView, Image} from 'react-native';
import {connect} from 'react-redux';
import {loginRequest, readToken} from './actions';
import {
  EyeIcon,
  EyeOffIcon,
  FacebookIcon,
  GoogleIcon,
  PersonIcon,
  TwitterIcon,
} from '../../components/icons';
import {ImageOverlay} from '../../components/image-overlay.component';
import loginImage from '../../assets/img/login.jpg';
import logoImage from '../../assets/img/logo_white.png';
import AsyncStorage from '@react-native-community/async-storage';

export function LoginScreen({login, dispatch, navigation}) {

  React.useEffect(() => {
    AsyncStorage.getItem('token').then((data) => {
      dispatch(readToken(data));
    });
  }, []);

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const passwordInput = React.useRef();

  function submitForm() {
    dispatch(loginRequest(email, password));
  }

  const onSignInButtonPress = () => {
    navigation && navigation.goBack();
  };

  const onSignUpButtonPress = () => {
    navigation && navigation.navigate('SignUp4');
  };

  const onForgotPasswordButtonPress = () => {
    navigation && navigation.navigate('ForgotPassword');
  };

  const onPasswordIconPress = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <ImageOverlay
      style={styles.container}
      source={loginImage}>
      <ScrollView style={{flex: 1}}>
        <View style={styles.headerContainer}>
          <Image source={logoImage} style={{height: 150, resizeMode: 'contain'}}/>
          <Text
            style={styles.signInLabel}
            category='s1'
            status='control'>
            Sign in to your account
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
          <View style={styles.forgotPasswordContainer}>
            <Button
              style={styles.forgotPasswordButton}
              appearance='ghost'
              status='control'
              onPress={onForgotPasswordButtonPress}>
              Forgot your password?
            </Button>
          </View>
        </View>
        <Button
          style={styles.signInButton}
          size='giant'
          onPress={submitForm}>
          SIGN IN
        </Button>
        <View style={styles.socialAuthContainer}>
          <Text
            style={styles.socialAuthHintText}
            status='control'>
            Or Sign In using Social Media
          </Text>
          <View style={styles.socialAuthButtonsContainer}>
            <Button
              appearance='ghost'
              status='control'
              size='giant'
              icon={GoogleIcon}
            />
            <Button
              appearance='ghost'
              status='control'
              size='giant'
              icon={FacebookIcon}
            />
            <Button
              appearance='ghost'
              status='control'
              size='giant'
              icon={TwitterIcon}
            />
          </View>
        </View>
        <Button
          style={styles.signUpButton}
          appearance='ghost'
          status='control'
          onPress={onSignUpButtonPress}>
          Don't have an account? Sign Up
        </Button>
      </ScrollView>
    </ImageOverlay>
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
