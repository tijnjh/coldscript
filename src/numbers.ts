import type { Numbers } from 'hotscript'
import type { Curried } from './utils/fn'
import { curry } from './utils/fn'

export const add: Curried<2, Numbers.Add, 'subject-first'> = curry<Numbers.Add>(2, ($, n) => $ + n, 'subject-first')

export const sub: Curried<2, Numbers.Sub, 'subject-first'> = curry<Numbers.Sub>(2, ($, n) => $ - n, 'subject-first')

export const mul: Curried<2, Numbers.Mul, 'subject-first'> = curry<Numbers.Mul>(2, ($, n) => $ * n, 'subject-first')

export const div: Curried<2, Numbers.Div, 'subject-first'> = curry<Numbers.Div>(2, ($, n) => $ / n, 'subject-first')

export const mod: Curried<2, Numbers.Mod, 'subject-first'> = curry<Numbers.Mod>(2, ($, n) => $ % n, 'subject-first')

// negate - TODO

// abs - TODO

export const max: Curried<2, Numbers.Max, 'subject-first'> = curry<Numbers.Max>(2, ($, n) => Math.max($, n), 'subject-first')

export const min: Curried<2, Numbers.Min, 'subject-first'> = curry<Numbers.Min>(2, ($, n) => Math.min($, n), 'subject-first')

export const power: Curried<2, Numbers.Power, 'subject-first'> = curry<Numbers.Power>(2, ($, n) => $ ** n, 'subject-first')

// compare - TODO

export const equal: Curried<2, Numbers.Equal, 'subject-first'> = curry<Numbers.Equal>(2, ($, n) => $ === n, 'subject-first')

export const notEqual: Curried<2, Numbers.NotEqual, 'subject-first'> = curry<Numbers.NotEqual>(2, ($, n) => $ !== n, 'subject-first')

export const lessThan: Curried<2, Numbers.LessThan, 'subject-first'> = curry<Numbers.LessThan>(2, ($, n) => $ < n, 'subject-first')

export const lessThanOrEqual: Curried<2, Numbers.LessThanOrEqual, 'subject-first'> = curry<Numbers.LessThanOrEqual>(2, ($, n) => $ <= n, 'subject-first')

export const greaterThan: Curried<2, Numbers.GreaterThan, 'subject-first'> = curry<Numbers.GreaterThan>(2, ($, n) => $ > n, 'subject-first')

export const greaterThanOrEqual: Curried<2, Numbers.GreaterThanOrEqual, 'subject-first'> = curry<Numbers.GreaterThanOrEqual>(2, ($, n) => $ >= n, 'subject-first')
