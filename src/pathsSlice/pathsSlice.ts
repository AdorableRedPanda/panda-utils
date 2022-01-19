import { PathObject } from '../types';
import { isPrimitive } from '../isPrimitive';

const isLeaf = (value: unknown) => isPrimitive(value) || Array.isArray(value);

export const pathsSlice = <T>(value: T): (PathObject<T> | T)[] => {
    if (isLeaf(value)) {
        return [value];
    }

    return Object
        .entries(value)
        .map(([key, value]) => pathsSlice(value).map(path => ({ [key]: path })))
        .flat();
};
