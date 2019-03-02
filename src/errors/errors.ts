export class InvalidFirstName extends Error {
  constructor() {
    super('First name should have at least 2 characters. ')
  }
}

export class InvalidLastName extends Error {
  constructor() {
    super('Last name should have at least 2 characters')
  }
}

export class InvalidEmail extends Error {
  constructor() {
    super('Invalid email')
  }
}

export class InvalidPassword extends Error {
  constructor() {
    super('Password should have at least 8 digits')
  }
}
