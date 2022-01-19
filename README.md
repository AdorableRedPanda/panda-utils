# red-panda-utils

Simple utilities for work with objects like trees.

    Leaf - a primitive value or object with keys count not equal to 1.

    Path object - object with a single key, value can be path object or leaf.

    Flat presentation of path object - [string[], Leaf].

## Exported functions

### createPathObject
creates path objects from leaf and path

### naiveClone
clones primitives by value - functions by reference, creates new array with clones of items,
creates new object with clones of values

### deepMerge
takes two arguments for merge, returns clone of second if arguments cannot be merged.
Primitives, functions and arrays cannot be merged.

### toFlat
gets path object and returns flat presentation.

### pathsSlice
slice object into array of path objects.
