const log = require('./logger')
const helpers = require('./helpers')
const Maybe = require('./Maybe')

const { compose, isValid, stringify } = helpers

const { maybe, mapMaybe, optionMaybe } = Maybe

// maybeValid : * -> Maybe Number
const maybeValid =
  maybe(isValid)

// add10 : Number -> Number
const add10 =
  num =>  num + 10

// square : Number -> Number
const square =
  num => Math.pow(num, 2)

// doMath : Number -> Number
const doMath =
  compose(square, add10)

// safeMath : a -> Maybe Number
const safeMath =
  compose(mapMaybe(doMath), maybeValid)

// safeStringMath : a -> Maybe String
const safeStringMath =
  compose(mapMaybe(stringify), safeMath)

// stringMath : a -> String
const stringMath =
  compose(optionMaybe('None'), safeStringMath)

log('doMath with a Number', doMath(0))
log('doMath with a String', doMath('kitty cat'))

log('maybeValid with a Number (Just)', maybeValid(0))
log('maybeValid with a NaN (Nothing)', maybeValid(NaN))

log('safeMath with a Number (Just)', safeMath(0))
log('safeMath with a NaN (Nothing)', safeMath(NaN))

log('safeStringMath with a Number (Just)', safeStringMath(0))
log('safeStringMath with a NaN (Nothing)', safeStringMath(NaN))

log('stringMath with a Number (Just)', stringMath(0))
log('stringMath with a NaN (Nothing)', stringMath(NaN))
