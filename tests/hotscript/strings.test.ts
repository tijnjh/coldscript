import { describe, it } from 'vitest'
import { pipe, strings } from '../../src'
import { expectEqual } from '../utils'

describe('strings', () => {
  it('length', () => {
    const res1 = pipe('', strings.length)
    expectEqual(res1, 0)

    const res2 = pipe('123', strings.length)
    expectEqual(res2, 3)

    const res3 = pipe('a', strings.repeat(1001), strings.length)
    expectEqual(res3, 1001)
  })

  it('trimLeft', () => {
    const res1 = pipe('  abc  ', strings.trimLeft(' '))
    expectEqual(res1, 'abc  ')

    const res2 = pipe('0001000', strings.trimLeft('0'))
    expectEqual(res2, '1000')
  })

  it('trimRight', () => {
    const res1 = pipe('  abc  ', strings.trimRight(' '))
    expectEqual(res1, '  abc')

    const res2 = pipe('0001000', strings.trimRight('0'))
    expectEqual(res2, '0001')
  })

  it('trim', () => {
    const res1 = pipe('  abc  ', strings.trim(' '))
    expectEqual(res1, 'abc')

    const res2 = pipe('0001000', strings.trim('0'))
    expectEqual(res2, '1')
  })

  describe('replace', () => {
    it('replaces single letters', () => {
      const res1 = pipe('abc', strings.replace('a', 'b'))
      expectEqual(res1, 'bbc')
    })

    it('is identity on empty strings', () => {
      const res2 = pipe('', strings.replace('a', 'b'))
      expectEqual(res2, '')
    })

    it('replacing by empty string', () => {
      const res3 = pipe('abc', strings.replace('a', ''))
      expectEqual(res3, 'bc')
    })

    it('supports multi char strings', () => {
      const res4 = pipe('hello world!', strings.replace('hello', 'hi!'))
      expectEqual(res4, 'hi! world!')

      const res5 = pipe('many more than many', strings.replace('many', 'more'))
      expectEqual(res5, 'more more than more')
    })

    // skip 'supports union types', not sure how to test that in runtime
  })

  it('slice', () => {
    const res1 = pipe('123', strings.slice(1, 3))
    expectEqual(res1, '23')

    const res2 = pipe('123', strings.slice(0, 3))
    expectEqual(res2, '123')

    const res3 = pipe('123', strings.slice(1, 4))
    expectEqual(res3, '23')

    const res4 = pipe('123', strings.slice(1, 1))
    expectEqual(res4, '')
  })

  it('split', () => {
    const res1 = pipe('1.2.3', strings.split('.'))
    expectEqual(res1, ['1', '2', '3'])

    const res2 = pipe('123', strings.split(''))
    expectEqual(res2, ['1', '2', '3'])

    const res3 = pipe('', strings.split(''))
    expectEqual(res3, [])

    // skip 4 - unions
  })

  it('repeat', () => {
    const res1 = pipe('a', strings.repeat(3))
    expectEqual(res1, 'aaa')

    const res2 = pipe('a', strings.repeat(0))
    expectEqual(res2, '')

    const res3 = pipe('a', strings.repeat(1))
    expectEqual(res3, 'a')

    const res4 = pipe('hello!', strings.repeat(2))
    expectEqual(res4, 'hello!hello!')
  })

  it('startsWith', () => {
    const res1 = pipe('hello world', strings.startsWith('hello'))
    expectEqual(res1, true)

    const res2 = pipe('world hello', strings.startsWith('hello'))
    expectEqual(res2, false)

    const res3 = pipe('hello world', strings.startsWith(''))
    expectEqual(res3, true)

    const res4 = pipe('', strings.startsWith(''))
    expectEqual(res4, true)
  })

  it('endsWith', () => {
    const res1 = pipe('hello world', strings.endsWith('world'))
    expectEqual(res1, true)

    const res2 = pipe('world hello', strings.endsWith('world'))
    expectEqual(res2, false)

    const res3 = pipe('hello world', strings.endsWith(''))
    expectEqual(res3, true)

    const res4 = pipe('', strings.endsWith(''))
    expectEqual(res4, true)
  })

  it('toTuple', () => {
    const res1 = pipe('abc', strings.toTuple)
    expectEqual(res1, ['a', 'b', 'c'])

    const res2 = pipe('', strings.toTuple)
    expectEqual(res2, [])
  })

  it('toNumber', () => {
    const res1 = pipe('11', strings.toNumber)
    expectEqual(res1, 11)
  })

  it('toString', () => {
    const res1 = pipe(11, strings.toString)
    expectEqual(res1, '11')
  })

  it('prepend', () => {
    const res1 = pipe('abc', strings.prepend('1 '))
    expectEqual(res1, '1 abc')
  })

  it('append', () => {
    const res1 = pipe('abc', strings.append(' 1'))
    expectEqual(res1, 'abc 1')
  })

  it('uppercase', () => {
    const res1 = pipe('abc', strings.uppercase)
    expectEqual(res1, 'ABC')
  })

  it('lowercase', () => {
    const res1 = pipe('ABC', strings.lowercase)
    expectEqual(res1, 'abc')
  })

  it('capitalize', () => {
    const res1 = pipe('abc', strings.capitalize)
    expectEqual(res1, 'Abc')
  })

  it('uncapitalize', () => {
    const res1 = pipe('ABC', strings.uncapitalize)
    expectEqual(res1, 'aBC')
  })
})
