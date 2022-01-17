import { deepMerge } from '../deepMerge';

const CannotBeMerged = [
    null,
    undefined,
    0,
    'foo',
    function func() {},
    () => {},
    () => 0,
    function* gen(){yield* [];},
    Symbol('b'),
    [0, 10, 2, {}, { key: '12' }],
    new Array([])
];

const AnyItems = [
    ...CannotBeMerged,
    { field: { value: 'value' } },
    { value: 'value' }
];

const getEntries = (prefix: string) => AnyItems.map((item, i) => [`${prefix}_${i}`, item]);

describe('merge disjoint tests', () => {

    it('deepMerge creates returns second value if arguments cannot be merged', () => {
        const obj = { field: { value: 'value' } };
        const objArray = new Array(CannotBeMerged.length).fill(obj);
        const afterLeftMerge = CannotBeMerged.map(item => deepMerge(obj, item));
        const afterRightMerge = CannotBeMerged.map(item => deepMerge(item, obj));
        expect(CannotBeMerged).toEqual(afterLeftMerge);
        expect(objArray).toEqual(afterRightMerge);
    });

    it('deepMerge creates new array if second argument is array', () => {
        expect(deepMerge({ any: 'value' }, CannotBeMerged)).not.toBe(CannotBeMerged);
    });

    it('deepMerge of two objects should create new object', () => {
        const obj = { field: { value: 'value' } };
        expect(deepMerge(obj, obj)).not.toBe(obj);
        expect(deepMerge(obj, {})).not.toBe(obj);
    });

    it('should merge disjoint objects as usual merge', () => {
        const first = Object.fromEntries(getEntries('first'));
        const second = Object.fromEntries(getEntries('second'));
        expect({ ...first, ...second }).toEqual(deepMerge(first, second));
    });

    it('deepMerge of disjoint objects is commutative', () => {
        const first = Object.fromEntries(getEntries('first'));
        const second = Object.fromEntries(getEntries('second'));
        expect(deepMerge(second, first)).toEqual(deepMerge(first, second));
    });
});
