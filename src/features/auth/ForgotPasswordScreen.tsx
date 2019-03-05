import React, { Component } from 'react'
import { StyleSheet, Image, Text, KeyboardAvoidingView, ScrollView, View } from 'react-native'
import ActionButton, { ButtonState, ButtonTheme } from '../../components/ActionButton'
import Colors from '../../resources/colors'
import Images from '../../resources/images'
import TextInput from '../../components/TextInput'
import { NavigationScreenProps } from 'react-navigation'
import { InvalidEmail } from '../../errors/errors'
import ErrorText from '../../components/ErrorText'
import { Strings } from '../../resources/strings'
import * as EmailValidator from 'email-validator'
import Space from '../../components/Space'

interface Props extends NavigationScreenProps {}

interface State {
  email?: string
  errorMessage?: string
}

export default class ForgotPasswordScreen extends Component<Props, State> {
  constructor(props: Props, state: State) {
    super(props, state)
    this.state = { email: '' }
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <Image source={Images.ForgotPassword} style={styles.icon} />
        <Text style={styles.title}>{Strings.ForgotPassword_Title}</Text>
        <View>
          {this.state.errorMessage != null && (
            <ErrorText message={this.state.errorMessage} style={styles.errorWrapper} />
          )}
        </View>
        <TextInput
          placeholder={Strings.ForgotPassword_Email}
          keyboardType={'email-address'}
          autoCapitalize={'none'}
          autoCorrect={false}
          onChangeText={val => this.onChangeText('email', val)}
          style={styles.emailInput}
        />
        <Space />
        <ActionButton
          onPress={() => this.onSendEmailTapped()}
          title={Strings.ForgotPassword_SendEmail}
          buttonState={ButtonState.Enabled}
          theme={ButtonTheme.Light}
          style={styles.sendEmailButton}
        />
      </View>
    )
  }

  onChangeText(key: string, value: string) {
    this.setState({ ...this.state, [key]: value, errorMessage: undefined })
  }

  onSendEmailTapped() {
    if (this.state.email !== undefined && !EmailValidator.validate(this.state.email)) {
      this.setState({ ...this.state, errorMessage: new InvalidEmail().message })
      return
    }

    // Login user
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
    marginTop: 16,
    marginRight: 32,
    marginBottom: 24,
    color: Colors.MineShaft,
    fontWeight: 'bold',
  },
  errorWrapper: {
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 26,
  },
  emailInput: {
    marginLeft: 24,
    marginRight: 24,
  },
  sendEmailButton: {
    margin: 24,
  },
})
