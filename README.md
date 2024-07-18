# Hash Map

Implementation of hash map by using JavaScript

## Handling Collision

In order to handle the collision, this hash map use Quadratic Probing, one of an open-addressing method where we look for the i^2th slot in the i^th iteration if the given hash code collides in the hash map. All elements are stored in the **hash map** itself.

The hash map also grow the buckets size when it needs to, by calculating if the occupied bucket has reached the load factor.

## Features

1. `hash(key)` takes a key and produces a hash code with it.
2. `set(key, value)` takes two arguments, the first is a key and the second is a value that is assigned to this key. If a key already exists, then the old value is overwritten or we can say that we update the key’s value.
3. `get(key)` takes one argument as a key and returns the value that is assigned to this key. If a key is not found, return `null`.
4. `has(key)` takes a key as an argument and returns `true` or `false` based on whether or not the key is in the hash map.
5. `remove(key)` takes a key as an argument. If the given key is in the hash map, it should remove the entry with that key and return `true`. If the key isn’t in the hash map, it should return `false`.
6. `length()` returns the number of stored keys in the hash map.
7. `clear()` removes all entries in the hash map.
8. `keys()` returns an array containing all the keys inside the hash map.
9. `values()` returns an array containing all the values.
10. `entries()` returns an array that contains each key, value pair. Example: `[[firstKey, firstValue], [secondKey, secondValue]]`.

## Additonal Features

There is `HashSet` class that behaves the same as a HashMap but only contains `keys` with no `values`.
