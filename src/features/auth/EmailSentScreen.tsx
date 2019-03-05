import React, { Component } from 'react'
import { StyleSheet, Image, Text, View } from 'react-native'
import ActionButton, { ButtonState, ButtonTheme } from '../../components/ActionButton'
import Colors from '../../resources/colors'
import Images from '../../resources/images'
import { Strings } from '../../resources/strings'
import Space from '../../components/Space'
import { NavigationScreenProps } from 'react-navigation'
import Screens from '../../resources/screens'

interface Props extends NavigationScreenProps {}

export default class EmailSentScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.wrapper}>
        <Image source={Images.EmailSent} style={styles.icon} />
        <Text style={styles.title}>{Strings.EmailSent_Title}</Text>
        <Text style={styles.subtitle}>{Strings.EmailSent_Subtitle}</Text>
        <Space />
        <ActionButton
          onPress={() => this.onGoToLoginTapped()}
          title={Strings.EmailSent_GoToLogin}
          buttonState={ButtonState.Enabled}
          theme={ButtonTheme.Light}
          style={styles.goToLoginButton}
        />
      </View>
    )
  }

  onGoToLoginTapped() {
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
    marginStart: 42,
  },
  title: {
    fontSize: 26,
    marginLeft: 32,
    marginTop: 16,
    marginRight: 32,
    color: Colors.MineShaft,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 22,
    marginLeft: 32,
    marginTop: 8,
    marginRight: 32,
    color: Colors.MineShaft,
  },
  goToLoginButton: {
    margin: 24,
  },
})
