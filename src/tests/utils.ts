import { expect, expectTypeOf } from 'vitest'

export function checkTypeAndValue<const T>({
  input,
  expected,
}: {
  input: T
  expected: NoInfer<T>
}) {
  // @ts-expect-error
  expectTypeOf(input).toEqualTypeOf(expected)
  expect(input).toEqual(expected)
}
