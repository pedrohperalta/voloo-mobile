import React, { Component } from 'react'
import { StyleSheet, Image, Text, KeyboardAvoidingView, ScrollView, View } from 'react-native'
import ActionButton, { ButtonState, ButtonTheme } from '../../components/ActionButton'
import Colors from '../../resources/colors'
import Images from '../../resources/images'
import TextInput from '../../components/TextInput'
import { NavigationScreenProps } from 'react-navigation'
import SignUpState from './SignUpState'
import { InvalidFirstName, InvalidLastName } from '../../errors/errors'
import ErrorText from '../../components/ErrorText'

interface Props extends NavigationScreenProps {}
interface State extends SignUpState {}

export default class NameInputScreen extends Component<Props, State> {
  constructor(props: Props, state: State) {
    super(props, state)
    this.state = { firstName: '', lastName: '' }
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.wrapper} enabled>
        <ScrollView>
          <Image source={Images.VolooNameInput} style={styles.icon} />
          <Text style={styles.title}>Hi there,</Text>
          <Text style={styles.subtitle}>What's your name?</Text>
          <View>
            {this.state.errorMessage != null && (
              <ErrorText message={this.state.errorMessage} style={styles.errorWrapper} />
            )}
          </View>
          <TextInput
            placeholder={'First name'}
            autoCapitalize={'words'}
            autoCorrect={false}
            onChangeText={val => this.onChangeText('firstName', val)}
            style={styles.firstNameInput}
          />
          <TextInput
            placeholder={'Last name'}
            autoCapitalize={'words'}
            autoCorrect={false}
            onChangeText={val => this.onChangeText('lastName', val)}
            style={styles.lastNameInput}
          />
          <ActionButton
            onPress={() => this.onNextTapped()}
            title="Next"
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
    if (this.state.firstName !== undefined && this.state.firstName.length < 2) {
      this.setState({ ...this.state, errorMessage: new InvalidFirstName().message })
      return
    }

    if (this.state.lastName !== undefined && this.state.lastName.length < 2) {
      this.setState({ ...this.state, errorMessage: new InvalidLastName().message })
      return
    }

    // Handle success case
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
  firstNameInput: {
    marginLeft: 24,
    marginRight: 24,
  },
  lastNameInput: {
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
