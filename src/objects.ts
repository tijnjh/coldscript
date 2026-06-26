import { Call, Objects } from "hotscript";

export function entries<T>(o: { [s: string]: T } | ArrayLike<T>) {
  return Object.entries(o) as Call<Objects.Entries, T>;
}
