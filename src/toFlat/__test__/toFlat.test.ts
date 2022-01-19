import { toFlat } from '../toFlat';

describe('toFlat tests', () => {
    it('should return single key for simple object', () => {
        const value = () => null;
        const fieldKey = 'field';
        expect(toFlat({ [fieldKey]: value })).toEqual([[fieldKey], value]);
    });

    it('should save order of keys', () => {
        const value = 'hi there!';
        const obj = { outer: { intermediate: { deep: { deeper: { deepest: value } } } } };
        const pathToValue = ['outer', 'intermediate', 'deep', 'deeper', 'deepest'];
        expect(toFlat(obj)).toEqual([pathToValue, value]);
    });

    it('should empty path for primitives', () => {
        const array = ['hello', 'world'];
        const value = 'hi there!';
        expect(toFlat(value)).toEqual([[], value]);
        expect(toFlat(array)).toEqual([[], array]);
    });

    it ('should save reference for primitives', () => {
        const array = ['hello', 'world'];
        const obj = {};
        expect(toFlat(obj)[1]).toBe(obj);
        expect(toFlat(array)[1]).toBe(array);
    });
});