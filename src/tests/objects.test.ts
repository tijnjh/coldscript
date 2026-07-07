import { describe, it } from 'vitest'
import { objects } from '../index'
import { checkTypeAndValue } from './utils'

describe('objects', () => {
  it('fromEntries', () => {
    checkTypeAndValue({
      input: objects.fromEntries([['a', 1], ['b', 2], ['c', 3]]),
      expected: { a: 1, b: 2, c: 3 },
    })
  })

  it('entries', () => {
    checkTypeAndValue({
      input: objects.entries({ a: 1, b: 2, c: 3 }),
      expected: [['a', 1], ['b', 2], ['c', 3]],
    })
  })

  it('keys', () => {
    checkTypeAndValue({
      input: objects.keys({ a: 1, b: 2, c: 3 }),
      expected: ['a', 'b', 'c'],
    })
  })

  it('values', () => {
    checkTypeAndValue({
      input: objects.values({ a: 1, b: 2, c: 3 }),
      expected: [1, 2, 3],
    })

    checkTypeAndValue({
      input: objects.values({ a: 'a', b: 'b', c: 'c' }),
      expected: ['a', 'b', 'c'],
    })
  })

  it('assign', () => {
    checkTypeAndValue({
      input: objects.assign({ a: 1 }, { b: 2 }),
      expected: { a: 1, b: 2 },
    })
  })
})
