import { isPrimitive } from '../isPrimitive';

export const naiveClone = <T>(value: T): T => {
    if (isPrimitive(value)) {
        return value;
    }

    if (Array.isArray(value)) {
        // todo: cannot specify Array as T here, remove casts
        return value.map(naiveClone) as never as T;
    }

    // todo: TS cannot specify as Array as T here, remove redundant cast
    return Object.fromEntries([...naiveClone(Object.entries(value))]) as T;
};

