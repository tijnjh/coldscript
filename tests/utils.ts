import type { Fn as HotscriptFn } from 'hotscript'
import type { Fn } from '../src'
import * as vitest from 'vitest'

export function expect<const T>(value: T) {
  return {
    toEqual: (arg: T) => {
      vitest.expect(value).toEqual(arg)
    },
  }
}

export function expectEqual<const T>(value: T, arg: NoInfer<T>) {
  vitest.expect(value).toEqual(arg)
}

export function $<F extends HotscriptFn, const A>(func: Fn<F>, input: A) {
  return func(input)
}
