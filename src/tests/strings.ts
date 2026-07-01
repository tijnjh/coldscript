import { strings } from '../index'

strings.length('hello') satisfies 5

strings.trim('  hello  ') satisfies 'hello'

strings.trimLeft('  hello  ') satisfies 'hello  '

strings.trimRight('  hello  ') satisfies '  hello'

strings.replace('hello world', 'world', 'TypeScript') satisfies 'hello TypeScript'

strings.slice('hello world', 0, 5) satisfies 'hello'

strings.split('a,b,c', ',') satisfies ['a', 'b', 'c']

strings.repeat('abc', 3) satisfies 'abcabcabc'

strings.startsWith('hello world', 'hello') satisfies true

strings.endsWith('hello world', 'world') satisfies true

strings.toTuple('abc') satisfies ['a', 'b', 'c']

strings.toNumber('123') satisfies 123

strings.toString(123) satisfies '123'

strings.prepend('world', 'hello ') satisfies 'hello world'

strings.append('hello', ' world') satisfies 'hello world'

strings.uppercase('hello') satisfies 'HELLO'

strings.lowercase('HELLO') satisfies 'hello'

strings.capitalize('hello') satisfies 'Hello'

strings.uncapitalize('Hello') satisfies 'hello'
