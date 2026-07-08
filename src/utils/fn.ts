import type { _, Call, Fn as HotscriptFn, PartialApply } from 'hotscript'
import { dual } from './dual'

export interface AnyFn<F extends HotscriptFn = HotscriptFn> {
  readonly '~fn': F
}

export type Mutable<A> = A extends readonly unknown[] ? { -readonly [K in keyof A]: A[K] } : A

export interface Fn<F extends HotscriptFn = HotscriptFn> extends AnyFn<F> {
  <const A>(a: A): Call<F, Mutable<A>>
}

export type FnOf<T> = T extends AnyFn<infer F> ? F : never

export type NormalizeParam<A> = A extends AnyFn<infer F> ? F : Mutable<A>

export function fn<F extends HotscriptFn>(impl: (...args: any[]) => unknown): Fn<F> {
  return impl as unknown as Fn<F>
}

export type Subject = 'subject-first' | 'subject-last'

interface SubjectLast1<F extends HotscriptFn> extends AnyFn<F> {
  <const A>(a: A): Fn<PartialApply<F, [NormalizeParam<A>]>>
  <const $, const A>($: $, a: A): Call<PartialApply<F, [NormalizeParam<A>]>, Mutable<$>>
}

interface SubjectLast2<F extends HotscriptFn> extends AnyFn<F> {
  <const A, const B>(a: A, b: B): Fn<PartialApply<F, [NormalizeParam<A>, NormalizeParam<B>]>>
  <const $, const A, const B>($: $, a: A, b: B): Call<PartialApply<F, [NormalizeParam<A>, NormalizeParam<B>]>, Mutable<$>>
}

interface SubjectFirst1<F extends HotscriptFn> extends AnyFn<F> {
  <const A>(a: A): Fn<PartialApply<F, [_, NormalizeParam<A>]>>
  <const $, const A>($: $, a: A): Call<F, Mutable<$>, A>
}

export type Curried<
  Arity extends 2 | 3,
  F extends HotscriptFn,
  S extends Subject = 'subject-last',
> = Arity extends 3
  ? SubjectLast2<F>
  : S extends 'subject-first'
    ? SubjectFirst1<F>
    : SubjectLast1<F>

export function curry<F extends HotscriptFn>(arity: 2, body: (self: any, a: any) => unknown): Curried<2, F>
export function curry<F extends HotscriptFn>(arity: 3, body: (self: any, a: any, b: any) => unknown): Curried<3, F>
export function curry<F extends HotscriptFn>(arity: 2, body: (self: any, a: any) => unknown, subject: 'subject-first'): Curried<2, F, 'subject-first'>
export function curry(arity: number, body: (...args: any[]) => unknown): any {
  return dual(arity, body)
}
