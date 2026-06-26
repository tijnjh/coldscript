import type { Call, Strings } from "hotscript";

export function length<S extends string>(s: S) {
  return s.length as Call<Strings.Length, S>;
}

export function trim<S extends string>(s: S) {
  return s.trim() as Call<Strings.Trim, S>;
}

export function trimLeft<S extends string>(s: S) {
  return s.trimStart() as Call<Strings.TrimLeft, S>;
}

export function trimRight<S extends string>(s: S) {
  return s.trimEnd() as Call<Strings.TrimRight, S>;
}

export function replace<
  S extends string,
  TFrom extends string,
  TTo extends string,
>(s: S, from: TFrom, to: TTo) {
  return s.replace(from, to) as Call<Strings.Replace<TFrom, TTo>, S>;
}

export function slice<
  S extends string,
  TStart extends number,
  TEnd extends number,
>(s: S, start: TStart, end: TEnd) {
  // @ts-expect-error says the type is 'possibly infinite', but it works fine
  return s.slice(start, end) as Call<Strings.Slice<TStart, TEnd>, S>;
}

export function split<S extends string, TSep extends string>(s: S, sep: TSep) {
  return s.split(sep) as Call<Strings.Split<TSep>, S>;
}

export function repeat<S extends string, TTimes extends number>(
  s: S,
  times: TTimes,
) {
  return s.repeat(times) as Call<Strings.Repeat<TTimes>, S>;
}

export function startsWith<S extends string, TStart extends string>(
  s: S,
  start: TStart,
) {
  return s.startsWith(start) as Call<Strings.StartsWith<TStart>, S>;
}

export function endsWith<S extends string, TEnd extends string>(
  s: S,
  end: TEnd,
) {
  return s.endsWith(end) as Call<Strings.EndsWith<TEnd>, S>;
}

export function toTuple<S extends string>(s: S) {
  return s.split("") as Call<Strings.ToTuple, S>;
}

export function toNumber<S extends string>(s: S) {
  return Number(s) as Call<Strings.ToNumber, S>;
}

export function toString<S extends Strings.Stringifiable>(s: S) {
  return String(s) as Call<Strings.ToString, S>;
}

export function prepend<S extends string, TStart extends string>(
  s: S,
  start: TStart,
) {
  return (start + s) as Call<Strings.Prepend<TStart, S>>;
}

export function append<S extends string, TEnd extends string>(s: S, end: TEnd) {
  return (s + end) as Call<Strings.Append<TEnd, S>>;
}

export function uppercase<S extends string>(s: S) {
  return s.toUpperCase() as Call<Strings.Uppercase, S>;
}

export function lowercase<S extends string>(s: S) {
  return s.toLowerCase() as Call<Strings.Lowercase, S>;
}

export function capitalize<S extends string>(s: S) {
  return (s[0].toUpperCase() + s.slice(1)) as Call<Strings.Capitalize, S>;
}

export function uncapitalize<S extends string>(s: S) {
  return (s[0].toLowerCase() + s.slice(1)) as Call<Strings.Uncapitalize, S>;
}

// snakeCase - won't do

// camelCase - won't do

// kebabCase - won't do

// compare - TODO

// lessThan - TODO

// lessThanOrEqual - TODO

// greaterThan - TODO

// greaterThanOrEqual - TODO
