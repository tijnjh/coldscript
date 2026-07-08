import { describe, it } from 'vitest'
import { strings } from '../src/index'
import { strictExpect } from './utils'

describe('strings', () => {
  it('length', () => {
    strictExpect(strings.length('hello')).toEqual(5)
    strictExpect(strings.length('')).toEqual(0)
  })

  it('trim', () => {
    strictExpect(strings.trim('  hello  ')).toEqual('hello')
  })

  it('trimLeft', () => {
    strictExpect(strings.trimLeft('  hello  ')).toEqual('hello  ')
  })

  it('trimRight', () => {
    strictExpect(strings.trimRight('  hello  ')).toEqual('  hello')
  })

  it('replace', () => {
    strictExpect(strings.replace('hello world', 'world', 'TypeScript')).toEqual('hello TypeScript')
  })

  it('slice', () => {
    strictExpect(strings.slice('hello world', 0, 5)).toEqual('hello')
  })

  it('split', () => {
    strictExpect(strings.split('a,b,c', ',')).toEqual(['a', 'b', 'c'])
  })

  it('repeat', () => {
    strictExpect(strings.repeat('abc', 3)).toEqual('abcabcabc')
  })

  it('startsWith', () => {
    strictExpect(strings.startsWith('hello world', 'hello')).toEqual(true)
  })

  it('endsWith', () => {
    strictExpect(strings.endsWith('hello world', 'world')).toEqual(true)
  })

  it('toTuple', () => {
    strictExpect(strings.toTuple('abc')).toEqual(['a', 'b', 'c'])
  })

  it('toNumber', () => {
    strictExpect(strings.toNumber('123')).toEqual(123)
  })

  it('toString', () => {
    strictExpect(strings.toString(123)).toEqual('123')
  })

  it('prepend', () => {
    strictExpect(strings.prepend('world', 'hello ')).toEqual('hello world')
  })

  it('append', () => {
    strictExpect(strings.append('hello', ' world')).toEqual('hello world')
  })

  it('uppercase', () => {
    strictExpect(strings.uppercase('hello')).toEqual('HELLO')
  })

  it('lowercase', () => {
    strictExpect(strings.lowercase('HELLO')).toEqual('hello')
  })

  it('capitalize', () => {
    strictExpect(strings.capitalize('hello')).toEqual('Hello')
  })

  it('uncapitalize', () => {
    strictExpect(strings.uncapitalize('Hello')).toEqual('hello')
  })
})
