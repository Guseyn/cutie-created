'use strict'

const { AsyncObject } = require('@cuties/cutie')
const { Assertion } = require('@cuties/assert')
const { Is } = require('@cuties/is')
const { Created } = require('./../index')

class User {
  constructor (name, email) {
    this.name = name
    this.email = email
  }
}

class RetrievedUserName extends AsyncObject {
  constructor () {
    super()
  }

  syncCall () {
    return () => {
      return 'John'
    }
  }
}

class RetrievedUserEmail extends AsyncObject {
  constructor () {
    super()
  }

  syncCall () {
    return () => {
      return 'john@email.com'
    }
  }
}

new Assertion(
  new Is(
    new Created(
      User,
      new RetrievedUserName(),
      new RetrievedUserEmail()
    ),
    User
  )
).call()
