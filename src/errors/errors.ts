import { Strings } from '../resources/strings'

export class InvalidFirstName extends Error {
  constructor() {
    super(Strings.Error_InvalidFirstName)
  }
}

export class InvalidLastName extends Error {
  constructor() {
    super(Strings.Error_InvalidLastName)
  }
}

export class InvalidEmail extends Error {
  constructor() {
    super(Strings.Error_InvalidEmail)
  }
}

export class ShortPassword extends Error {
  constructor() {
    super(Strings.Error_ShortPassword)
  }
}
