import { describe, it } from 'vitest'
import { numbers } from '../src/index'
import { strictExpect } from './utils'

describe('numbers', () => {
  it('add', () => {
    strictExpect(numbers.add(1, 2)).toEqual(3)
  })

  it('sub', () => {
    strictExpect(numbers.sub(5, 3)).toEqual(2)
  })

  it('mul', () => {
    strictExpect(numbers.mul(2, 3)).toEqual(6)
  })

  it('div', () => {
    strictExpect(numbers.div(10, 2)).toEqual(5)
    strictExpect(numbers.div(10, 0)).toEqual(Infinity)
  })

  it('mod', () => {
    strictExpect(numbers.mod(10, 3)).toEqual(1)
  })

  it('max', () => {
    strictExpect(numbers.max(5, 10)).toEqual(10)
  })

  it('min', () => {
    strictExpect(numbers.min(5, 10)).toEqual(5)
  })

  it('power', () => {
    strictExpect(numbers.power(2, 3)).toEqual(8)
  })

  it('equal', () => {
    strictExpect(numbers.equal(5, 5)).toEqual(true)
    strictExpect(numbers.equal(5, 5.0)).toEqual(true)
  })

  it('notEqual', () => {
    strictExpect(numbers.notEqual(5, 10)).toEqual(true)
  })

  it('lessThan', () => {
    strictExpect(numbers.lessThan(5, 10)).toEqual(true)
  })

  it('lessThanOrEqual', () => {
    strictExpect(numbers.lessThanOrEqual(5, 10)).toEqual(true)
  })

  it('greaterThan', () => {
    strictExpect(numbers.greaterThan(10, 5)).toEqual(true)
  })

  it('greaterThanOrEqual', () => {
    strictExpect(numbers.greaterThanOrEqual(10, 5)).toEqual(true)
  })
})
