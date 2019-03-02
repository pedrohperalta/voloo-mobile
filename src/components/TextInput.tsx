import React, { Component } from 'react'
import { TextInput as RNTextInput, StyleSheet, TextInputProps } from 'react-native'
import Colors from '../resources/colors'

interface Props extends TextInputProps {}

interface State {
  focused: boolean
}

export default class TextInput extends Component<Props, State> {
  constructor(props: Props, state: State) {
    super(props, state)
    this.state = {
      focused: false,
    }
  }

  render() {
    const borderStyle = this.state.focused
      ? { borderColor: Colors.Pumpkin }
      : { borderColor: Colors.BrownishGrey }

    return (
      <RNTextInput
        {...this.props}
        style={[styles.textInput, this.props.style, borderStyle]}
        onFocus={this.onFocus.bind(this)}
        onBlur={this.onBlur.bind(this)}
      />
    )
  }

  onFocus() {
    this.setState(_ => ({
      focused: true,
    }))
  }

  onBlur() {
    this.setState(_ => ({
      focused: false,
    }))
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    backgroundColor: Colors.Black_87,
    borderRadius: 20,
    paddingHorizontal: 28,
    fontSize: 16,
    borderWidth: 1,
  },
})
