import type { Call, Numbers } from "hotscript";

export function add<N extends number, N2 extends number>(n: N, n2: N2) {
  return (n + n2) as Call<Numbers.Add<N, N2>>;
}

export function sub<N extends number, N2 extends number>(n: N, n2: N2) {
  return (n - n2) as Call<Numbers.Sub<N, N2>>;
}

export function mul<N extends number, N2 extends number>(n: N, n2: N2) {
  return (n * n2) as Call<Numbers.Mul<N, N2>>;
}

export function div<N extends number, N2 extends number>(n: N, n2: N2) {
  return (n / n2) as Call<Numbers.Div<N, N2>>;
}

export function mod<N extends number, N2 extends number>(n: N, n2: N2) {
  return (n % n2) as Call<Numbers.Mod<N, N2>>;
}

// negate - TODO

// abs - TODO

export function max<N extends number, N2 extends number>(n: N, n2: N2) {
  return Math.max(n, n2) as Call<Numbers.Max<N, N2>>;
}

export function min<N extends number, N2 extends number>(n: N, n2: N2) {
  return Math.min(n, n2) as Call<Numbers.Min<N, N2>>;
}

export function power<N extends number, N2 extends number>(n: N, n2: N2) {
  return Math.pow(n, n2) as Call<Numbers.Power<N, N2>>;
}

// compare - TODO

export function equal<N extends number, N2 extends number>(n: N, n2: N2) {
  // @ts-expect-error
  return (n === n2) as Call<Numbers.Equal<N, N2>>;
}

export function notEqual<N extends number, N2 extends number>(n: N, n2: N2) {
  // @ts-expect-error
  return (n !== n2) as Call<Numbers.NotEqual<N, N2>>;
}

export function lessThan<N extends number, N2 extends number>(n: N, n2: N2) {
  return (n < n2) as Call<Numbers.LessThan<N, N2>>;
}

export function lessThanOrEqual<N extends number, N2 extends number>(
  n: N,
  n2: N2,
) {
  return (n <= n2) as Call<Numbers.LessThanOrEqual<N, N2>>;
}

export function greaterThan<N extends number, N2 extends number>(n: N, n2: N2) {
  return (n > n2) as Call<Numbers.GreaterThan<N, N2>>;
}

export function greaterThanOrEqual<N extends number, N2 extends number>(
  n: N,
  n2: N2,
) {
  return (n >= n2) as Call<Numbers.GreaterThanOrEqual<N, N2>>;
}
