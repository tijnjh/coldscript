import type { Call, Strings } from 'hotscript'
import { dual } from './utils/dual'

export function length<$ extends string>($: $) {
  return $.length as Call<Strings.Length, $>
}

export function trim<$ extends string>($: $) {
  return $.trim() as Call<Strings.Trim, $>
}

export function trimLeft<$ extends string>($: $) {
  return $.trimStart() as Call<Strings.TrimLeft, $>
}

export function trimRight<$ extends string>($: $) {
  return $.trimEnd() as Call<Strings.TrimRight, $>
}

export const replace = dual<
  <TFrom extends string, TTo extends string>(from: TFrom, to: TTo) => <$ extends string>($: $) => Call<Strings.Replace<TFrom, TTo>, $>,
  <$ extends string, TFrom extends string, TTo extends string>($: $, from: TFrom, to: TTo) => Call<Strings.Replace<TFrom, TTo>, $>
>(3, ($, from, to): any => {
  return $.replaceAll(from, to)
})

export const slice = dual<
  // @ts-expect-error says the type is 'possibly infinite', but it works fine
  <TStart extends number, TEnd extends number>(start: TStart, end: TEnd) => <$ extends string>($: $) => Call<Strings.Slice<TStart, TEnd>, S>,
  <$ extends string, TStart extends number, TEnd extends number>($: $, start: TStart, end: TEnd) => Call<Strings.Slice<TStart, TEnd>, $>
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

export function toTuple<$ extends string>($: $) {
  return $.split('') as Call<Strings.ToTuple, $>
}

export function toNumber<$ extends string>($: $) {
  return Number($) as Call<Strings.ToNumber, $>
}

export function toString<$ extends Strings.Stringifiable>($: $) {
  return String($) as Call<Strings.ToString, $>
}

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

export function uppercase<$ extends string>($: $) {
  return $.toUpperCase() as Call<Strings.Uppercase, $>
}

export function lowercase<$ extends string>($: $) {
  return $.toLowerCase() as Call<Strings.Lowercase, $>
}

export function capitalize<$ extends string>($: $) {
  return $.charAt(0).toUpperCase() + $.slice(1) as Call<Strings.Capitalize, $>
}

export function uncapitalize<$ extends string>($: $) {
  return $.charAt(0).toLowerCase() + $.slice(1) as Call<Strings.Uncapitalize, $>
}

// snakeCase - won't do

// camelCase - won't do

// kebabCase - won't do

// compare - TODO

// lessThan - TODO

// lessThanOrEqual - TODO

// greaterThan - TODO

// greaterThanOrEqual - TODO
