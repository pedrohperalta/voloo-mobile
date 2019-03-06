import React, { Component } from 'react'
import {
  StyleSheet,
  Image,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  View,
  SafeAreaView,
} from 'react-native'
import ActionButton, { ButtonState, ButtonTheme } from '../../components/ActionButton'
import Colors from '../../resources/colors'
import Images from '../../resources/images'
import TextInput from '../../components/TextInput'
import { NavigationScreenProps } from 'react-navigation'
import SignUpState from './SignUpState'
import { InvalidFirstName, InvalidLastName } from '../../errors/errors'
import ErrorText from '../../components/ErrorText'
import { Strings } from '../../resources/strings'
import Screens from '../../resources/screens'

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
        <SafeAreaView style={{ flex: 1 }}>
          <ScrollView>
            <Image source={Images.VolooNameInput} style={styles.icon} />
            <Text style={styles.title}>{Strings.NameInput_Hi}</Text>
            <Text style={styles.subtitle}>{Strings.NameInput_WhatsIsYourName}</Text>
            <View>
              {this.state.errorMessage != null && (
                <ErrorText message={this.state.errorMessage} style={styles.errorWrapper} />
              )}
            </View>
            <TextInput
              placeholder={Strings.NameInput_FirstName}
              autoCapitalize={'words'}
              autoCorrect={false}
              onChangeText={val => this.onChangeText('firstName', val)}
              style={styles.firstNameInput}
            />
            <TextInput
              placeholder={Strings.NameInput_LastName}
              autoCapitalize={'words'}
              autoCorrect={false}
              onChangeText={val => this.onChangeText('lastName', val)}
              style={styles.lastNameInput}
            />
            <ActionButton
              onPress={() => this.onNextTapped()}
              title={Strings.NameInput_Next}
              buttonState={ButtonState.Enabled}
              theme={ButtonTheme.Light}
              style={styles.nextButton}
            />
          </ScrollView>
        </SafeAreaView>
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

    this.props.navigation.navigate(Screens.Credentials, {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
    })
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
    marginRight: 32,
    marginBottom: 30,
    color: Colors.MineShaft,
  },
  errorWrapper: {
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 8,
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
  nextButton: {
    margin: 24,
  },
})
