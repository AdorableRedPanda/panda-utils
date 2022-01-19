import { isPrimitive } from '../isPrimitive';
import { Leaf, PathObject } from '../types';

export const isLeaf = <T>(value: PathObject<T> | Leaf<T> | object): value is Leaf<T> =>
    isPrimitive(value) || Array.isArray(value) || Object.keys(value as object).length !== 1;