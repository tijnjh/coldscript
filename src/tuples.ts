import type { Call, Tuples } from "hotscript";

export function at<T extends unknown[], TIndex extends number>(
  t: T,
  index: TIndex,
) {
  return t.at(index) as Call<Tuples.At<TIndex>, T>;
}

export function isEmpty<T extends unknown[]>(t: T) {
  return (t.length === 0) as Call<Tuples.IsEmpty, T>;
}

export function head<T extends unknown[]>(t: T) {
  return t[0] as Call<Tuples.Head, T>;
}

// export function map<T extends unknown[], TFn extends Fn>(
//   t: T,
//   fn: TFn,
// ) {
//   return t.map(fn) as Call<Tuples.Map<TFn>, T>;
// }
