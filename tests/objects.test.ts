import { describe, it } from 'vitest'
import { objects } from '../src/index'
import { expect } from './utils'

describe('objects', () => {
  it('fromEntries', () => {
    expect(objects.fromEntries([['x', 10], ['y', 20]])).toEqual({ x: 10, y: 20 })
    expect(objects.fromEntries([['x', 10], ['x', 20]])).toEqual({ x: 20 })
    expect(objects.fromEntries([])).toEqual({})
  })

  it('entries', () => {
    expect(objects.entries({ a: 1, b: 2, c: 3 })).toEqual([['a', 1], ['b', 2], ['c', 3]])
    expect(objects.entries({})).toEqual([])
  })

  it('keys', () => {
    expect(objects.keys({ a: 1, b: 2, c: 3 })).toEqual(['a', 'b', 'c'])
    expect(objects.keys({})).toEqual([])
  })

  it('values', () => {
    // @ts-expect-error
    expect(objects.values({ a: 1, b: 2, c: 3 })).toEqual([1, 2, 3])
    expect(objects.values({})).toEqual([])
  })

  it('assign', () => {
    const target = { a: 1 }
    const assigned = objects.assign(target, { a: 2, b: 3 })

    expect(assigned).toEqual({ a: 2, b: 3 })
    expect(Object.is(assigned, target)).toEqual(true)
    expect(objects.assign({ a: 1 })({ b: 2 })).toEqual({ a: 1, b: 2 })
  })
})
