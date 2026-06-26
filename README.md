# coldscript

like [hotscript](https://github.com/gvergnaud/HOTScript), but at runtime.

typed utility functions for strings, numbers, tuples, and objects. return types are computed by hotscript under the hood, so you get the same precision you'd expect from type-level transforms, just at runtime.

## install

```bash
npm install coldscript
```

## usage

each module mirrors a hotscript namespace:

```ts
import { strings, numbers, tuples, objects } from "coldscript";
```

### strings

```ts
import { strings } from "coldscript";

const parts = strings.split("hello-world", "-");
//    ^? ['hello', 'world']

const trimmed = strings.trim("  hi  ");
//    ^? 'hi'

const joined = strings.prepend("world", "hello ");
//    ^? 'hello world'
```

### numbers

```ts
import { numbers } from "coldscript";

const sum = numbers.add(1, 2);
//    ^? 3

const diff = numbers.sub(10, 3);
//    ^? 7
```

### tuples

```ts
import { tuples } from "coldscript";

const first = tuples.head(["a", "b", "c"] as const);
//    ^? 'a'

const item = tuples.at(["a", "b", "c"] as const, 1);
//    ^? 'b'
```

### objects

```ts
import { objects } from "coldscript";

const obj = objects.fromEntries([
  ["a", 1],
  ["b", 2],
] as const);
//    ^? { a: 1, b: 2 }

const merged = objects.assign({ a: 1 }, { b: 2 });
//    ^? { a: 1, b: 2 }
```

## how it works

each function is a thin wrapper around the native js equivalent. the magic is in the return type, it's wired up to hotscript's type-level functions via `Call`, so typescript knows exactly what comes back.

```ts
// coldscript
export function split<S extends string, TSep extends string>(s: S, sep: TSep) {
  return s.split(sep) as Call<Strings.Split<TSep>, S>;
}
```

hotscript types are bundled at build time, so you don't need to install hotscript yourself.
