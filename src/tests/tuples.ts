import { tuples } from '..'

tuples.at([1, 2, 3], 1) satisfies 2

tuples.isEmpty([]) satisfies true

tuples.isEmpty([1, 2, 3]) satisfies false

tuples.head([1, 2, 3]) satisfies 1

tuples.tail([1, 2, 3]) satisfies [2, 3]

tuples.last([1, 2, 3]) satisfies 3

tuples.length([1, 2, 3]) satisfies 3

tuples.reverse([1, 2, 3]) satisfies [3, 2, 1]

tuples.join(['a', 'b', 'c'], '-') satisfies 'a-b-c'

tuples.prepend([1, 2, 3], 0) satisfies [0, 1, 2, 3]

tuples.append([1, 2, 3], 4) satisfies [1, 2, 3, 4]

tuples.sum([1, 2, 3]) satisfies 6

tuples.sort([3, 1, 2]) satisfies [1, 2, 3]

tuples.min([3, 1, 2]) satisfies 1

tuples.max([3, 1, 2]) satisfies 3
