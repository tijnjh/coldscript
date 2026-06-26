import type { Call, Objects } from "hotscript";

export function entries<O extends object>(o: O) {
  return Object.entries(o) as Call<Objects.Entries, O>;
}

export function keys<O extends object>(o: O) {
  return Object.keys(o) as unknown as Call<Objects.Keys, O>;
}

export function values<O extends object>(o: O) {
  return Object.values(o) as Call<Objects.Values, O>;
}
