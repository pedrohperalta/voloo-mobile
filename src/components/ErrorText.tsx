import React, { PureComponent } from 'react'
import { Text, StyleSheet, ViewProps, View, Image } from 'react-native'
import Colors from '../resources/colors'
import Images from '../resources/images'

interface Props extends ViewProps {
  message: string
}

export default class ErrorText extends PureComponent<Props> {
  render() {
    return (
      <View style={[styles.errorWrapper, this.props.style]}>
        <Text style={styles.message}>
          <Image source={Images.Warning} />
          {this.props.message}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  errorWrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  message: {
    alignSelf: 'center',
    color: Colors.Scarlet,
    fontSize: 14,
    fontWeight: 'bold',
  },
})
