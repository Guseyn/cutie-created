'use strict'

const { AsyncObject } = require('@cuties/cutie')

class Created extends AsyncObject {
  constructor (Obj, ...args) {
    super(Obj, ...args)
  }

  syncCall () {
    return (Obj, ...args) => {
      return new Obj(...args)
    }
  }
}

module.exports = Created
