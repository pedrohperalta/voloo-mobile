import React, { Component } from 'react'
import { SafeAreaView, FlatList, View } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import WishCard from '../../components/WishCard'
import EmptyWishListScreen from './EmptyWishListScreen'
import WishList from '../../models/WishList'

interface Props extends NavigationScreenProps {}

interface State {
  wishLists: WishList[]
}

export default class WishListScreen extends Component<Props, State> {
  data = [
    {
      id: 'f354y43h5hhrhhq5',
      title: 'Meu aniversário',
      quantity: 12,
      visibility: 'Public',
      category: 'birthday',
    },
    {
      id: 'f432y34yq344yh34',
      title: 'Gadgets para comprar',
      quantity: 23,
      visibility: 'Public',
      category: 'electronics',
    },
    {
      id: '6784645f432fgsdf',
      title: 'Projeto verão',
      quantity: 4,
      visibility: 'Private',
      category: 'sports',
    },
    {
      id: '82br89fd23bfdbr6',
      title: 'Casamento João e Maria',
      quantity: 67,
      visibility: 'Public',
      category: 'wedding',
    },
    {
      id: '823nd98f2f3f2gh5',
      title: 'Roupas de verão',
      quantity: 67,
      visibility: 'Public',
      category: 'clothing',
    },
    {
      id: 'c8321r1oirf23f2w',
      title: 'Games para comprar',
      quantity: 23,
      visibility: 'Public',
      category: 'games',
    },
    {
      id: '9321r727r23if2hf',
      title: 'Sonhos de viagens',
      quantity: 23,
      visibility: 'Public',
      category: 'trip',
    },
    {
      id: '021dpmopwef32g2q',
      title: 'Brinquedos',
      quantity: 23,
      visibility: 'Public',
      category: 'toys',
    },
    {
      id: '09d21odf9iffwefg',
      title: 'Próximos livros',
      quantity: 23,
      visibility: 'Public',
      category: 'books',
    },
    {
      id: 'd210di23jdioajlk',
      title: 'Outros',
      quantity: 23,
      visibility: 'Public',
      category: 'others',
    },
  ]

  constructor(props: Props, state: State) {
    super(props, state)
    const wishLists = this.data.map(any => new WishList(any))
    this.state = { wishLists }
  }

  render() {
    const component =
      this.state.wishLists.length === 0 ? (
        <EmptyWishListScreen />
      ) : (
        <FlatList<WishList>
          data={this.state.wishLists}
          keyExtractor={wishList => wishList.id}
          renderItem={this.renderItem}
          ItemSeparatorComponent={this.renderSeparator}
        />
      )

    return <SafeAreaView style={{ flex: 1 }}>{component}</SafeAreaView>
  }

  renderItem({ item }: { item: WishList }) {
    return <WishCard wishList={item} />
  }

  renderSeparator() {
    return <View style={{ height: 12 }} />
  }
}
