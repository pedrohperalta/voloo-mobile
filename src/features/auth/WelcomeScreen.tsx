import React, { Component } from 'react'
import { View, Text, TouchableHighlight, Image, StyleSheet } from 'react-native'
import { Images } from '../../constants'

export default class WelcomeScreen extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Image source={Images.Voloo} style={styles.icon} />
        <Text style={styles.title}>Hi, I'm Voloo</Text>
        <Text style={styles.subtitle}>Your wishlist assistant,{'\n'}Let's start?</Text>
        <TouchableHighlight onPress={() => this.onAccountTapped()} style={styles.accountButton}>
          <Text style={styles.buttonText}>CREATE ACCOUNT</Text>
        </TouchableHighlight>
        <Text style={styles.continueText}>or continue with...</Text>
        <View style={styles.socialWrapper}>
          <TouchableHighlight style={styles.socialButton}>
            <Image source={Images.Google} />
          </TouchableHighlight>
          <TouchableHighlight style={styles.socialButton}>
            <Image source={Images.Facebook} />
          </TouchableHighlight>
        </View>
        <Text style={styles.loginText}>Already have an account?</Text>
        <TouchableHighlight onPress={() => this.onLoginTapped()} style={styles.loginButton}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableHighlight>
      </View>
    )
  }

  onAccountTapped() {
    console.log('Create account')
  }

  onLoginTapped() {
    console.log('Login')
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  icon: {
    marginTop: 48,
    marginStart: 16,
  },
  title: {
    fontSize: 26,
    marginLeft: 32,
    marginTop: 24,
    color: '#212121',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 22,
    marginLeft: 32,
    marginTop: 8,
    color: '#212121',
  },
  accountButton: {
    marginTop: 60,
    marginLeft: 24,
    marginRight: 24,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#ef6c00',
    padding: 6,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  continueText: {
    marginTop: 16,
    fontSize: 16,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#212121',
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
    height: 36,
    flex: 0.48,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#d3d3d3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    fontSize: 16,
    bottom: 42,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#212121',
  },
  loginButton: {
    bottom: 24,
    marginLeft: 24,
    marginRight: 24,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#212121',
    padding: 6,
  },
})
