import { describe, it } from 'vitest'
import { objects, pipe, tuples } from '../src'

describe('other tests', () => {
  it('can map an object using entries -> map -> fromEntries', () => {
    const obj = { a: 1, b: 2, c: 3 }

    pipe(obj, objects.entries, tuples.map(([k, v]) => [k, v * 2] as const), objects.fromEntries) satisfies { a: 2, b: 4, c: 6 }
  })
})
