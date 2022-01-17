import { naiveClone } from '../naiveClone';

const func = () => {};
const primitives = ['', {}, () => '!', null, func];
const obj = { func, objField: { field: 1000 } };
const objArr = [{ color: 'red' }, { color: 'green' }, { color: 'blue' }];

describe('naiveClone tests', () => {
    it('should leave empty objects empty', () => {
        expect(naiveClone({})).toEqual({});
    });

    it('should leave empty arrays empty', () => {
        expect(naiveClone([])).toEqual([]);
    });

    it('should leave function properties unchanged', () => {
        expect(naiveClone(obj).func).toEqual(func);
        expect(naiveClone(obj)).toEqual(obj);
    });

    it('should leave primitives array unchanged', () => {
        expect(naiveClone(primitives)).toEqual(primitives);
    });

    it ('should copy objects fields to new objects', () => {
        const copy = naiveClone(obj);
        expect(obj).not.toBe(copy);
    });

    it ('array copy should contains new objects', () => {
        const copy = naiveClone(objArr);
        expect(objArr).not.toBe(copy);
    });

    it ('array copy should contains same elements', () => {
        expect(objArr).toEqual(naiveClone(objArr));
    });

}) ;