# cutie-created

[![NPM Version](https://img.shields.io/npm/v/@cuties/created.svg)](https://npmjs.org/package/@cuties/created)
[![Build Status](https://travis-ci.org/Guseyn/cutie-created.svg?branch=master)](https://travis-ci.org/Guseyn/cutie-created)
[![codecov](https://codecov.io/gh/Guseyn/cutie-jwt/branch/master/graph/badge.svg)](https://codecov.io/gh/Guseyn/cutie-created)

[Cutie](https://github.com/Guseyn/cutie) extension for creating objects with async arguments. It's based on the [Async Tree Pattern](https://github.com/Guseyn/async-tree-patern/blob/master/Async_Tree_Patern.pdf).

## Install

`npm install @cuties/jwt`

## Run test

`npm test`

## Run build

`npm run build`

#Example

Let's say you have an object `User`:

```js
class User {
  constructor (name, email) {
    this.name = name
    this.email = email
  }
}
```

But in some cases you can get `name` and `email` only via async calls, so you need `User` to have async arguments, but `User` is not an async object. This lib provides object `Created`, which solves this problem.

```js
const { Created } = require('@cuties/cutie')
const User = require('./User')

new Created(
  User, new RetrievedSomehowUserName(), new RetrievedSomehowUserEmail()
).call()
```

And in this case `Created` represents `User` with properties from specified async objects.

So, the signature of `Created` is

```js
new Created(ObjThatYouNeedToCreate, ...asyncArgs)
```