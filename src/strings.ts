import type { Call, Strings } from 'hotscript'
import { dual } from './utils/dual'

export const length = dual<
  () => <$ extends string>($: $) => Call<Strings.Length, $>,
  <$ extends string>($: $) => Call<Strings.Length, $>
>(1, ($): any => {
  return $.length
})

export const trim = dual<
  () => <$ extends string>($: $) => Call<Strings.Trim, $>,
  <$ extends string>($: $) => Call<Strings.Trim, $>
>(1, ($): any => {
  return $.trim()
})

export const trimLeft = dual<
  () => <$ extends string>($: $) => Call<Strings.TrimLeft, $>,
  <$ extends string>($: $) => Call<Strings.TrimLeft, $>
>(1, ($): any => {
  return $.trimStart()
})

export const trimRight = dual<
  () => <$ extends string>($: $) => Call<Strings.TrimRight, $>,
  <$ extends string>($: $) => Call<Strings.TrimRight, $>
>(1, ($): any => {
  return $.trimEnd()
})

export const replace = dual<
  <TFrom extends string, TTo extends string>(from: TFrom, to: TTo) => <$ extends string>($: $) => Call<Strings.Replace<TFrom, TTo>, $>,
  <$ extends string, TFrom extends string, TTo extends string>($: $, from: TFrom, to: TTo) => Call<Strings.Replace<TFrom, TTo>, $>
>(3, ($, from, to): any => {
  return $.replaceAll(from, to)
})

export const slice = dual<
  // @ts-expect-error says the type is 'possibly infinite', but it works fine
  <TStart extends number, TEnd extends number>(start: TStart, end: TEnd) => <$ extends string>($: $) => Call<Strings.Slice<TStart, TEnd>, S>,
  // @ts-expect-error
  <$ extends string, TStart extends number, TEnd extends number>($: $, start: TStart, end: TEnd) => Call<Strings.Slice<TStart, TEnd>, S>
>(3, ($, start, end): any => {
  return $.slice(start, end)
})

export const split = dual<
  <TSep extends string>(sep: TSep) => <$ extends string>($: $) => Call<Strings.Split<TSep>, $>,
  <$ extends string, TSep extends string>($: $, sep: TSep) => Call<Strings.Split<TSep>, $>
>(2, ($, sep): any => {
  return $.split(sep)
})

export const repeat = dual<
  <TTimes extends number>(times: TTimes) => <$ extends string>($: $) => Call<Strings.Repeat<TTimes>, $>,
  <$ extends string, TTimes extends number>($: $, times: TTimes) => Call<Strings.Repeat<TTimes>, $>
>(2, (s, times): any => {
  return s.repeat(times)
})

// export function startsWith<S extends string, TStart extends string>(
//   s: S,
//   start: TStart,
// ) {
//   return s.startsWith(start) as Call<Strings.StartsWith<TStart>, S>
// }

export const startsWith = dual<
  <TStart extends string>(start: TStart) => <$ extends string>($: $) => Call<Strings.StartsWith<TStart>, $>,
  <$ extends string, TStart extends string>($: $, start: TStart) => Call<Strings.StartsWith<TStart>, $>
>(2, (s, start): any => {
  return s.startsWith(start)
})

export const endsWith = dual<
  <TEnd extends string>(end: TEnd) => <$ extends string>($: $) => Call<Strings.EndsWith<TEnd>, $>,
  <$ extends string, TEnd extends string>($: $, end: TEnd) => Call<Strings.EndsWith<TEnd>, $>
>(2, (s, end): any => {
  return s.endsWith(end)
})

export const toTuple = dual<
  () => <$ extends string>($: $) => Call<Strings.ToTuple, $>,
  <$ extends string>($: $) => Call<Strings.ToTuple, $>
>(1, ($): any => {
  return $.split('')
})

export const toNumber = dual<
  () => <$ extends string>($: $) => Call<Strings.ToNumber, $>,
  <$ extends string>($: $) => Call<Strings.ToNumber, $>
>(1, ($): any => {
  return Number($)
})

export const toString = dual<
  () => <$ extends Strings.Stringifiable>($: $) => Call<Strings.ToString, $>,
  <$ extends Strings.Stringifiable>($: $) => Call<Strings.ToString, $>
>(1, ($): any => {
  return String($)
})

export const prepend = dual<
  <TStart extends string>(start: TStart) => <$ extends string>($: $) => Call<Strings.Prepend<TStart>, $>,
  <$ extends string, TStart extends string>($: $, start: TStart) => Call<Strings.Prepend<TStart>, $>
>(2, (s, start): any => {
  return start + s
})

export const append = dual<
  <TEnd extends string>(end: TEnd) => <$ extends string>($: $) => Call<Strings.Append<TEnd>, $>,
  <$ extends string, TEnd extends string>($: $, end: TEnd) => Call<Strings.Append<TEnd>, $>
>(2, (s, end): any => {
  return s + end
})

export const uppercase = dual<
  () => <$ extends string>($: $) => Call<Strings.Uppercase, $>,
  <$ extends string>($: $) => Call<Strings.Uppercase, $>
>(1, ($): any => {
  return $.toUpperCase()
})

export const lowercase = dual<
  () => <$ extends string>($: $) => Call<Strings.Lowercase, $>,
  <$ extends string>($: $) => Call<Strings.Lowercase, $>
>(1, ($): any => {
  return $.toLowerCase()
})

export const capitalize = dual<
  () => <$ extends string>($: $) => Call<Strings.Capitalize, $>,
  <$ extends string>($: $) => Call<Strings.Capitalize, $>
>(1, ($): any => {
  return $.charAt(0).toUpperCase() + $.slice(1)
})

export const uncapitalize = dual<
  () => <$ extends string>($: $) => Call<Strings.Uncapitalize, $>,
  <$ extends string>($: $) => Call<Strings.Uncapitalize, $>
>(1, ($): any => {
  return $.charAt(0).toLowerCase() + $.slice(1)
})

// snakeCase - won't do

// camelCase - won't do

// kebabCase - won't do

// compare - TODO

// lessThan - TODO

// lessThanOrEqual - TODO

// greaterThan - TODO

// greaterThanOrEqual - TODO
