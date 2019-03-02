import React, { PureComponent } from 'react'
import { TouchableOpacity, Image, StyleSheet, ViewProps } from 'react-native'
import Colors from '../resources/colors'
import Images from '../resources/images'

interface Props extends ViewProps {
  image: Images
  onPress?: () => void
}

export default class BorderedImageButton extends PureComponent<Props> {
  render() {
    return (
      <TouchableOpacity style={[styles.button, this.props.style]} onPress={this.props.onPress}>
        <Image source={this.props.image} />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: Colors.Alto,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
