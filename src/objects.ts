import type { ComposeLeft, Objects, Tuples, Unions } from 'hotscript'
import type { Curried, Fn } from './utils/fn'
import { curry, fn } from './utils/fn'

export const fromEntries: Fn<ComposeLeft<[
  Tuples.ToUnion,
  Objects.FromEntries,
  Unions.ToIntersection,
]>> = fn((entries: [PropertyKey, unknown][]) => Object.fromEntries(entries))

export const entries: Fn<ComposeLeft<[
  Objects.Entries,
  Unions.ToTuple,
]>> = fn((o: object) => Object.entries(o))

// mapValues - TODO

// mapKeys - TODO

// kebabCase - won't do

// snakeCase - won't do

// camelCase - won't do

// mapKeysDeep - TODO

// kebabCaseDeep - won't do

// snakeCaseDeep - won't do

// camelCaseDeep - won't do

export const keys: Fn<ComposeLeft<[Objects.Keys, Unions.ToTuple]>>
  = fn((o: object) => Object.keys(o))

export const values: Fn<ComposeLeft<[Objects.Values, Unions.ToTuple]>>
  = fn((o: object) => Object.values(o))

export const assign: Curried<2, Objects.Assign> = curry<Objects.Assign>(2, ($, o2) => Object.assign($, o2))
