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
