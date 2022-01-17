import { PathObject } from '../../types';

export const createPathObject = <T>(leafValue: T, path: string[]): PathObject<T> => {
    if (!path.length) {
        throw new Error('Cannot create object by empty path');
    }

    const [leafKey, ...restPath] = [...path].reverse();
    const leaf = { [leafKey]: leafValue } as PathObject<T>;

    return restPath.reduce((prevPathObj, key) => ({ [key]: prevPathObj }), leaf);
};