import React, { Component } from 'react'
import { StyleSheet, Image, Text, KeyboardAvoidingView, ScrollView, View } from 'react-native'
import ActionButton, { ButtonState, ButtonTheme } from '../../components/ActionButton'
import Colors from '../../resources/colors'
import Images from '../../resources/images'
import TextInput from '../../components/TextInput'
import { NavigationScreenProps } from 'react-navigation'
import { InvalidEmail, ShortPassword } from '../../errors/errors'
import ErrorText from '../../components/ErrorText'
import { Strings } from '../../resources/strings'
import * as EmailValidator from 'email-validator'
import Screens from '../../resources/screens'

interface Props extends NavigationScreenProps {}

interface State {
  email?: string
  password?: string
  errorMessage?: string
}

export default class LoginScreen extends Component<Props, State> {
  constructor(props: Props, state: State) {
    super(props, state)
    this.state = {
      email: '',
      password: '',
    }
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.wrapper} enabled>
        <ScrollView>
          <Image source={Images.VolooLogin} style={styles.icon} />
          <Text style={styles.title}>{Strings.Login_Title}</Text>
          <View>
            {this.state.errorMessage != null && (
              <ErrorText message={this.state.errorMessage} style={styles.errorWrapper} />
            )}
          </View>
          <TextInput
            placeholder={Strings.Login_Email}
            keyboardType={'email-address'}
            autoCapitalize={'none'}
            autoCorrect={false}
            onChangeText={val => this.onChangeText('email', val)}
            style={styles.emailInput}
          />
          <TextInput
            placeholder={Strings.Login_Password}
            secureTextEntry={true}
            autoCapitalize={'none'}
            autoCorrect={false}
            onChangeText={val => this.onChangeText('password', val)}
            style={styles.passwordInput}
          />
          <ActionButton
            onPress={() => this.onLoginTapped()}
            title={Strings.Login_Title}
            buttonState={ButtonState.Enabled}
            theme={ButtonTheme.Light}
            style={styles.loginButton}
          />
          <Text onPress={() => this.onForgotPasswordTapped()} style={styles.forgotPassword}>
            {Strings.Login_ForgotPassword}
          </Text>
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }

  onChangeText(key: string, value: string) {
    this.setState({ ...this.state, [key]: value, errorMessage: undefined })
  }

  onLoginTapped() {
    if (this.state.email !== undefined && !EmailValidator.validate(this.state.email)) {
      this.setState({ ...this.state, errorMessage: new InvalidEmail().message })
      return
    }

    if (this.state.password !== undefined && this.state.password.length < 8) {
      this.setState({ ...this.state, errorMessage: new ShortPassword().message })
      return
    }

    // Login user
  }

  onForgotPasswordTapped() {
    this.props.navigation.navigate(Screens.ForgotPassword)
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  icon: {
    marginTop: 48,
    marginStart: 16,
  },
  title: {
    fontSize: 26,
    marginLeft: 32,
    marginRight: 32,
    marginTop: 16,
    marginBottom: 40,
    color: Colors.MineShaft,
    fontWeight: 'bold',
  },
  errorWrapper: {
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 8,
  },
  emailInput: {
    marginLeft: 24,
    marginRight: 24,
  },
  passwordInput: {
    marginTop: 16,
    marginLeft: 24,
    marginRight: 24,
  },
  loginButton: {
    marginLeft: 24,
    marginRight: 24,
    marginTop: 48,
  },
  forgotPassword: {
    fontSize: 16,
    color: Colors.MineShaft,
    marginTop: 20,
    alignSelf: 'center',
    textDecorationLine: 'underline',
  },
})
