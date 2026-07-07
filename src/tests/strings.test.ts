import { describe, it } from 'vitest'
import { strings } from '../index'
import { checkTypeAndValue } from './utils'

describe('strings', () => {
  it('length', () => {
    checkTypeAndValue({
      input: strings.length('hello'),
      expected: 5,
    })
  })

  it('trim', () => {
    checkTypeAndValue({
      input: strings.trim('  hello  '),
      expected: 'hello',
    })
  })

  it('trimLeft', () => {
    checkTypeAndValue({
      input: strings.trimLeft('  hello  '),
      expected: 'hello  ',
    })
  })

  it('trimRight', () => {
    checkTypeAndValue({
      input: strings.trimRight('  hello  '),
      expected: '  hello',
    })
  })

  it('replace', () => {
    checkTypeAndValue({
      input: strings.replace('hello world', 'world', 'TypeScript'),
      expected: 'hello TypeScript',
    })
  })

  it('slice', () => {
    checkTypeAndValue({
      input: strings.slice('hello world', 0, 5),
      expected: 'hello',
    })
  })

  it('split', () => {
    checkTypeAndValue({
      input: strings.split('a,b,c', ','),
      expected: ['a', 'b', 'c'],
    })
  })

  it('repeat', () => {
    checkTypeAndValue({
      input: strings.repeat('abc', 3),
      expected: 'abcabcabc',
    })
  })

  it('startsWith', () => {
    checkTypeAndValue({
      input: strings.startsWith('hello world', 'hello'),
      expected: true,
    })
  })

  it('endsWith', () => {
    checkTypeAndValue({
      input: strings.endsWith('hello world', 'world'),
      expected: true,
    })
  })

  it('toTuple', () => {
    checkTypeAndValue({
      input: strings.toTuple('abc'),
      expected: ['a', 'b', 'c'],
    })
  })

  it('toNumber', () => {
    checkTypeAndValue({
      input: strings.toNumber('123'),
      expected: 123,
    })
  })

  it('toString', () => {
    checkTypeAndValue({
      input: strings.toString(123),
      expected: '123',
    })
  })

  it('prepend', () => {
    checkTypeAndValue({
      input: strings.prepend('world', 'hello '),
      expected: 'hello world',
    })
  })

  it('append', () => {
    checkTypeAndValue({
      input: strings.append('hello', ' world'),
      expected: 'hello world',
    })
  })

  it('uppercase', () => {
    checkTypeAndValue({
      input: strings.uppercase('hello'),
      expected: 'HELLO',
    })
  })

  it('lowercase', () => {
    checkTypeAndValue({
      input: strings.lowercase('HELLO'),
      expected: 'hello',
    })
  })

  it('capitalize', () => {
    checkTypeAndValue({
      input: strings.capitalize('hello'),
      expected: 'Hello',
    })
  })

  it('uncapitalize', () => {
    checkTypeAndValue({
      input: strings.uncapitalize('Hello'),
      expected: 'hello',
    })
  })
})
