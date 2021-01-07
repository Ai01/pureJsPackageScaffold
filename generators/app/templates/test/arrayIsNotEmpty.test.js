import { arrayIsNotEmpty } from '../src';

const a = [];
const b = [1]

describe('arrayIsNotEmpty测试', () => {
    test('空数组测试', () => {
         expect(arrayIsNotEmpty(a)).toBe(false);
    });

    test('非空数组测试', () => {
        expect(arrayIsNotEmpty(b)).toBe(true);
    });

    test('参数类型错误测试', () => {
        expect(arrayIsNotEmpty('b')).toBe(false);
    })
})
