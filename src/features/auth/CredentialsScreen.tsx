import React, { Component } from 'react'
import { StyleSheet, Image, Text, KeyboardAvoidingView, ScrollView, View } from 'react-native'
import ActionButton, { ButtonState, ButtonTheme } from '../../components/ActionButton'
import Colors from '../../resources/colors'
import Images from '../../resources/images'
import TextInput from '../../components/TextInput'
import { NavigationScreenProps } from 'react-navigation'
import SignUpState from './SignUpState'
import { InvalidEmail, ShortPassword } from '../../errors/errors'
import ErrorText from '../../components/ErrorText'
import { Strings } from '../../resources/strings'
import Params from '../../resources/params'
import { String } from 'typescript-string-operations'
import * as EmailValidator from 'email-validator'

interface Props extends NavigationScreenProps {}
interface State extends SignUpState {}

export default class CredentialsScreen extends Component<Props, State> {
  constructor(props: Props, state: State) {
    super(props, state)
    this.state = {
      firstName: this.props.navigation.getParam(Params.FirstName),
      lastName: this.props.navigation.getParam(Params.LastName),
      email: '',
      password: '',
    }
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.wrapper} enabled>
        <ScrollView>
          <Image source={Images.VolooCredentials} style={styles.icon} />
          <Text style={styles.title}>
            {String.Format(Strings.Credentials_NiceName, this.state.firstName)}
          </Text>
          <Text style={styles.subtitle}>{Strings.Credentials_Request}</Text>
          <View>
            {this.state.errorMessage != null && (
              <ErrorText message={this.state.errorMessage} style={styles.errorWrapper} />
            )}
          </View>
          <TextInput
            placeholder={Strings.Credentials_Email}
            keyboardType={'email-address'}
            autoCapitalize={'none'}
            autoCorrect={false}
            onChangeText={val => this.onChangeText('email', val)}
            style={styles.emailInput}
          />
          <TextInput
            placeholder={Strings.Credentials_Password}
            secureTextEntry={true}
            autoCapitalize={'none'}
            autoCorrect={false}
            onChangeText={val => this.onChangeText('password', val)}
            style={styles.passwordInput}
          />
          <ActionButton
            onPress={() => this.onNextTapped()}
            title={Strings.Credentials_Register}
            buttonState={ButtonState.Enabled}
            theme={ButtonTheme.Light}
            style={styles.nextButton}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }

  onChangeText(key: string, value: string) {
    this.setState({ ...this.state, [key]: value, errorMessage: undefined })
  }

  onNextTapped() {
    if (this.state.email !== undefined && !EmailValidator.validate(this.state.email)) {
      this.setState({ ...this.state, errorMessage: new InvalidEmail().message })
      return
    }

    if (this.state.password !== undefined && this.state.password.length < 8) {
      this.setState({ ...this.state, errorMessage: new ShortPassword().message })
      return
    }

    // Register account
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
    marginTop: 24,
    color: Colors.MineShaft,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 22,
    marginLeft: 32,
    marginBottom: 40,
    color: Colors.MineShaft,
  },
  errorWrapper: {
    marginLeft: 24,
    marginRight: 24,
    backgroundColor: Colors.Black_87,
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
  space: {
    flex: 1,
  },
  nextButton: {
    margin: 24,
  },
})
