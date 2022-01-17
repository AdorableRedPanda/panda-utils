// function is primitive
export const isPrimitive = (value: unknown): boolean => {
    if (typeof value === 'object') {
        return value === null;
    }

    return true;
};