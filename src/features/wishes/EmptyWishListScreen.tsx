import React, { PureComponent } from 'react'
import { View, Image, StyleSheet, Text } from 'react-native'
import Images from '../../resources/images'
import Colors from '../../resources/colors'
import { Strings } from '../../resources/strings'

export default class EmptyWishListScreen extends PureComponent {
  render() {
    return (
      <View style={styles.wrapper}>
        <Image source={Images.AddWish} style={styles.backgroundImage} />
        <Text style={styles.title}>{Strings.WishList_EmptyTitle}</Text>
        <Text style={styles.subtitle}>{Strings.WishList_EmptySubtitle}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.WhiteFour,
    justifyContent: 'center',
  },
  backgroundImage: {
    alignSelf: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: Colors.MineShaft,
    alignSelf: 'center',
    marginTop: 16,
  },
  subtitle: {
    fontSize: 22,
    color: Colors.MineShaft,
    textAlign: 'center',
    marginTop: 8,
    marginLeft: 24,
    marginRight: 24,
  },
})
