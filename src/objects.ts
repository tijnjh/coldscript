import type { Call, Objects, Pipe, Tuples, Unions } from 'hotscript'
import { dual } from './utils/dual'

export function fromEntries<$ extends [PropertyKey, unknown][]>($: $) {
  return Object.fromEntries($) as Pipe<$, [
    Tuples.ToUnion,
    Objects.FromEntries,
    Unions.ToIntersection,
  ]>
}

export function entries<$ extends object>($: $) {
  return Object.entries($) as Pipe<$, [
    Objects.Entries,
    Unions.ToTuple,
  ]>
}

// mapValues - TODO

// mapKeys - TODO

// kebabCase - won't do

// snakeCase - won't do

// camelCase - won't do

// mapKeysDeep - TODO

// kebabCaseDeep - won't do

// snakeCaseDeep - won't do

// camelCaseDeep - won't do

export function keys<$ extends object>($: $) {
  return Object.keys($) as Pipe<$, [Objects.Keys, Unions.ToTuple]>
}

export function values<$ extends object>($: $) {
  return Object.values($) as Pipe<$, [Objects.Values, Unions.ToTuple]>
}

export const assign = dual<
  <const TO2 extends object>(o2: TO2) => <const $ extends object>($: $) => Call<Objects.Assign<TO2>, $>,
  <const $ extends object, const TO2 extends object>($: $, o2: TO2) => Call<Objects.Assign<TO2>, $>
>(2, (o, o2): any => {
  return Object.assign(o, o2)
})
