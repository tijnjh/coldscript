import type { Call, Objects, Pipe, Unions } from "hotscript";

export function fromEntries<
  O extends Iterable<readonly [PropertyKey, unknown]>,
>(o: O) {
  return Object.fromEntries(o) as Call<Objects.FromEntries, O>;
}

export function entries<O extends object>(o: O) {
  return Object.entries(o) as Pipe<O, [Objects.Entries, Unions.ToTuple]>;
}

// mapValues - TODO

// mapKeys - TODO

// kebabCase - won't do

// snakeCase - won't do

// camelCase - won't do

// mapKeysDeep - TODO

// kebabCaseDeep - won't do

// snakeCaseDeep - won't do

// camelCaseDeep - won't do

export function keys<O extends object>(o: O) {
  return Object.keys(o) as Pipe<O, [Objects.Keys, Unions.ToTuple]>;
}

export function values<O extends object>(o: O) {
  return Object.values(o) as Pipe<O, [Objects.Values, Unions.ToTuple]>;
}

export function assign<O extends object, TO2 extends object>(o: O, o2: TO2) {
  return Object.assign(o, o2) as unknown as Call<Objects.Assign<TO2>, O>;
}
