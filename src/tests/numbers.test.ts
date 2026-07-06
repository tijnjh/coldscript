import { describe, expect, expectTypeOf, it } from 'vitest'
import { numbers } from '../index'

describe('numbers', () => {
  it('add', () => {
    const result = numbers.add(1, 2)
    const expected = 3

    expectTypeOf(result).toEqualTypeOf<typeof expected>()
    expect(result).toBe(expected)
  })

  it('sub', () => {
    const result = numbers.sub(5, 3)
    const expected = 2

    expectTypeOf(result).toEqualTypeOf<typeof expected>()
    expect(result).toBe(expected)
  })

  it('mul', () => {
    const result = numbers.mul(2, 3)
    const expected = 6

    expectTypeOf(result).toEqualTypeOf<typeof expected>()
    expect(result).toBe(expected)
  })

  it('div', () => {
    const result = numbers.div(10, 2)
    const expected = 5

    expectTypeOf(result).toEqualTypeOf<typeof expected>()
    expect(result).toBe(expected)
  })

  it('mod', () => {
    const result = numbers.mod(10, 3)
    const expected = 1

    expectTypeOf(result).toEqualTypeOf<typeof expected>()
    expect(result).toBe(expected)
  })

  it('max', () => {
    const result = numbers.max(5, 10)
    const expected = 10

    expectTypeOf(result).toEqualTypeOf<typeof expected>()
    expect(result).toBe(expected)
  })

  it('min', () => {
    const result = numbers.min(5, 10)
    const expected = 5

    expectTypeOf(result).toEqualTypeOf<typeof expected>()
    expect(result).toBe(expected)
  })

  it('power', () => {
    const result = numbers.power(2, 3)
    const expected = 8

    expectTypeOf(result).toEqualTypeOf<typeof expected>()
    expect(result).toBe(expected)
  })

  it('equal', () => {
    const result = numbers.equal(5, 5)
    const expected = true

    expectTypeOf(result).toEqualTypeOf<typeof expected>()
    expect(result).toBe(expected)
  })

  it('notEqual', () => {
    const result = numbers.notEqual(5, 10)
    const expected = true

    expectTypeOf(result).toEqualTypeOf<typeof expected>()
    expect(result).toBe(expected)
  })

  it('lessThan', () => {
    const result = numbers.lessThan(5, 10)
    const expected = true

    expectTypeOf(result).toEqualTypeOf<typeof expected>()
    expect(result).toBe(expected)
  })

  it('lessThanOrEqual', () => {
    const result = numbers.lessThanOrEqual(5, 10)
    const expected = true

    expectTypeOf(result).toEqualTypeOf<typeof expected>()
    expect(result).toBe(expected)
  })

  it('greaterThan', () => {
    const result = numbers.greaterThan(10, 5)
    const expected = true

    expectTypeOf(result).toEqualTypeOf<typeof expected>()
    expect(result).toBe(expected)
  })

  it('greaterThanOrEqual', () => {
    const result = numbers.greaterThanOrEqual(10, 5)
    const expected = true

    expectTypeOf(result).toEqualTypeOf<typeof expected>()
    expect(result).toBe(expected)
  })
})
