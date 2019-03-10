import React, { PureComponent } from 'react'
import { Text, StyleSheet, ImageBackground } from 'react-native'
import Space from './Space'
import Colors from '../resources/colors'
import WishList from '../models/WishList'
import { WishListCategoryImage } from '../models/WishListCategory'

interface Props {
  wishList: WishList
}

export default class WishCard extends PureComponent<Props> {
  render() {
    const { wishList } = this.props
    const quantitySuffix = wishList.quantity === 1 ? 'Item' : 'Items'

    return (
      <ImageBackground style={styles.wrapper} source={WishListCategoryImage(wishList.category)}>
        <Space />
        <Text style={styles.title}>{wishList.title}</Text>
        <Text style={styles.items}>{`${wishList.quantity} ${quantitySuffix}`}</Text>
        <Text style={styles.visibility}>{wishList.visibility}</Text>
      </ImageBackground>
    )
  }
}
const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 8,
    padding: 16,
    aspectRatio: 344 / 155,
  },
  title: {
    color: Colors.White,
    fontSize: 22,
  },
  items: {
    color: Colors.White,
    fontSize: 14,
  },
  visibility: {
    color: Colors.White_60,
    fontSize: 14,
  },
})
