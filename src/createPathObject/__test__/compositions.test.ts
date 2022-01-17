import { createPathObject } from '../createPathObject';
import { getPath } from '../../getPath';

describe('createPathObject and getPath compositions', () => {
    it('createPathObject * getPath returns initial object', () => {
        const value = 0;
        const obj = { a: { b: { c: { d: { e: value } } } } };
        const compositionRes = createPathObject(value, getPath(value, obj));
        expect(obj).toEqual(compositionRes);
    });


    it('getPath * createPathObject returns initial path', () => {
        const value = 0;
        const path = ['a', 'b', 'c', 'd', 'e'];
        const compositionRes = getPath(value, createPathObject(value, path));
        expect(path).toEqual(compositionRes);
    });
});