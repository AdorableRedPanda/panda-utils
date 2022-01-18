import { Path, PathObject } from '../types';

export const getPathTo = <T>(leafValue: T, nested: PathObject<T> | T): Path => {
    if (nested === leafValue) {
        return [];
    }

    const entries = Object.entries(nested);

    if (entries.length !== 1) {
        throw new Error('Argument must be a PathObject');
    }

    const [key, next] = entries[0];
    return [key, ...getPathTo(leafValue, next)];
};
