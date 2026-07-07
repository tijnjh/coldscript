import { describe, it } from 'vitest'
import { numbers } from '../index'
import { checkTypeAndValue } from './utils'

describe('numbers', () => {
  it('add', () => {
    checkTypeAndValue({
      input: numbers.add(1, 2),
      expected: 3,
    })
  })

  it('sub', () => {
    checkTypeAndValue({
      input: numbers.sub(5, 3),
      expected: 2,
    })
  })

  it('mul', () => {
    checkTypeAndValue({
      input: numbers.mul(2, 3),
      expected: 6,
    })
  })

  it('div', () => {
    checkTypeAndValue({
      input: numbers.div(10, 2),
      expected: 5,
    })
  })

  it('mod', () => {
    checkTypeAndValue({
      input: numbers.mod(10, 3),
      expected: 1,
    })
  })

  it('max', () => {
    checkTypeAndValue({
      input: numbers.max(5, 10),
      expected: 10,
    })
  })

  it('min', () => {
    checkTypeAndValue({
      input: numbers.min(5, 10),
      expected: 5,
    })
  })

  it('power', () => {
    checkTypeAndValue({
      input: numbers.power(2, 3),
      expected: 8,
    })
  })

  it('equal', () => {
    checkTypeAndValue({
      input: numbers.equal(5, 5),
      expected: true,
    })
  })

  it('notEqual', () => {
    checkTypeAndValue({
      input: numbers.notEqual(5, 10),
      expected: true,
    })
  })

  it('lessThan', () => {
    checkTypeAndValue({
      input: numbers.lessThan(5, 10),
      expected: true,
    })
  })

  it('lessThanOrEqual', () => {
    checkTypeAndValue({
      input: numbers.lessThanOrEqual(5, 10),
      expected: true,
    })
  })

  it('greaterThan', () => {
    checkTypeAndValue({
      input: numbers.greaterThan(10, 5),
      expected: true,
    })
  })

  it('greaterThanOrEqual', () => {
    checkTypeAndValue({
      input: numbers.greaterThanOrEqual(10, 5),
      expected: true,
    })
  })
})
