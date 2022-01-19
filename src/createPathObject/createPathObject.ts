import { FlatPresentation, PathObject } from '../types';

export const createPathObject = <T>([path, leafValue]: FlatPresentation<T>): PathObject<T> => {
    if (!path.length) {
        throw new Error('Cannot create object by empty path');
    }

    const [leafKey, ...restPath] = [...path].reverse();
    const leaf = { [leafKey]: leafValue } as PathObject<T>;

    return restPath.reduce((prevPathObj, key) => ({ [key]: prevPathObj }), leaf);
};