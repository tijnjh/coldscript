import type { Call, Tuples } from 'hotscript'
import { dual } from './utils/dual'

export const at = dual<
  <TIndex extends number>(index: TIndex) => <$ extends unknown[]>($: $) => Call<Tuples.At<TIndex>, $>,
  <const $ extends unknown[], TIndex extends number>($: $, index: TIndex) => Call<Tuples.At<TIndex>, $>
>(2, ($, index): any => {
  return $.at(index)
})

export const isEmpty = dual<
  () => <$ extends unknown[]>($: $) => Call<Tuples.IsEmpty, $>,
  <const $ extends unknown[]>($: $) => Call<Tuples.IsEmpty, $>
>(1, ($): any => {
  return $.length === 0
})

// toUnion - no runtime equivalent

// toIntersection - no runtime equivalent

export const head = dual<
  () => <$ extends unknown[]>($: $) => Call<Tuples.Head, $>,
  <const $ extends unknown[]>($: $) => Call<Tuples.Head, $>
>(1, ($): any => {
  return $.at(0)
})

export const tail = dual<
  () => <$ extends unknown[]>($: $) => Call<Tuples.Tail, $>,
  <const $ extends unknown[]>($: $) => Call<Tuples.Tail, $>
>(1, ($): any => {
  return $.slice(1)
})

export const last = dual<
  () => <$ extends unknown[]>($: $) => Call<Tuples.Last, $>,
  <const $ extends unknown[]>($: $) => Call<Tuples.Last, $>
>(1, ($): any => {
  return $[$.length - 1]
})

// map - TODO

// flatMap  - TODO

// reduce - TODO

export const reverse = dual<
  () => <$ extends unknown[]>($: $) => Call<Tuples.Reverse, $>,
  <const $ extends unknown[]>($: $) => Call<Tuples.Reverse, $>
>(1, ($): any => {
  return $.slice().reverse()
})

// reduceRight - TODO

// filter - TODO

// find - TODO

export const sum = dual<
  () => <$ extends number[]>($: $) => Call<Tuples.Sum, $>,
  <const $ extends number[]>($: $) => Call<Tuples.Sum, $>
>(1, ($): any => {
  return $.reduce((a, b) => a + b, 0)
})

// drop - TODO

// take - TODO

// some - TODO

// every - TODO

// need to fix, runtime differs from hotscript impl
export const sort = dual<
  () => <$ extends unknown[]>($: $) => Call<Tuples.Sort, $>,
  <const $ extends unknown[]>($: $) => Call<Tuples.Sort, $>
>(1, ($): any => {
  return $.slice().sort()
})

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

export const length = dual<
  () => <$ extends unknown[]>($: $) => Call<Tuples.Length, $>,
  <const $ extends unknown[]>($: $) => Call<Tuples.Length, $>
>(1, ($): any => {
  return $.length
})

export const min = dual<
  () => <$ extends number[]>($: $) => Call<Tuples.Min, $>,
  <const $ extends number[]>($: $) => Call<Tuples.Min, $>
>(1, ($): any => {
  return Math.min(...$)
})

export const max = dual<
  () => <$ extends number[]>($: $) => Call<Tuples.Max, $>,
  <const $ extends number[]>($: $) => Call<Tuples.Max, $>
>(1, ($): any => {
  return Math.max(...$)
})
