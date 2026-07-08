import type { Call, Fn as HotscriptFn, Tuples } from 'hotscript'
import type { Curried, Fn } from './utils/fn'
import { curry, fn } from './utils/fn'

/**
 * HotScript's higher-order tuple ops (`Filter`, `Reduce`, ...) require a
 * non-defaulted `fn` type parameter and don't export their underlying base
 * `Fn`, so they can't be partially applied by {@link curry} directly. These
 * thin subject-last adapters bridge that gap: `arg0` is the callback (a
 * coldscript `Fn`, normalized to its HotScript `Fn` by `curry`) and the
 * trailing argument is the tuple the operation is applied to.
 */
type AsFn<T> = Extract<T, HotscriptFn>
interface MapOf extends HotscriptFn { return: Call<Tuples.Map<AsFn<this['arg0']>>, this['arg1']> }
interface FlatMapOf extends HotscriptFn { return: Call<Tuples.FlatMap<AsFn<this['arg0']>>, this['arg1']> }
interface FilterOf extends HotscriptFn { return: Call<Tuples.Filter<AsFn<this['arg0']>>, this['arg1']> }
interface FindOf extends HotscriptFn { return: Call<Tuples.Find<AsFn<this['arg0']>>, this['arg1']> }
interface TakeWhileOf extends HotscriptFn { return: Call<Tuples.TakeWhile<AsFn<this['arg0']>>, this['arg1']> }
interface SomeOf extends HotscriptFn { return: Call<Tuples.Some<AsFn<this['arg0']>>, this['arg1']> }
interface EveryOf extends HotscriptFn { return: Call<Tuples.Every<AsFn<this['arg0']>>, this['arg1']> }
interface PartitionOf extends HotscriptFn { return: Call<Tuples.Partition<AsFn<this['arg0']>>, this['arg1']> }
interface GroupByOf extends HotscriptFn { return: Call<Tuples.GroupBy<AsFn<this['arg0']>>, this['arg1']> }
interface ReduceOf extends HotscriptFn { return: Call<Tuples.Reduce<AsFn<this['arg0']>, this['arg1']>, this['arg2']> }
interface ReduceRightOf extends HotscriptFn { return: Call<Tuples.ReduceRight<AsFn<this['arg0']>, this['arg1']>, this['arg2']> }

export const at: Curried<2, Tuples.At> = curry<Tuples.At>(2, ($, index) => $.at(index))

export const isEmpty: Fn<Tuples.IsEmpty> = fn(($: unknown[]) => $.length === 0)

// toUnion - no runtime equivalent

// toIntersection - no runtime equivalent

export const head: Fn<Tuples.Head> = fn(($: unknown[]) => $[0])

export const tail: Fn<Tuples.Tail> = fn(($: unknown[]) => $.slice(1))

export const last: Fn<Tuples.Last> = fn(($: unknown[]) => $[$.length - 1])

export const map: Curried<2, MapOf> = curry<MapOf>(2, ($: any[], f) => $.map(item => f(item)))

export const flatMap: Curried<2, FlatMapOf> = curry<FlatMapOf>(2, ($: any[], f) => $.flatMap(item => f(item) as unknown[]))

export const reduce: Curried<3, ReduceOf> = curry<ReduceOf>(3, ($: any[], f, init) => $.reduce((acc, item) => f(acc, item), init))

export const reverse: Fn<Tuples.Reverse> = fn(($: unknown[]) => $.slice().reverse())

export const reduceRight: Curried<3, ReduceRightOf> = curry<ReduceRightOf>(3, ($: any[], f, init) => $.reduceRight((acc, item) => f(acc, item), init))

export const filter: Curried<2, FilterOf> = curry<FilterOf>(2, ($: any[], f) => $.filter(item => f(item) === true))

export const find: Curried<2, FindOf> = curry<FindOf>(2, ($: any[], f) => $.find((item, index) => f(item, index) === true))

export const sum: Fn<Tuples.Sum> = fn(($: number[]) => $.reduce((a, b) => a + b, 0))

// drop - TODO

// take - TODO

export const takeWhile: Curried<2, TakeWhileOf> = curry<TakeWhileOf>(2, ($: any[], f) => {
  const result = []
  for (let index = 0; index < $.length; index++) {
    if (f($[index], index) !== true)
      break
    result.push($[index])
  }
  return result
})

export const some: Curried<2, SomeOf> = curry<SomeOf>(2, ($: any[], f) => $.some(item => f(item) === true))

export const every: Curried<2, EveryOf> = curry<EveryOf>(2, ($: any[], f) => $.every(item => f(item) === true))

// need to fix, runtime differs from hotscript impl
export const sort: Fn<Tuples.Sort> = fn(($: unknown[]) => $.slice().sort())

export const join: Curried<2, Tuples.Join> = curry<Tuples.Join>(2, ($, sep) => $.join(sep))

export const prepend: Curried<2, Tuples.Prepend> = curry<Tuples.Prepend>(2, ($, element) => [element, ...$])

export const append: Curried<2, Tuples.Append> = curry<Tuples.Append>(2, ($, element) => [...$, element])

export const concat: Curried<2, Tuples.Concat> = curry<Tuples.Concat>(2, ($, tuple) => [...$, ...tuple])

export const partition: Curried<2, PartitionOf> = curry<PartitionOf>(2, ($: any[], f) => {
  const left: unknown[] = []
  const right: unknown[] = []
  for (const item of $)
    (f(item) === true ? left : right).push(item)
  return [left, right]
})

// splitAt - TODO

// zip - TODO

// zipWith - TODO

export const groupBy: Curried<2, GroupByOf> = curry<GroupByOf>(2, ($: any[], f) => {
  const result: Record<PropertyKey, unknown[]> = {}
  for (const item of $) {
    const key = f(item) as PropertyKey
    ;(result[key] ??= []).push(item)
  }
  return result
})

// range - TODO

export const length: Fn<Tuples.Length> = fn(($: unknown[]) => $.length)

export const min: Fn<Tuples.Min> = fn(($: number[]) => Math.min(...$))

export const max: Fn<Tuples.Max> = fn(($: number[]) => Math.max(...$))
