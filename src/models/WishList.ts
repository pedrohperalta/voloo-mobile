import { WishListCategory } from './WishListCategory'

export default class WishList {
  id: string
  title: string
  quantity: number
  visibility: string
  category: WishListCategory

  constructor(json: any) {
    this.id = json.id
    this.title = json.title
    this.quantity = json.quantity
    this.visibility = json.visibility

    switch (json.category) {
      case 'birthday': {
        this.category = WishListCategory.Birthday
        break
      }
      case 'electronics': {
        this.category = WishListCategory.Electronics
        break
      }
      case 'sports': {
        this.category = WishListCategory.Sports
        break
      }
      case 'wedding': {
        this.category = WishListCategory.Wedding
        break
      }
      case 'clothing': {
        this.category = WishListCategory.Clothing
        break
      }
      case 'games': {
        this.category = WishListCategory.Games
        break
      }
      case 'trip': {
        this.category = WishListCategory.Trip
        break
      }
      case 'toys': {
        this.category = WishListCategory.Toys
        break
      }
      case 'books': {
        this.category = WishListCategory.Books
        break
      }
      default: {
        this.category = WishListCategory.Other
        break
      }
    }
  }
}
