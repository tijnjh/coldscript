import type { Call, Tuples } from 'hotscript'
import { dual } from './utils/dual'

export const at = dual<
  <TIndex extends number>(index: TIndex) => <$ extends unknown[]>($: $) => Call<Tuples.At<TIndex>, $>,
  <const $ extends unknown[], TIndex extends number>($: $, index: TIndex) => Call<Tuples.At<TIndex>, $>
>(2, ($, index): any => {
  return $.at(index)
})

export function isEmpty<const $ extends unknown[]>($: $) {
  return ($.length === 0) as Call<Tuples.IsEmpty, $>
}

// toUnion - no runtime equivalent

// toIntersection - no runtime equivalent

export function head<const $ extends unknown[]>($: $) {
  return $[0] as Call<Tuples.Head, $>
}

export function tail<const $ extends unknown[]>($: $) {
  return $.slice(1) as Call<Tuples.Tail, $>
}

export function last<const $ extends unknown[]>($: $) {
  return $[$.length - 1] as Call<Tuples.Last, $>
}

// map - TODO

// flatMap  - TODO

// reduce - TODO

export function reverse<const $ extends unknown[]>($: $) {
  return $.slice().reverse() as Call<Tuples.Reverse, $>
}

// reduceRight - TODO

// filter - TODO

// find - TODO

export function sum<const $ extends number[]>($: $) {
  return $.reduce((a, b) => a + b, 0) as Call<Tuples.Sum, $>
}

// drop - TODO

// take - TODO

// some - TODO

// every - TODO

// need to fix, runtime differs from hotscript impl
export function sort<const $ extends unknown[]>($: $) {
  return $.slice().sort() as Call<Tuples.Sort, $>
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

export function length<const $ extends unknown[]>($: $) {
  return $.length as Call<Tuples.Length, $>
}

export function min<const $ extends number[]>($: $) {
  return Math.min(...$) as Call<Tuples.Min, $>
}

export function max<const $ extends number[]>($: $) {
  return Math.max(...$) as Call<Tuples.Max, $>
}
