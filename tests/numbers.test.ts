import { describe, it } from 'vitest'
import { numbers } from '../src/index'
import { expect } from './utils'

describe('numbers', () => {
  it('add', () => {
    expect(numbers.add(1, 2)).toEqual(3)
    expect(numbers.add(1, -2)).toEqual(-1)
    // @ts-expect-error hotscript arithmetic is integer-oriented here
    expect(numbers.add(0.1, 0.2)).toEqual(0.30000000000000004)
    expect(numbers.add(2)(1)).toEqual(3)
  })

  it('sub', () => {
    expect(numbers.sub(5, 3)).toEqual(2)
    expect(numbers.sub(-5, -3)).toEqual(-2)
  })

  it('mul', () => {
    expect(numbers.mul(2, 3)).toEqual(6)
    expect(numbers.mul(10, 0)).toEqual(0)
    expect(numbers.mul(-2, 3)).toEqual(-6)
  })

  it('div', () => {
    expect(numbers.div(10, 2)).toEqual(5)
    expect(numbers.div(10, 0)).toEqual(Infinity)
    expect(numbers.div(-10, 0)).toEqual(-Infinity)
    expect(Object.is(numbers.div(0, -1), -0)).toEqual(true)
  })

  it('mod', () => {
    expect(numbers.mod(10, 3)).toEqual(1)
    expect(numbers.mod(-10, 3)).toEqual(-1)
    // @ts-expect-error hotscript mod by zero does not model runtime NaN
    expect(numbers.mod(10, 0)).toEqual(Number.NaN)
  })

  it('max', () => {
    expect(numbers.max(5, 10)).toEqual(10)
    expect(numbers.max(-5, -10)).toEqual(-5)
  })

  it('min', () => {
    expect(numbers.min(5, 10)).toEqual(5)
    expect(numbers.min(-5, -10)).toEqual(-10)
  })

  it('power', () => {
    expect(numbers.power(2, 3)).toEqual(8)
    expect(numbers.power(2, 0)).toEqual(1)
    // @ts-expect-error hotscript power is integer-oriented here
    expect(numbers.power(4, 0.5)).toEqual(2)
  })

  it('equal', () => {
    expect(numbers.equal(5, 5)).toEqual(true)
    expect(numbers.equal(5, 5.0)).toEqual(true)
    // @ts-expect-error hotscript treats number/number equality differently from runtime NaN
    expect(numbers.equal(Number.NaN, Number.NaN)).toEqual(false)
  })

  it('notEqual', () => {
    expect(numbers.notEqual(5, 10)).toEqual(true)
    // @ts-expect-error hotscript treats number/number equality differently from runtime NaN
    expect(numbers.notEqual(Number.NaN, Number.NaN)).toEqual(true)
  })

  it('lessThan', () => {
    expect(numbers.lessThan(5, 10)).toEqual(true)
    expect(numbers.lessThan(10, 10)).toEqual(false)
  })

  it('lessThanOrEqual', () => {
    expect(numbers.lessThanOrEqual(5, 10)).toEqual(true)
    expect(numbers.lessThanOrEqual(10, 10)).toEqual(true)
  })

  it('greaterThan', () => {
    expect(numbers.greaterThan(10, 5)).toEqual(true)
    expect(numbers.greaterThan(10, 10)).toEqual(false)
  })

  it('greaterThanOrEqual', () => {
    expect(numbers.greaterThanOrEqual(10, 5)).toEqual(true)
    expect(numbers.greaterThanOrEqual(10, 10)).toEqual(true)
  })

  it('supports data-last calls', () => {
    expect(numbers.sub(3)(5)).toEqual(2)
    expect(numbers.mul(3)(5)).toEqual(15)
    expect(numbers.div(2)(10)).toEqual(5)
    expect(numbers.mod(3)(10)).toEqual(1)
    expect(numbers.max(3)(5)).toEqual(5)
    expect(numbers.min(3)(5)).toEqual(3)
    expect(numbers.power(3)(2)).toEqual(8)
    expect(numbers.equal(5)(5)).toEqual(true)
    expect(numbers.notEqual(3)(5)).toEqual(true)
    expect(numbers.lessThan(5)(3)).toEqual(true)
    expect(numbers.lessThanOrEqual(5)(5)).toEqual(true)
    expect(numbers.greaterThan(3)(5)).toEqual(true)
    expect(numbers.greaterThanOrEqual(5)(5)).toEqual(true)
  })
})
