import React, { PureComponent } from 'react'
import { TouchableOpacity, Text, StyleSheet, ViewProps, ActivityIndicator } from 'react-native'
import Colors from '../resources/colors'

export enum ButtonState {
  Enabled,
  Disabled,
  Loading,
}

export enum ButtonTheme {
  Light,
  Dark,
}

interface Props extends ViewProps {
  title: string
  buttonState?: ButtonState
  theme?: ButtonTheme
  onPress?: () => void
}

export default class PrimaryButton extends PureComponent<Props> {
  render() {
    const enabledColor = this.props.theme === ButtonTheme.Light ? Colors.Pumpkin : Colors.MineShaft
    const disabledColor = this.props.theme === ButtonTheme.Light ? Colors.Tenn : Colors.Scorpion

    var background: any
    switch (this.props.buttonState) {
      case ButtonState.Enabled:
      case ButtonState.Loading:
        background = { backgroundColor: enabledColor }
        break

      case ButtonState.Disabled:
        background = { backgroundColor: disabledColor }
        break
    }

    if (this.props.buttonState === ButtonState.Loading) {
      return (
        <TouchableOpacity style={[styles.button, background, this.props.style]}>
          <ActivityIndicator size="small" color={Colors.White} />
        </TouchableOpacity>
      )
    } else {
      return (
        <TouchableOpacity
          style={[styles.button, background, this.props.style]}
          onPress={this.props.buttonState === ButtonState.Enabled ? this.props.onPress : () => {}}
        >
          <Text style={styles.title}>{this.props.title.toUpperCase()}</Text>
        </TouchableOpacity>
      )
    }
  }
}

const styles = StyleSheet.create({
  button: {
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    color: Colors.White,
  },
})
