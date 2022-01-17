import { getPath } from '../getPath';

describe('getPath tests', () => {
    it('should return single key for wimple object', () => {
        const value = () => null;
        const fieldKey = 'field';
        expect(getPath(value, { [fieldKey]: value })).toEqual([fieldKey]);
    });

    it('should save order of keys', () => {
        const value = 0;
        const obj = { outer: { intermediate: { deep: { deeper: { deepest: value } } } } };
        const pathToValue = ['outer', 'intermediate', 'deep', 'deeper', 'deepest'];

        expect(getPath(value, obj)).toEqual(pathToValue);
    });
});