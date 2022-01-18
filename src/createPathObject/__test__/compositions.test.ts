import { createPathObject } from '../createPathObject';
import { getPathTo } from '../../getPathTo';

describe('createPathObject and getPathTo compositions', () => {
    it('createPathObject * getPathTo returns initial object', () => {
        const value = 0;
        const obj = { a: { b: { c: { d: { e: value } } } } };
        const compositionRes = createPathObject(value, getPathTo(value, obj));
        expect(obj).toEqual(compositionRes);
    });


    it('getPathTo * createPathObject returns initial path', () => {
        const value = 0;
        const path = ['a', 'b', 'c', 'd', 'e'];
        const compositionRes = getPathTo(value, createPathObject(value, path));
        expect(path).toEqual(compositionRes);
    });
});