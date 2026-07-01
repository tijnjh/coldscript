import type { Call, Tuples } from 'hotscript'
import { dual } from './utils/dual'

export const at = dual<
  <TIndex extends number>(index: TIndex) => <$ extends unknown[]>($: $) => Call<Tuples.At<TIndex>, $>,
  <$ extends unknown[], TIndex extends number>($: $, index: TIndex) => Call<Tuples.At<TIndex>, $>
>(2, ($, index): any => {
  return $.at(index)
})

export const isEmpty = dual<
  () => <$ extends unknown[]>($: $) => Call<Tuples.IsEmpty, $>,
  <$ extends unknown[]>($: $) => Call<Tuples.IsEmpty, $>
>(1, ($): any => {
  return $.length === 0
})

// toUnion - no runtime equivalent

// toIntersection - no runtime equivalent

export const head = dual<
  () => <$ extends unknown[]>($: $) => Call<Tuples.Head, $>,
  <$ extends unknown[]>($: $) => Call<Tuples.Head, $>
>(1, ($): any => {
  return $.at(0)
})

export const tail = dual<
  () => <$ extends unknown[]>($: $) => Call<Tuples.Tail, $>,
  <$ extends unknown[]>($: $) => Call<Tuples.Tail, $>
>(1, ($): any => {
  return $.slice(1)
})

export const last = dual<
  () => <$ extends unknown[]>($: $) => Call<Tuples.Last, $>,
  <$ extends unknown[]>($: $) => Call<Tuples.Last, $>
>(1, ($): any => {
  return $[$.length - 1]
})

// map - TODO

// flatMap  - TODO

// reduce - TODO

export const reverse = dual<
  () => <$ extends unknown[]>($: $) => Call<Tuples.Reverse, $>,
  <$ extends unknown[]>($: $) => Call<Tuples.Reverse, $>
>(1, ($): any => {
  return $.slice().reverse()
})

// reduceRight - TODO

// filter - TODO

// find - TODO

export const sum = dual<
  () => <$ extends number[]>($: $) => Call<Tuples.Sum, $>,
  <$ extends number[]>($: $) => Call<Tuples.Sum, $>
>(1, ($): any => {
  return $.reduce((a, b) => a + b, 0)
})

// drop - TODO

// take - TODO

// some - TODO

// every - TODO

export const sort = dual<
  () => <$ extends unknown[]>($: $) => Call<Tuples.Sort, $>,
  <$ extends unknown[]>($: $) => Call<Tuples.Sort, $>
>(1, ($): any => {
  return $.slice().sort()
})

// join - TODO

export const prepend = dual<
  <TElement>(element: TElement) => <$ extends unknown[]>($: $) => Call<Tuples.Prepend<TElement>, $>,
  <$ extends unknown[], TElement>($: $, element: TElement) => Call<Tuples.Prepend<TElement>, $>
>(2, ($, element): any => {
  return [element, ...$]
})

export const append = dual<
  <TElement>(element: TElement) => <$ extends unknown[]>($: $) => Call<Tuples.Append<TElement>, $>,
  <$ extends unknown[], TElement>($: $, element: TElement) => Call<Tuples.Append<TElement>, $>
>(2, ($, element): any => {
  return [...$, element]
})

export const concat = dual<
  <TTuple extends unknown[]>(tuple: TTuple) => <$ extends unknown[]>($: $) => Call<Tuples.Concat<TTuple>, $>,
  <$ extends unknown[], TTuple extends unknown[]>($: $, tuple: TTuple) => Call<Tuples.Concat<TTuple>, $>
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
  <$ extends unknown[]>($: $) => Call<Tuples.Length, $>
>(1, ($): any => {
  return $.length
})

export const min = dual<
  () => <$ extends number[]>($: $) => Call<Tuples.Min, $>,
  <$ extends number[]>($: $) => Call<Tuples.Min, $>
>(1, ($): any => {
  return Math.min(...$)
})

export const max = dual<
  () => <$ extends number[]>($: $) => Call<Tuples.Max, $>,
  <$ extends number[]>($: $) => Call<Tuples.Max, $>
>(1, ($): any => {
  return Math.max(...$)
})
