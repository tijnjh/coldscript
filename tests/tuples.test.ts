import type { Call, Fn, Numbers, Strings } from 'hotscript'
import { describe, it } from 'vitest'
import { fn, tuples } from '../src'
import { expect } from './utils'

interface Double extends Fn {
  return: Call<Numbers.Mul<2>, this['arg0']>
}
const double = fn<Double>((n: number) => n * 2)

interface Add extends Fn {
  return: Call<Numbers.Add, this['arg0'], this['arg1']>
}
const add = fn<Add>((a: number, b: number) => a + b)

interface IsEven extends Fn {
  return: Call<Numbers.Mod<this['arg0'], 2>> extends 0 ? true : false
}
const isEven = fn<IsEven>((n: number) => n % 2 === 0)

interface IsNumber extends Fn {
  return: this['arg0'] extends number ? true : false
}
const isNumber = fn<IsNumber>((x: unknown) => typeof x === 'number')

interface ToChars extends Fn {
  return: Call<Strings.ToTuple, this['arg0']>
}
const toChars = fn<ToChars>((s: string) => s.split(''))

interface Parity extends Fn {
  return: Call<Numbers.Mod<this['arg0'], 2>> extends 0 ? 'even' : 'odd'
}
const parity = fn<Parity>((n: number) => (n % 2 === 0 ? 'even' : 'odd'))

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

  it('map', () => {
    expect(tuples.map([1, 2, 3], double)).toEqual([2, 4, 6])
    expect(tuples.map(double)([1, 2, 3])).toEqual([2, 4, 6])
    expect(tuples.map([], double)).toEqual([])
  })

  it('flatMap', () => {
    expect(tuples.flatMap(['ab', 'cd'], toChars)).toEqual(['a', 'b', 'c', 'd'])
    expect(tuples.flatMap(toChars)(['ab', 'cd'])).toEqual(['a', 'b', 'c', 'd'])
  })

  it('reduce', () => {
    expect(tuples.reduce([1, 2, 3], add, 0)).toEqual(6)
    expect(tuples.reduce(add, 0)([1, 2, 3])).toEqual(6)
    expect(tuples.reduce([], add, 0)).toEqual(0)
  })

  it('reduceRight', () => {
    expect(tuples.reduceRight([1, 2, 3], add, 0)).toEqual(6)
    expect(tuples.reduceRight(add, 0)([1, 2, 3])).toEqual(6)
  })

  it('filter', () => {
    expect(tuples.filter([1, 2, 3, 4], isEven)).toEqual([2, 4])
    expect(tuples.filter(isEven)([1, 2, 3, 4])).toEqual([2, 4])
  })

  it('find', () => {
    expect(tuples.find([1, 2, 3, 4], isEven)).toEqual(2)
    expect(tuples.find(isEven)([1, 2, 3, 4])).toEqual(2)
  })

  it('takeWhile', () => {
    expect(tuples.takeWhile([2, 4, 5, 6], isEven)).toEqual([2, 4])
    expect(tuples.takeWhile(isEven)([2, 4, 5, 6])).toEqual([2, 4])
  })

  it('some', () => {
    expect(tuples.some([1, 2, 3], isEven)).toEqual(true)
    expect(tuples.some([1, 3, 5], isEven)).toEqual(false)
  })

  it('every', () => {
    expect(tuples.every([2, 4, 6], isEven)).toEqual(true)
    expect(tuples.every([2, 4, 5], isEven)).toEqual(false)
  })

  it('partition', () => {
    expect(tuples.partition([1, 'a', 2, 'b'], isNumber)).toEqual([[1, 2], ['a', 'b']])
    expect(tuples.partition(isNumber)([1, 'a', 2, 'b'])).toEqual([[1, 2], ['a', 'b']])
  })

  it('groupBy', () => {
    expect(tuples.groupBy([1, 2, 3, 4], parity)).toEqual({ odd: [1, 3], even: [2, 4] })
    expect(tuples.groupBy(parity)([1, 2, 3, 4])).toEqual({ odd: [1, 3], even: [2, 4] })
  })
})
