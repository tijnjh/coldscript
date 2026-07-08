import * as vitest from 'vitest'

export function expect<const T>(value: T) {
  return {
    toEqual: (arg: T) => {
      vitest.expect(value).toEqual(arg)
    },
  }
}
