import { describe, it } from 'vitest'
import { tuples } from '../src'
import { strictExpect } from './utils'

describe('tuples', () => {
  it('at', () => {
    strictExpect(tuples.at([1, 2, 3], 1)).toEqual(2)
  })

  it('isEmpty', () => {
    strictExpect(tuples.isEmpty([])).toEqual(true)
    strictExpect(tuples.isEmpty([1, 2, 3])).toEqual(false)
  })

  it('head', () => {
    strictExpect(tuples.head([1, 2, 3])).toEqual(1)
  })

  it('tail', () => {
    strictExpect(tuples.tail([1, 2, 3])).toEqual([2, 3])
  })

  it('last', () => {
    strictExpect(tuples.last([1, 2, 3])).toEqual(3)
  })

  it('length', () => {
    strictExpect(tuples.length([1, 2, 3])).toEqual(3)
  })

  it('reverse', () => {
    strictExpect(tuples.reverse([1, 2, 3])).toEqual([3, 2, 1])
  })

  it('sum', () => {
    strictExpect(tuples.sum([1, 2, 3])).toEqual(6)
  })

  it('sort', () => {
    strictExpect(tuples.sort([3, 1, 2])).toEqual([1, 2, 3])
  })

  it('min', () => {
    strictExpect(tuples.min([3, 1, 2])).toEqual(1)
  })

  it('max', () => {
    strictExpect(tuples.max([3, 1, 2])).toEqual(3)
  })
})
