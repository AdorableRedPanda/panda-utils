# red-panda-utils

Simple utilities for work with objects like trees.

    Path object - object with a single key, value can be path object or leaf. 

## Exported functions

### createPathObject
creates path objects from leaf and path

### naiveClone
clones primitives by value - functions by reference, creates new array with clones of items,
creates new object with clones of values

### deepMerge
takes two arguments for merge, returns second clone of second if arguments cannot be merged.
Primitives, functions and arrays cannot be merged.

### getPathTo
returns path to value (reference equality), throws Error if argument is not path object.