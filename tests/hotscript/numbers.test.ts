import { describe, it } from 'vitest'
import { numbers, pipe, tuples } from '../../src'
import { expectEqual } from '../utils'

describe('numbers', () => {
  describe('add', () => {
    it('can be called without any pre-filled arguments', () => {
      const res1 = pipe([1, 2, 3], tuples.reduce(numbers.add, 0))
      expectEqual(res1, 6)
    })

    it('can be called with one pre-filled argument', () => {
      const res1 = pipe([1, 2, 3], tuples.map(numbers.add(1)))
      expectEqual(res1, [2, 3, 4])
    })

    it('can be called with 2 pre-filled arguments', () => {
      const res1 = numbers.add(1, 2)

      expectEqual(res1, 3)
    })
  })

  describe('sub', () => {
    it('can be called without any pre-filled arguments', () => {
      const res1 = pipe([1, 2, 3], tuples.reduce(numbers.sub, 0))
      expectEqual(res1, -6)

      const res2 = numbers.sub(0, 1)
      expectEqual(res2, -1)
    })

    it('can be called with one pre-filled argument', () => {
      const res1 = pipe([1, 2, 3], tuples.map(numbers.sub(1)))
      expectEqual(res1, [0, 1, 2])
    })

    it('can be called with 2 pre-filled arguments', () => {
      // type res1 = Call<Numbers.Sub<1, 2>>
      // //    ^?
      // type test1 = Expect<Equal<res1, -1>>

      const res1 = numbers.sub(1, 2)
      expectEqual(res1, -1)
    })

    it('should reverse it\'s function arguments when partial applied', () => {
      // type res1 = Call<Numbers.Sub<1>, 2>
      //    ^?
      // type test1 = Expect<Equal<res1, 1>>

      const res1 = pipe(2, numbers.sub(1))
      expectEqual(res1, 1)
    })
  })
})
