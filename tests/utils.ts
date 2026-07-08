import { expect } from 'vitest'

export function strictExpect<const T>(value: T) {
  return {
    toEqual: (arg: T) => {
      expect(value).toEqual(arg)
    },
  }
}
