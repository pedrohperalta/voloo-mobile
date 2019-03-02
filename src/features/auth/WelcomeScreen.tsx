import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Images, Colors } from '../../constants'
import ActionButton, { ButtonState, ButtonTheme } from '../../components/ActionButton'
import BorderedImageButton from '../../components/BorderedImageButton'

export default class WelcomeScreen extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Image source={Images.Voloo} style={styles.icon} />
        <Text style={styles.title}>Hi, I'm Voloo</Text>
        <Text style={styles.subtitle}>Your wishlist assistant,{'\n'}Let's start?</Text>
        <ActionButton
          onPress={() => this.onAccountTapped()}
          title="Create account"
          buttonState={ButtonState.Enabled}
          theme={ButtonTheme.Light}
          style={styles.accountButton}
        />
        <Text style={styles.continueText}>or continue with...</Text>
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
        <Text style={styles.loginText}>Already have an account?</Text>
        <ActionButton
          onPress={() => this.onLoginTapped()}
          title="Login"
          buttonState={ButtonState.Enabled}
          theme={ButtonTheme.Dark}
          style={styles.loginButton}
        />
      </View>
    )
  }

  onAccountTapped() {
    console.log('Create account')
  }

  onGoogleTapped() {
    console.log('Continue with Google')
  }

  onFacebookTapped() {
    console.log('Continue with Facebook')
  }

  onLoginTapped() {
    console.log('Login')
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
    marginTop: 60,
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
    bottom: 42,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: Colors.MineShaft,
  },
  loginButton: {
    bottom: 24,
    marginLeft: 24,
    marginRight: 24,
  },
})
