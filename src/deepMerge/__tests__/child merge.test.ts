import { deepMerge } from '../deepMerge';

describe('child merging cases', () => {

    it('should merge disjoint child objects like classical merge', () => {
        const outerKey = 'key';
        const first = { a: 1 };
        const second = { b: 2 };
        const merged = deepMerge({ [outerKey]: first }, { [outerKey]: second });
        const handleMerged = { [outerKey]: { ...first, ...second } };
        expect(merged).toEqual(handleMerged);
    });

    it('should override children objects property if it cannot be merged ', () => {
        const obj1 = { a: { b: { c: 1 } } };
        const obj2 = { a: { b: () => 'hi there!' } };
        const merge = deepMerge(obj1, obj2);
        expect(merge).toEqual(obj2);
    });

    it('should save func reference while overriding', () => {
        const obj1 = { a: { b: { c: 1 } } };
        const obj2 = { a: { b: () => 'hi there!' } };
        const merge = deepMerge(obj1, obj2);
        expect(merge.a.b).toBe(obj2.a.b);
    });

    it('should compose overriding and merging', () => {
        const func = () => null;
        const obj1 = { a: { c: 1 }, b: { e: 'will be override', d: 'will be in result' }, c: func };
        const obj2 = { a: func, b: { e: 'override', f: 'world' }, c: { will: 'override func' } };
        const expected = { a: func, c: { will: 'override func' }, b: { e: 'override', f: 'world', d: 'will be in result' } };
        expect(deepMerge(obj1, obj2)).toEqual(expected);
    });

    it('should override array property', () => {
        const arr = [0, 1, 2, 3];
        const obj1 = { a: { will: ' by override' } };
        const obj2 = { a: arr };
        expect(deepMerge(obj1, obj2)).toEqual(obj2);
    });

    it('should create new array while overriding', () => {
        const arr = [0, 1, 2, 3];
        const obj1 = { a: { will: ' by override' } };
        const obj2 = { a: arr };
        expect(deepMerge(obj1, obj2).a).not.toBe(arr);
    });
});