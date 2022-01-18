import { createPathObject } from '../createPathObject';

describe('createPathObject tests', () => {
    it('should not change value', () => {
        const func = () => '!';
        expect(createPathObject(func, ['field']).field).toBe(func);
        const item = 'hi';
        expect(createPathObject(item, ['field']).field).toBe(item);
    });

    it('should not change ref value', () => {
        const value = { property: 'hello' };
        const nested = createPathObject(value, ['field']);
        expect(value).toBe(nested.field);
    });

    it('should save keys order while nesting', () => {
        const value = 0;
        const obj = { outer: { intermediate: { deep: { deeper: { deepest: value } } } } };
        const pathToValue = ['outer', 'intermediate', 'deep', 'deeper', 'deepest'];

        expect(createPathObject(value, pathToValue)).toEqual(obj);
    });
});