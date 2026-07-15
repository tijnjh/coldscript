import { describe, it } from 'vitest'
import { objects, pipe } from '../../src'
import { expectEqual } from '../utils'

const string = 'string'
const number = 123

describe('objects', () => {
  it('fromEntries', () => {
    const res1 = pipe([['a', string], ['b', number]], objects.fromEntries)
    expectEqual(res1, { a: string, b: number })
  })

  it('entries', () => {
    const res1 = pipe({ a: string, b: number }, objects.entries)
    expectEqual(res1, [['a', string], ['b', number]])

    const res2 = pipe(['a', 'b'], objects.entries)
    // @ts-expect-error JavaScript exposes array keys as strings, unlike HotScript
    expectEqual(res2, [['0', 'a'], ['1', 'b']])
  })

  it('entries >> fromEntries identity', () => {
    const res1 = pipe({ a: string, b: number }, objects.entries, objects.fromEntries)
    expectEqual(res1, { a: string, b: number })
  })

  // mapValues

  it('keys', () => {
    const res0 = pipe([3, 4, 5], objects.keys)
    // @ts-expect-error JavaScript exposes array keys as strings, unlike HotScript
    expectEqual(res0, ['0', '1', '2'])

    // const res1 = pipe([true, false] as boolean[], objects.keys)
    // expectEqual(res1, )
  })
})
