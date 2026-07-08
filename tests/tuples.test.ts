import { describe, it } from 'vitest'
import { tuples } from '../src'
import { expect } from './utils'

describe('tuples', () => {
  it('at', () => {
    expect(tuples.at([1, 2, 3], 1)).toEqual(2)
    expect(tuples.at([1, 2, 3], -1)).toEqual(3)
    expect(tuples.at([1, 2, 3], 99)).toEqual(undefined)
    expect(tuples.at(-1)([1, 2, 3])).toEqual(3)
  })

  it('isEmpty', () => {
    expect(tuples.isEmpty([])).toEqual(true)
    expect(tuples.isEmpty([1, 2, 3])).toEqual(false)
  })

  it('head', () => {
    expect(tuples.head([1, 2, 3])).toEqual(1)
    expect(tuples.head([])).toEqual(undefined as never)
  })

  it('tail', () => {
    expect(tuples.tail([1, 2, 3])).toEqual([2, 3])
    expect(tuples.tail([])).toEqual([])
  })

  it('last', () => {
    expect(tuples.last([1, 2, 3])).toEqual(3)
    expect(tuples.last([])).toEqual(undefined as never)
  })

  it('length', () => {
    expect(tuples.length([1, 2, 3])).toEqual(3)
    expect(tuples.length([])).toEqual(0)
  })

  it('reverse', () => {
    const input = [1, 2, 3]

    expect(tuples.reverse(input)).toEqual([3, 2, 1])
    expect(input).toEqual([1, 2, 3])
    expect(tuples.reverse([])).toEqual([])
  })

  it('sum', () => {
    expect(tuples.sum([1, 2, 3])).toEqual(6)
    expect(tuples.sum([])).toEqual(0)
    expect(tuples.sum([-1, 1])).toEqual(0)
  })

  it('sort', () => {
    expect(tuples.sort([3, 1, 2])).toEqual([1, 2, 3])
    // @ts-expect-error hotscript sort differs from JS lexicographic sort
    expect(tuples.sort([10, 2, 1])).toEqual([1, 10, 2])
    expect(tuples.sort([])).toEqual([])
  })

  it('join', () => {
    expect(tuples.join(['a', 'b', 'c'], '-')).toEqual('a-b-c')
    expect(tuples.join([], ',')).toEqual('')
  })

  it('prepend', () => {
    expect(tuples.prepend([2, 3], 1)).toEqual([1, 2, 3])
    expect(tuples.prepend(1)([2, 3])).toEqual([1, 2, 3])
  })

  it('append', () => {
    expect(tuples.append([1, 2], 3)).toEqual([1, 2, 3])
  })

  it('concat', () => {
    // @ts-expect-error current tuple concat type differs from runtime order
    expect(tuples.concat([1, 2], [3, 4])).toEqual([1, 2, 3, 4])
    expect(tuples.concat([], [])).toEqual([])
  })

  it('min', () => {
    expect(tuples.min([3, 1, 2])).toEqual(1)
    // @ts-expect-error hotscript min gives never for empty tuple
    expect(tuples.min([])).toEqual(Infinity)
  })

  it('max', () => {
    expect(tuples.max([3, 1, 2])).toEqual(3)
    // @ts-expect-error hotscript max gives never for empty tuple
    expect(tuples.max([])).toEqual(-Infinity)
  })
})
