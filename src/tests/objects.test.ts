import { describe, expect, expectTypeOf, it } from 'vitest'
import { objects } from '../index'

describe('objects', () => {
  it('fromEntries', () => {
    const result = objects.fromEntries([
      ['a', 1],
      ['b', 2],
      ['c', 3],
    ])
    const expected = { a: 1, b: 2, c: 3 } as const

    expectTypeOf(result).toEqualTypeOf<typeof expected>()
    expect(result).toEqual(expected)
  })

  it('entries', () => {
    const result = objects.entries({
      a: 1,
      b: 2,
      c: 3,
    })
    const expected = [['a', 1], ['b', 2], ['c', 3]] as const

    expectTypeOf(result).toEqualTypeOf<typeof expected>()
    expect(result).toEqual(expected)
  })

  it('keys', () => {
    const result = objects.keys({
      a: 1,
      b: 2,
      c: 3,
    })
    const expected = ['a', 'b', 'c'] as const

    expectTypeOf(result).toEqualTypeOf<typeof expected>()
    expect(result).toEqual(expected)
  })

  it('values', () => {
    expect(
      objects.values({ a: 1, b: 2, c: 3 }),
    ).toEqual<[1, 2, 3]>([1, 2, 3])
  })

  it('assign', () => {
    const result = objects.assign({ a: 1 }, { b: 2 })
    const expected = { a: 1, b: 2 } as const

    expectTypeOf(result).toEqualTypeOf<typeof expected>()
    expect(result).toEqual(expected)
  })
})

// objects.fromEntries([
//   ['a', 1],
//   ['b', 2],
//   ['c', 3],
// ]) satisfies { a: 1, b: 2, c: 3 }

// objects.entries({
//   a: 1,
//   b: 2,
//   c: 3,
// }) satisfies [['a', 1], ['b', 2], ['c', 3]]

// objects.keys({
//   a: 1,
//   b: 2,
//   c: 3,
// }) satisfies ['a', 'b', 'c']

// objects.values({
//   a: 1,
//   b: 2,
//   c: 3,
// }) satisfies (1 | 2 | 3)[]

// objects.assign({ a: 1 }, { b: 2 }) satisfies { a: 1, b: 2 }
