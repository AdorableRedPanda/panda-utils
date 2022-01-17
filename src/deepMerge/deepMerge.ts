import { isPrimitive } from '../isPrimitive';
import { naiveClone } from '../naiveClone';

type MergeTarget<T> = Record<string, T>;

type MergeResult<F, S> = S | S & F;

const canBeMerge = <T>(value: unknown): value is MergeTarget<T> => !(isPrimitive(value) || Array.isArray(value));

const mergeObjects = <F extends {}, S extends {}>(first:F, second: S): F & S => {
    const keysForMerge = Object.keys(first).filter(key => second.hasOwnProperty(key));

    const mergedIntersection = keysForMerge.reduce((prevParts, key) => ({
        ...prevParts,
        // todo: try to avoid casts
        [key]: deepMerge(first[key as keyof F & S], second[key as keyof S])
    }), {});

    return { ...naiveClone(first), ...naiveClone(second), ...mergedIntersection };
};

export const deepMerge = <T, Q>(first: T, second: Q): MergeResult<T, Q> => {
    if (canBeMerge(first) && canBeMerge(second)) {
        return mergeObjects(first, second);
    }

    return naiveClone(second);
};