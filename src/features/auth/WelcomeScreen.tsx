import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native'
import Images from '../../resources/images'
import Colors from '../../resources/colors'
import Screens from '../../resources/screens'
import ActionButton, { ButtonState, ButtonTheme } from '../../components/ActionButton'
import BorderedImageButton from '../../components/BorderedImageButton'
import { NavigationScreenProps } from 'react-navigation'
import Space from '../../components/Space'
import { Strings } from '../../resources/strings'

interface Props extends NavigationScreenProps {}

export default class WelcomeScreen extends Component<Props> {
  render() {
    return (
      <SafeAreaView style={styles.wrapper}>
        <Image source={Images.Voloo} style={styles.icon} />
        <Text style={styles.title}>{Strings.Welcome_Hi}</Text>
        <Text style={styles.subtitle}>{Strings.Welcome_GetStarted}</Text>
        <Space />
        <ActionButton
          onPress={() => this.onAccountTapped()}
          title={Strings.Welcome_CreateAccount}
          buttonState={ButtonState.Enabled}
          theme={ButtonTheme.Light}
          style={styles.accountButton}
        />
        <Text style={styles.continueText}>{Strings.Welcome_ContinueWith}</Text>
        <View style={styles.socialWrapper}>
          <BorderedImageButton
            image={Images.Google}
            style={styles.socialButton}
            onPress={() => this.onGoogleTapped()}
          />
          <BorderedImageButton
            image={Images.Facebook}
            style={styles.socialButton}
            onPress={() => this.onFacebookTapped()}
          />
        </View>
        <Space />
        <Text style={styles.loginText}>{Strings.Welcome_AlreadyHaveAnAccount}</Text>
        <ActionButton
          onPress={() => this.onLoginTapped()}
          title={Strings.Welcome_Login}
          buttonState={ButtonState.Enabled}
          theme={ButtonTheme.Dark}
          style={styles.loginButton}
        />
      </SafeAreaView>
    )
  }

  onAccountTapped() {
    this.props.navigation.navigate(Screens.NameInput)
  }

  onGoogleTapped() {
    console.log('Continue with Google')
  }

  onFacebookTapped() {
    console.log('Continue with Facebook')
  }

  onLoginTapped() {
    this.props.navigation.navigate(Screens.Login)
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
    marginTop: 8,
    color: Colors.MineShaft,
  },
  accountButton: {
    marginLeft: 24,
    marginRight: 24,
  },
  continueText: {
    marginTop: 16,
    fontSize: 16,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: Colors.MineShaft,
  },
  socialWrapper: {
    marginTop: 16,
    marginLeft: 24,
    marginRight: 24,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  socialButton: {
    flex: 0.48,
  },
  loginText: {
    fontSize: 16,
    alignSelf: 'center',
    color: Colors.MineShaft,
  },
  loginButton: {
    margin: 24,
  },
})
