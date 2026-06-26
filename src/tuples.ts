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

// toUnion - no runtime equivalent

// toIntersection - no runtime equivalent

export function head<T extends unknown[]>(t: T) {
  return t[0] as Call<Tuples.Head, T>;
}

export function tail<T extends unknown[]>(t: T) {
  return t.slice(1) as Call<Tuples.Tail, T>;
}

export function last<T extends unknown[]>(t: T) {
  return t[t.length - 1] as Call<Tuples.Last, T>;
}

// map - TODO

// flatMap  - TODO

// reduce - TODO

export function reverse<T extends unknown[]>(t: T) {
  return t.slice().reverse() as Call<Tuples.Reverse, T>;
}

// reduceRight - TODO

// filter - TODO

// find - TODO

export function sum<T extends number[]>(t: T) {
  return t.reduce((a, b) => a + b, 0) as Call<Tuples.Sum, T>;
}

// drop - TODO

// take - TODO

// some - TODO

// every - TODO

export function sort<T extends unknown[]>(t: T) {
  return t.slice().sort() as Call<Tuples.Sort, T>;
}

// join - TODO

export function prepend<T extends unknown[], TElement>(
  t: T,
  element: TElement,
) {
  return [element, ...t] as Call<Tuples.Prepend<TElement>, T>;
}

export function append<T extends unknown[], TElement>(t: T, element: TElement) {
  return [...t, element] as Call<Tuples.Append<TElement>, T>;
}

export function concat<T extends unknown[], T2 extends unknown[]>(
  t: T,
  t2: T2,
) {
  return [...t, ...t2] as Call<Tuples.Concat<T2>, T>;
}

// partition - TODO

// splitAt - TODO

// zip - TODO

// zipWith - TODO

// groupBy - TODO

// range - TODO

export function length<T extends unknown[]>(t: T) {
  return t.length as Call<Tuples.Length, T>;
}

export function min<T extends number[]>(t: T) {
  return Math.min(...t) as Call<Tuples.Min, T>;
}

export function max<T extends number[]>(t: T) {
  return Math.max(...t) as Call<Tuples.Max, T>;
}
