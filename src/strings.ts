import type { Call, Fn as HotscriptFn, Strings } from 'hotscript'
import type { Curried, Fn } from './utils/fn'
import { dual } from './utils/dual'
import { curry, fn } from './utils/fn'

/**
 * Subject-last adapters for the trim ops. HotScript's `Trim*` aliases bake the
 * separator's default (`" "`) into the `Sep` slot, so `curry` can't inject a
 * custom separator through them directly — these bridge it: `arg0` is the
 * separator, `arg1` is the string being trimmed.
 */
interface TrimOf extends HotscriptFn { return: Call<Strings.Trim<Extract<this['arg0'], string>>, this['arg1']> }
interface TrimLeftOf extends HotscriptFn { return: Call<Strings.TrimLeft<Extract<this['arg0'], string>>, this['arg1']> }
interface TrimRightOf extends HotscriptFn { return: Call<Strings.TrimRight<Extract<this['arg0'], string>>, this['arg1']> }

function trimStart(str: string, sep: string): string {
  if (sep === '')
    return str
  while (str.startsWith(sep))
    str = str.slice(sep.length)
  return str
}

function trimEnd(str: string, sep: string): string {
  if (sep === '')
    return str
  while (str.endsWith(sep))
    str = str.slice(0, -sep.length)
  return str
}

export const length: Fn<Strings.Length> = fn(($: string) => $.length)

export const trim: Curried<2, TrimOf> = curry<TrimOf>(2, ($, sep) => trimStart(trimEnd($, sep), sep))

export const trimLeft: Curried<2, TrimLeftOf> = curry<TrimLeftOf>(2, ($, sep) => trimStart($, sep))

export const trimRight: Curried<2, TrimRightOf> = curry<TrimRightOf>(2, ($, sep) => trimEnd($, sep))

export const replace: Curried<3, Strings.Replace> = curry<Strings.Replace>(3, ($, from, to) => $.replaceAll(from, to))

// slice's HotScript type is a `ComposeLeft`, which can't be partially applied
// through `curry`, so it keeps the explicit `dual` form.
export const slice = dual<
  <TStart extends number, TEnd extends number>(start: TStart, end: TEnd) => Fn<Strings.Slice<TStart, TEnd>>,
  // @ts-expect-error says the type is 'possibly infinite', but it works fine
  <$ extends string, TStart extends number, TEnd extends number>($: $, start: TStart, end: TEnd) => Call<Strings.Slice<TStart, TEnd>, $>
>(3, ($, start, end): any => {
  return $.slice(start, end)
})

export const split: Curried<2, Strings.Split> = curry<Strings.Split>(2, ($, sep) => $.split(sep))

export const repeat: Curried<2, Strings.Repeat> = curry<Strings.Repeat>(2, ($, times) => $.repeat(times))

export const startsWith: Curried<2, Strings.StartsWith> = curry<Strings.StartsWith>(2, ($, start) => $.startsWith(start))

export const endsWith: Curried<2, Strings.EndsWith> = curry<Strings.EndsWith>(2, ($, end) => $.endsWith(end))

export const toTuple: Fn<Strings.ToTuple> = fn(($: string) => $.split(''))

export const toNumber: Fn<Strings.ToNumber> = fn(($: string) => Number($))

export const toString: Fn<Strings.ToString> = fn(($: Strings.Stringifiable) => String($))

export const prepend: Curried<2, Strings.Prepend> = curry<Strings.Prepend>(2, ($, start) => start + $)

export const append: Curried<2, Strings.Append> = curry<Strings.Append>(2, ($, end) => $ + end)

export const uppercase: Fn<Strings.Uppercase> = fn(($: string) => $.toUpperCase())

export const lowercase: Fn<Strings.Lowercase> = fn(($: string) => $.toLowerCase())

export const capitalize: Fn<Strings.Capitalize> = fn(($: string) => $.charAt(0).toUpperCase() + $.slice(1))

export const uncapitalize: Fn<Strings.Uncapitalize> = fn(($: string) => $.charAt(0).toLowerCase() + $.slice(1))

// snakeCase - won't do

// camelCase - won't do

// kebabCase - won't do

// compare - TODO

// lessThan - TODO

// lessThanOrEqual - TODO

// greaterThan - TODO

// greaterThanOrEqual - TODO
