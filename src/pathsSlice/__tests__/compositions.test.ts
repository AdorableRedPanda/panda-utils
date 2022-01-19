import { pathsSlice } from '../pathsSlice';
import { deepMerge } from '../../deepMerge';


describe('pathsSlice and deepMerge tests', () => {
    it('should slice into objects that present the original object after the merge', () => {
        const func = () => null;
        const obj = { a: { b: '1', c: '2', d: { e: ['hi', 'there'], f: { g: func, h: 1 } } } };
        const slicedAndMerged = pathsSlice(obj).reduce((prevRes, pathObh) => deepMerge(prevRes, pathObh), {});
        expect(slicedAndMerged).toEqual(obj);
    });

    it('should slice the target into objects it merged from', () => {
        const func = () => null;
        const slices = [
            { a: { b: '1' } },
            { a: { c: '2' } },
            { a: { d: { e: [ 'hi', 'there' ] } } },
            { a: { d: { f: { g: func } } } },
            { a: { d: { f: { h: 1 } } } }
        ];

        const obj = slices.reduce((prevRes, pathObh) => deepMerge(prevRes, pathObh), {});
        expect(pathsSlice(obj)).toEqual(slices);
    });
});