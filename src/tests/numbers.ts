import { numbers } from '../index'

numbers.add(1, 2) satisfies 3

numbers.sub(5, 3) satisfies 2

numbers.mul(2, 3) satisfies 6

numbers.div(10, 2) satisfies 5

numbers.mod(10, 3) satisfies 1

numbers.max(5, 10) satisfies 10

numbers.min(5, 10) satisfies 5

numbers.power(2, 3) satisfies 8

numbers.equal(5, 5) satisfies true

numbers.notEqual(5, 10) satisfies true

numbers.lessThan(5, 10) satisfies true

numbers.lessThanOrEqual(5, 10) satisfies true

numbers.greaterThan(10, 5) satisfies true

numbers.greaterThanOrEqual(10, 5) satisfies true
