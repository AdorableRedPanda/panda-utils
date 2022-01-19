import { pathsSlice } from '../pathsSlice';


describe('', () => {
    it('', () => {
        const obj = { a: { b: '1', c: '2' } };
        const expected = [{ a: { b: '1' } }, { a: { c: '2' } }];
        expect(pathsSlice(obj)).toEqual(expected);
    });

});