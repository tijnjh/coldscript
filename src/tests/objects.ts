import { objects } from '../index'

objects.fromEntries([
  ['a', 1],
  ['b', 2],
  ['c', 3],
]) satisfies { a: 1, b: 2, c: 3 }

objects.entries({
  a: 1,
  b: 2,
  c: 3,
}) satisfies [['a', 1], ['b', 2], ['c', 3]]

objects.keys({
  a: 1,
  b: 2,
  c: 3,
}) satisfies ['a', 'b', 'c']

objects.values({
  a: 1,
  b: 2,
  c: 3,
}) satisfies [2, 3, 1]

objects.assign({ a: 1 }, { b: 2 }) satisfies { a: 1, b: 2 }
