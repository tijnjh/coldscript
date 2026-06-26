import type { Call, Objects } from "hotscript";

export function fromEntries<
  O extends Iterable<readonly [PropertyKey, unknown]>,
>(o: O) {
  return Object.fromEntries(o) as Call<Objects.FromEntries, O>;
}

export function entries<O extends object>(o: O) {
  return Object.entries(o) as Call<Objects.Entries, O>;
}

export function keys<O extends object>(o: O) {
  return Object.keys(o) as unknown as Call<Objects.Keys, O>;
}

export function values<O extends object>(o: O) {
  return Object.values(o) as Call<Objects.Values, O>;
}

export function assign<O extends object, TO2 extends object>(o: O, o2: TO2) {
  return Object.assign(o, o2) as unknown as Call<Objects.Assign<TO2>, O>;
}
