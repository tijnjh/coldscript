import type { Call, Numbers } from 'hotscript'
import { dual } from './utils/dual'

export const add = dual<
  <N extends number>(n: N) => <$ extends number>(self: $) => Call<Numbers.Add<$, N>>,
  <$ extends number, N extends number>(self: $, n: N) => Call<Numbers.Add<$, N>>
>(2, ($, n): any => {
  return $ + n
})

export const sub = dual<
  <N extends number>(n: N) => <$ extends number>(self: $) => Call<Numbers.Sub<$, N>>,
  <$ extends number, N extends number>(self: $, n: N) => Call<Numbers.Sub<$, N>>
>(2, ($, n): any => {
  return $ - n
})

export const mul = dual<
  <N extends number>(n: N) => <$ extends number>(self: $) => Call<Numbers.Mul<$, N>>,
  <$ extends number, N extends number>(self: $, n: N) => Call<Numbers.Mul<$, N>>
>(2, ($, n): any => {
  return $ * n
})

export const div = dual<
  <N extends number>(n: N) => <$ extends number>(self: $) => Call<Numbers.Div<$, N>>,
  <$ extends number, N extends number>(self: $, n: N) => Call<Numbers.Div<$, N>>
>(2, ($, n): any => {
  return $ / n
})

export const mod = dual<
  <N extends number>(n: N) => <$ extends number>(self: $) => Call<Numbers.Mod<$, N>>,
  <$ extends number, N extends number>(self: $, n: N) => Call<Numbers.Mod<$, N>>
>(2, ($, n): any => {
  return $ % n
})

// negate - TODO

// abs - TODO

export const max = dual<
  <N extends number>(n: N) => <$ extends number>(self: $) => Call<Numbers.Max<$, N>>,
  <$ extends number, N extends number>(self: $, n: N) => Call<Numbers.Max<$, N>>
>(2, ($, n): any => {
  return Math.max($, n)
})

export const min = dual<
  <N extends number>(n: N) => <$ extends number>(self: $) => Call<Numbers.Min<$, N>>,
  <$ extends number, N extends number>(self: $, n: N) => Call<Numbers.Min<$, N>>
>(2, ($, n): any => {
  return Math.min($, n)
})

export const power = dual<
  <N extends number>(n: N) => <$ extends number>(self: $) => Call<Numbers.Power<$, N>>,
  <$ extends number, N extends number>(self: $, n: N) => Call<Numbers.Power<$, N>>
>(2, ($, n): any => {
  return $ ** n
})

// compare - TODO

export const equal = dual<
  <N extends number>(n: N) => <$ extends number>(n: $) => Call<Numbers.Equal<$, N>>,
  <$ extends number, N extends number>($: $, n: N) => Call<Numbers.Equal<$, N>>
>(2, ($, n): any => {
  // @ts-expect-error
  return $ === n
})

export const notEqual = dual<
  <N extends number>(n: N) => <$ extends number>(n: $) => Call<Numbers.NotEqual<$, N>>,
  <$ extends number, N extends number>($: $, n: N) => Call<Numbers.NotEqual<$, N>>
>(2, ($, n): any => {
  // @ts-expect-error
  return $ !== n
})

export const lessThan = dual<
  <N extends number>(n: N) => <$ extends number>(n: $) => Call<Numbers.LessThan<$, N>>,
  <$ extends number, N extends number>($: $, n: N) => Call<Numbers.LessThan<$, N>>
>(2, ($, n): any => {
  return $ < n
})

export const lessThanOrEqual = dual<
  <N extends number>(n2: N) => <$ extends number>(n: $) => Call<Numbers.LessThanOrEqual<$, N>>,
  <$ extends number, N extends number>($: $, n: N) => Call<Numbers.LessThanOrEqual<$, N>>
>(2, ($, n): any => {
  return $ <= n
})

export const greaterThan = dual<
  <N extends number>(n: N) => <$ extends number>(n: $) => Call<Numbers.GreaterThan<$, N>>,
  <$ extends number, N extends number>($: $, n: N) => Call<Numbers.GreaterThan<$, N>>
>(2, ($, n): any => {
  return $ > n
})

export const greaterThanOrEqual = dual<
  <N extends number>(n: N) => <$ extends number>(n: $) => Call<Numbers.GreaterThanOrEqual<$, N>>,
  <$ extends number, N extends number>($: $, n: N) => Call<Numbers.GreaterThanOrEqual<$, N>>
>(2, ($, n): any => {
  return $ >= n
})
