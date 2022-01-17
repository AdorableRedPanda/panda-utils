import { deepMerge } from '../deepMerge';

describe('neutral merging tests', () => {
    it('deepMerge with empty object should not change object', () => {
        const obj = { field: { value: 'value' } };
        expect(deepMerge(obj, {})).toEqual(obj);
        expect(deepMerge({}, obj)).toEqual(obj);
    });

    it('deepMerge with itself object should not change object', () => {
        const obj = { field: { value: 'value' } };
        expect(deepMerge(obj, obj)).toEqual(obj);
    });
});