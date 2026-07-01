import type { Call, Numbers } from 'hotscript'
import { dual } from './utils/dual.ts'

export const add = dual<
  <N extends number>(n: N) => <T extends number>(self: T) => Call<Numbers.Add<T, N>>,
  <T extends number, N extends number>(self: T, n: N) => Call<Numbers.Add<T, N>>
>(2, (self, n): any => {
  return self + n
})

export const sub = dual<
  <N extends number>(n: N) => <T extends number>(self: T) => Call<Numbers.Sub<T, N>>,
  <T extends number, N extends number>(self: T, n: N) => Call<Numbers.Sub<T, N>>
>(2, (self, n): any => {
  return self - n
})

export const mul = dual<
  <N extends number>(n: N) => <T extends number>(self: T) => Call<Numbers.Mul<T, N>>,
  <T extends number, N extends number>(self: T, n: N) => Call<Numbers.Mul<T, N>>
>(2, (self, n): any => {
  return self * n
})

export const div = dual<
  <N extends number>(n: N) => <T extends number>(self: T) => Call<Numbers.Div<T, N>>,
  <T extends number, N extends number>(self: T, n: N) => Call<Numbers.Div<T, N>>
>(2, (self, n): any => {
  return self / n
})

export const mod = dual<
  <N extends number>(n: N) => <T extends number>(self: T) => Call<Numbers.Mod<T, N>>,
  <T extends number, N extends number>(self: T, n: N) => Call<Numbers.Mod<T, N>>
>(2, (self, n): any => {
  return self % n
})

// negate - TODO

// abs - TODO

export const max = dual<
  <N extends number>(n: N) => <T extends number>(self: T) => Call<Numbers.Max<T, N>>,
  <T extends number, N extends number>(self: T, n: N) => Call<Numbers.Max<T, N>>
>(2, (self, n): any => {
  return Math.max(self, n)
})

export const min = dual<
  <N extends number>(n: N) => <T extends number>(self: T) => Call<Numbers.Min<T, N>>,
  <T extends number, N extends number>(self: T, n: N) => Call<Numbers.Min<T, N>>
>(2, (self, n): any => {
  return Math.min(self, n)
})

export const power = dual<
  <N extends number>(n: N) => <T extends number>(self: T) => Call<Numbers.Power<T, N>>,
  <T extends number, N extends number>(self: T, n: N) => Call<Numbers.Power<T, N>>
>(2, (self, n): any => {
  return self ** n
})

// compare - TODO

export const equal = dual<
  <N2 extends number>(n2: N2) => <N extends number>(n: N) => Call<Numbers.Equal<N, N2>>,
  <N extends number, N2 extends number>(n: N, n2: N2) => Call<Numbers.Equal<N, N2>>
>(2, (n, n2): any => {
  // @ts-expect-error
  return n === n2
})

export const notEqual = dual<
  <N2 extends number>(n2: N2) => <N extends number>(n: N) => Call<Numbers.NotEqual<N, N2>>,
  <N extends number, N2 extends number>(n: N, n2: N2) => Call<Numbers.NotEqual<N, N2>>
>(2, (n, n2): any => {
  // @ts-expect-error
  return n !== n2
})

export const lessThan = dual<
  <N2 extends number>(n2: N2) => <N extends number>(n: N) => Call<Numbers.LessThan<N, N2>>,
  <N extends number, N2 extends number>(n: N, n2: N2) => Call<Numbers.LessThan<N, N2>>
>(2, (n, n2): any => {
  return n < n2
})

export const lessThanOrEqual = dual<
  <N2 extends number>(n2: N2) => <N extends number>(n: N) => Call<Numbers.LessThanOrEqual<N, N2>>,
  <N extends number, N2 extends number>(n: N, n2: N2) => Call<Numbers.LessThanOrEqual<N, N2>>
>(2, (n, n2): any => {
  return n <= n2
})

export const greaterThan = dual<
  <N2 extends number>(n2: N2) => <N extends number>(n: N) => Call<Numbers.GreaterThan<N, N2>>,
  <N extends number, N2 extends number>(n: N, n2: N2) => Call<Numbers.GreaterThan<N, N2>>
>(2, (n, n2): any => {
  return n > n2
})

export const greaterThanOrEqual = dual<
  <N2 extends number>(n2: N2) => <N extends number>(n: N) => Call<Numbers.GreaterThanOrEqual<N, N2>>,
  <N extends number, N2 extends number>(n: N, n2: N2) => Call<Numbers.GreaterThanOrEqual<N, N2>>
>(2, (n, n2): any => {
  return n >= n2
})
