import type { Call, Tuples } from 'hotscript'
import { dual } from './utils/dual'

export const at = dual<
  <TIndex extends number>(index: TIndex) => <$ extends unknown[]>($: $) => Call<Tuples.At<TIndex>, $>,
  <const $ extends unknown[], TIndex extends number>($: $, index: TIndex) => Call<Tuples.At<TIndex>, $>
>(2, ($, index): any => {
  return $.at(index)
})

export function isEmpty<T extends unknown[]>(t: T) {
  return (t.length === 0) as Call<Tuples.IsEmpty, T>
}

// toUnion - no runtime equivalent

// toIntersection - no runtime equivalent

export function head<T extends unknown[]>(t: T) {
  return t[0] as Call<Tuples.Head, T>
}

export function tail<T extends unknown[]>(t: T) {
  return t.slice(1) as Call<Tuples.Tail, T>
}

export function last<T extends unknown[]>(t: T) {
  return t[t.length - 1] as Call<Tuples.Last, T>
}

// map - TODO

// flatMap  - TODO

// reduce - TODO

export function reverse<T extends unknown[]>(t: T) {
  return t.slice().reverse() as Call<Tuples.Reverse, T>
}

// reduceRight - TODO

// filter - TODO

// find - TODO

export function sum<T extends number[]>(t: T) {
  return t.reduce((a, b) => a + b, 0) as Call<Tuples.Sum, T>
}

// drop - TODO

// take - TODO

// some - TODO

// every - TODO

// need to fix, runtime differs from hotscript impl
export function sort<T extends unknown[]>(t: T) {
  return t.slice().sort() as Call<Tuples.Sort, T>
}

export const join = dual<
  <const TSep extends string>(sep: TSep) => <$ extends unknown[]>($: $) => Call<Tuples.Join<TSep>, $>,
  <const $ extends unknown[], const TSep extends string>($: $, sep: TSep) => Call<Tuples.Join<TSep>, $>
>(2, ($, sep): any => {
  return $.join(sep)
})

export const prepend = dual<
  <const TElement>(element: TElement) => <$ extends unknown[]>($: $) => Call<Tuples.Prepend<TElement>, $>,
  <const $ extends unknown[], const TElement>($: $, element: TElement) => Call<Tuples.Prepend<TElement>, $>
>(2, ($, element): any => {
  return [element, ...$]
})

export const append = dual<
  <const TElement>(element: TElement) => <$ extends unknown[]>($: $) => Call<Tuples.Append<TElement>, $>,
  <const $ extends unknown[], const TElement>($: $, element: TElement) => Call<Tuples.Append<TElement>, $>
>(2, ($, element): any => {
  return [...$, element]
})

export const concat = dual<
  <const TTuple extends unknown[]>(tuple: TTuple) => <$ extends unknown[]>($: $) => Call<Tuples.Concat<TTuple>, $>,
  <const $ extends unknown[], const TTuple extends unknown[]>($: $, tuple: TTuple) => Call<Tuples.Concat<TTuple>, $>
>(2, ($, tuple): any => {
  return [...$, ...tuple]
})

// partition - TODO

// splitAt - TODO

// zip - TODO

// zipWith - TODO

// groupBy - TODO

// range - TODO

export function length<T extends unknown[]>(t: T) {
  return t.length as Call<Tuples.Length, T>
}

export function min<T extends number[]>(t: T) {
  return Math.min(...t) as Call<Tuples.Min, T>
}

export function max<T extends number[]>(t: T) {
  return Math.max(...t) as Call<Tuples.Max, T>
}
