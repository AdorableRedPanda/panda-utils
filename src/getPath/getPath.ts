import { PathObject } from '../types';

export const getPath = <T>(leafValue: T, nested: PathObject<T> | T): string[] => {
    if (nested === leafValue) {
        return [];
    }

    const entries = Object.entries(nested);

    if (entries.length !== 1) {
        throw new Error('Argument must be a PathObject');
    }

    const [key, next] = entries[0];
    return [key, ...getPath(leafValue, next)];
};