import { describe, it } from 'vitest'
import { objects } from '../src/index'
import { strictExpect } from './utils'

describe('objects', () => {
  it('fromEntries', () => {
    strictExpect(objects.fromEntries([['x', 10], ['y', 20]])).toEqual({ x: 10, y: 20 })
  })

  it('entries', () => {
    strictExpect(objects.entries({ a: 1, b: 2, c: 3 })).toEqual([['a', 1], ['b', 2], ['c', 3]])
  })

  it('keys', () => {
    strictExpect(objects.keys({ a: 1, b: 2, c: 3 })).toEqual(['a', 'b', 'c'])
  })

  it('values', () => {
    strictExpect(objects.values({ a: 1, b: 2, c: 3 })).toEqual([1, 2, 3])
    strictExpect(objects.values({})).toEqual([])
  })

  it('assign', () => {
    strictExpect(objects.assign({ a: 1 }, { b: 2 })).toEqual({ a: 1, b: 2 })
  })
})
