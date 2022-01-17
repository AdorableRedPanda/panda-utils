import { isPrimitive } from '../isPrimitive';

const Objects = [{}, { foo: 'bar' }, new Number(0) ];
const Arrays = [ [], new Array([]), [0, 1, 2]];
const Primitives = [
    null,
    undefined,
    0,
    'foo',
    function func() {},
    () => {},
    () => 0,
    function* gen(){yield* [];},
    Symbol('b')
];

describe('isPrimitive tests', () => {
    it('should return `false` for objects', () => {
        expect(Objects.map(isPrimitive).every(result => result)).toBe(false);
    });

    it('should return `false` for arrays', () => {
        expect(Arrays.map(isPrimitive).every(result => result)).toBe(false);
    });

    it('should return `true` for primitives', () => {
        expect(Primitives.map(isPrimitive).every(result => result)).toBe(true);
    });
});