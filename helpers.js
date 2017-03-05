// Helpers

// compose : ((b -> c), (a -> b)) -> a -> c
const compose =
  (f, g) => x => f(g(x))

// isValid : a -> Boolean
const isValid =
  Number.isFinite

// stringify : a -> String
const stringify =
  JSON.stringify

module.exports = {
  compose,
  isValid,
  stringify
}
