import { describe, it } from 'vitest'
import { strings } from '../src/index'
import { expect } from './utils'

describe('strings', () => {
  it('length', () => {
    expect(strings.length('hello')).toEqual(5)
    expect(strings.length('')).toEqual(0)
  })

  it('trim', () => {
    expect(strings.trim('  hello  ')).toEqual('hello')
    // @ts-expect-error hotscript trim does not model all JS whitespace
    expect(strings.trim('\n\t hello \r\n')).toEqual('hello')
  })

  it('trimLeft', () => {
    expect(strings.trimLeft('  hello  ')).toEqual('hello  ')
    // @ts-expect-error hotscript trim does not model all JS whitespace
    expect(strings.trimLeft('\n hello')).toEqual('hello')
  })

  it('trimRight', () => {
    expect(strings.trimRight('  hello  ')).toEqual('  hello')
    // @ts-expect-error hotscript trim does not model all JS whitespace
    expect(strings.trimRight('hello\t\n')).toEqual('hello')
  })

  it('replace', () => {
    expect(strings.replace('hello world', 'world', 'TypeScript')).toEqual('hello TypeScript')
    expect(strings.replace('hello world', 'o', 'O')).toEqual('hellO wOrld')
    // @ts-expect-error empty search string is a type-level recursion trap
    expect(strings.replace('abc', '', '-')).toEqual('-a-b-c-')
    expect(strings.replace('abc', 'x', 'y')).toEqual('abc')
    expect(strings.replace('o', 'O')('hello world')).toEqual('hellO wOrld')
  })

  it('slice', () => {
    expect(strings.slice('hello world', 0, 5)).toEqual('hello')
    // @ts-expect-error hotscript slice does not model negative start here
    expect(strings.slice('hello world', -5, 99)).toEqual('world')
    expect(strings.slice('hello', 4, 1)).toEqual('')
  })

  it('split', () => {
    expect(strings.split('a,b,c', ',')).toEqual(['a', 'b', 'c'])
    // @ts-expect-error hotscript split gives [] for empty input
    expect(strings.split('', ',')).toEqual([''])
    expect(strings.split('abc', '')).toEqual(['a', 'b', 'c'])
  })

  it('repeat', () => {
    expect(strings.repeat('abc', 3)).toEqual('abcabcabc')
    expect(strings.repeat('abc', 0)).toEqual('')
  })

  it('startsWith', () => {
    expect(strings.startsWith('hello world', 'hello')).toEqual(true)
    expect(strings.startsWith('hello world', '')).toEqual(true)
    expect(strings.startsWith('hello world', 'world')).toEqual(false)
  })

  it('endsWith', () => {
    expect(strings.endsWith('hello world', 'world')).toEqual(true)
    expect(strings.endsWith('hello world', '')).toEqual(true)
    expect(strings.endsWith('hello world', 'hello')).toEqual(false)
  })

  it('toTuple', () => {
    expect(strings.toTuple('abc')).toEqual(['a', 'b', 'c'])
    expect(strings.toTuple('')).toEqual([])
  })

  it('toNumber', () => {
    expect(strings.toNumber('123')).toEqual(123)
    // @ts-expect-error hotscript toNumber gives never for empty input
    expect(strings.toNumber('')).toEqual(0)
    // @ts-expect-error hotscript toNumber gives never for invalid numbers
    expect(strings.toNumber('nope')).toEqual(Number.NaN)
  })

  it('toString', () => {
    expect(strings.toString(123)).toEqual('123')
  })

  it('prepend', () => {
    expect(strings.prepend('world', 'hello ')).toEqual('hello world')
    expect(strings.prepend('', 'hello')).toEqual('hello')
  })

  it('append', () => {
    expect(strings.append('hello', ' world')).toEqual('hello world')
    expect(strings.append('hello', '')).toEqual('hello')
  })

  it('uppercase', () => {
    expect(strings.uppercase('hello')).toEqual('HELLO')
  })

  it('lowercase', () => {
    expect(strings.lowercase('HELLO')).toEqual('hello')
  })

  it('capitalize', () => {
    expect(strings.capitalize('hello')).toEqual('Hello')
    expect(strings.capitalize('')).toEqual('')
  })

  it('uncapitalize', () => {
    expect(strings.uncapitalize('Hello')).toEqual('hello')
    expect(strings.uncapitalize('')).toEqual('')
  })
})
