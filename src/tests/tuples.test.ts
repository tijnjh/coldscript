import { describe, it } from 'vitest'
import { tuples } from '..'
import { checkTypeAndValue } from './utils'

describe('tuples', () => {
  it('at', () => {
    checkTypeAndValue({
      input: tuples.at([1, 2, 3], 1),
      expected: 2,
    })
  })

  it('isEmpty', () => {
    checkTypeAndValue({
      input: tuples.isEmpty([]),
      expected: true,
    })

    checkTypeAndValue({
      input: tuples.isEmpty([1, 2, 3]),
      expected: false,
    })
  })

  it('head', () => {
    checkTypeAndValue({
      input: tuples.head([1, 2, 3]),
      expected: 1,
    })
  })

  it('tail', () => {
    checkTypeAndValue({
      input: tuples.tail([1, 2, 3]),
      expected: [2, 3],
    })
  })

  it('last', () => {
    checkTypeAndValue({
      input: tuples.last([1, 2, 3]),
      expected: 3,
    })
  })

  it('length', () => {
    checkTypeAndValue({
      input: tuples.length([1, 2, 3]),
      expected: 3,
    })
  })

  it('reverse', () => {
    checkTypeAndValue({
      input: tuples.reverse([1, 2, 3]),
      expected: [3, 2, 1],
    })
  })

  it('sum', () => {
    checkTypeAndValue({
      input: tuples.sum([1, 2, 3]),
      expected: 6,
    })
  })

  it('sort', () => {
    checkTypeAndValue({
      input: tuples.sort([3, 1, 2]),
      expected: [1, 2, 3],
    })
  })

  it('min', () => {
    checkTypeAndValue({
      input: tuples.min([3, 1, 2]),
      expected: 1,
    })
  })

  it('max', () => {
    checkTypeAndValue({
      input: tuples.max([3, 1, 2]),
      expected: 3,
    })
  })
})
