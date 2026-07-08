import * as numbers from './numbers'
import * as objects from './objects'
import * as strings from './strings'
import * as tuples from './tuples'
import { curry, fn } from './utils/fn'
import { pipe } from './utils/pipe'

export type { AnyFn, Curried, Fn, FnOf } from './utils/fn'
export { curry, fn, numbers, objects, pipe, strings, tuples }
