// Maybe

// maybe : (* -> Boolean) -> * -> Maybe a
const maybe =
  pred => x => pred(x) ? [ x ] : []

// mapMaybe : (a -> b) -> Maybe a -> Maybe b
const mapMaybe =
  fn => m => m.map(fn)

// optionMaybe : a -> Maybe a -> a
const optionMaybe =
  def => m => m.length ? m[0] : def

module.exports = {
  mapMaybe,
  maybe,
  optionMaybe
}
