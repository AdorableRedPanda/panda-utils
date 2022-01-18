import { getPathTo } from '../getPathTo';

describe('getPathTo tests', () => {
    it('should return single key for wimple object', () => {
        const value = () => null;
        const fieldKey = 'field';
        expect(getPathTo(value, { [fieldKey]: value })).toEqual([fieldKey]);
    });

    it('should save order of keys', () => {
        const value = 0;
        const obj = { outer: { intermediate: { deep: { deeper: { deepest: value } } } } };
        const pathToValue = ['outer', 'intermediate', 'deep', 'deeper', 'deepest'];

        expect(getPathTo(value, obj)).toEqual(pathToValue);
    });

    it('should throws error if argument is not path object', () => {
        const value = 0;
        const obj = { a: { b: { c: 0 }, d: 0 } };
        expect(() => getPathTo(value, obj)).toThrow(Error);
    });
});