import React, { Component } from 'react'
import { View, StyleSheet, Image } from 'react-native'
import Colors from '../../resources/colors'
import Images from '../../resources/images'

export default class NameInputScreen extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Image source={Images.VolooNameInput} style={styles.icon} />
      </View>
    )
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
})
