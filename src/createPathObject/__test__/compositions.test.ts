import { createPathObject } from '../createPathObject';
import { toFlat } from '../../toFlat';

describe('createPathObject and toFlat compositions', () => {
    it('createPathObject * toFlat returns initial object', () => {
        const value = 0;
        const obj = { a: { b: { c: { d: { e: value } } } } };
        const path = toFlat(obj)[0];
        const compositionRes = createPathObject([path, value]);
        expect(obj).toEqual(compositionRes);
    });


    it('toFlat * createPathObject returns initial flat presentation', () => {
        const value = 0;
        const path = ['a', 'b', 'c', 'd', 'e'];
        const flat = toFlat(createPathObject([path, value]));
        expect(flat).toEqual([path, value]);
    });
});