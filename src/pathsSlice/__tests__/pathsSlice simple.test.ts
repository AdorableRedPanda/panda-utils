import { pathsSlice } from '../pathsSlice';


describe('pathsSlice simple tests', () => {
    it('should works for objects with primitive values', () => {
        const func = () => '!';
        const obj = { a: 0, b: '1', c: func, d: [func] };
        const expected = [{ a: 0 }, { b: '1' }, { c: func }, { d: [func] }];
        expect(pathsSlice(obj)).toEqual(expected);
    });

    it('should works for simple object', () => {
        const obj = { a: { b: '1', c: '2' } };
        const expected = [{ a: { b: '1' } }, { a: { c: '2' } }];
        expect(pathsSlice(obj)).toEqual(expected);
    });

    it('should wrap a primitive in array with single element', () => {
        const func = () => null;
        const array = ['a', 'b', 'c'];
        expect(pathsSlice(null)).toEqual([null]);
        expect(pathsSlice(func)).toEqual([func]);
        expect(pathsSlice(array)).toEqual([array]);

    });

    it('should return empty array for empty object', () => {
        expect(pathsSlice({})).toEqual([]);
    });
});