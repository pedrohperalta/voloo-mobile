import Images from '../resources/images'

export enum WishListCategory {
  Birthday,
  Electronics,
  Sports,
  Wedding,
  Clothing,
  Games,
  Trip,
  Toys,
  Books,
  Others,
}

export function WishListCategoryImage(category: WishListCategory) {
  switch (category) {
    case WishListCategory.Birthday: {
      return Images.Birthday
    }
    case WishListCategory.Electronics: {
      return Images.Electronics
    }
    case WishListCategory.Sports: {
      return Images.Sports
    }
    case WishListCategory.Wedding: {
      return Images.Wedding
    }
    case WishListCategory.Clothing: {
      return Images.Clothing
    }
    case WishListCategory.Games: {
      return Images.Games
    }
    case WishListCategory.Trip: {
      return Images.Trip
    }
    case WishListCategory.Toys: {
      return Images.Toys
    }
    case WishListCategory.Books: {
      return Images.Books
    }
    default: {
      return Images.Others
    }
  }
}
