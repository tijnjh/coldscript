import type { Call, Objects, Pipe, Tuples, Unions } from 'hotscript'
import { dual } from './utils/dual'

export const fromEntries = dual<
  () => <$ extends [PropertyKey, unknown][]>($: $) => Pipe<$, [Tuples.ToUnion, Objects.FromEntries, Unions.ToIntersection]>,
  <$ extends [PropertyKey, unknown][]>($: $) => Pipe<$, [Tuples.ToUnion, Objects.FromEntries, Unions.ToIntersection]>
>(1, ($): any => {
  return Object.fromEntries($)
})

export const entries = dual<
  () => <$ extends object>($: $) => Pipe<$, [Objects.Entries, Unions.ToTuple]>,
  <$ extends object>($: $) => Pipe<$, [Objects.Entries, Unions.ToTuple]>
>(1, ($): any => {
  return Object.entries($)
})

// mapValues - TODO

// mapKeys - TODO

// kebabCase - won't do

// snakeCase - won't do

// camelCase - won't do

// mapKeysDeep - TODO

// kebabCaseDeep - won't do

// snakeCaseDeep - won't do

// camelCaseDeep - won't do

export const keys = dual<
  () => <$ extends object>($: $) => Pipe<$, [Objects.Keys, Unions.ToTuple]>,
  <$ extends object>($: $) => Pipe<$, [Objects.Keys, Unions.ToTuple]>
>(1, ($): any => {
  return Object.keys($)
})

export const values = dual<
  () => <$ extends object>($: $) => Pipe<$, [Objects.Values, Unions.ToTuple]>,
  <$ extends object>($: $) => Pipe<$, [Objects.Values, Unions.ToTuple]>
>(1, ($): any => {
  return Object.values($)
})

export const assign = dual<
  <TO2 extends object>(o2: TO2) => <$ extends object>($: $) => Call<Objects.Assign<TO2>, $>,
  <$ extends object, TO2 extends object>($: $, o2: TO2) => Call<Objects.Assign<TO2>, $>
>(2, (o, o2): any => {
  return Object.assign(o, o2)
})
