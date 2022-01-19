import { Leaf, PathObject } from '../types';
import { isPrimitive } from '../isPrimitive';

export const pathsSlice = <T>(value: T): (PathObject<T> | Leaf<T>)[] => {
    if (isPrimitive(value) || Array.isArray(value)) {
        return [value];
    }

    return Object
        .entries(value)
        .map(([key, value]) => pathsSlice(value).map(path => ({ [key]: path })))
        .flat();
};
