const createMultiplyTable = require('../main');

it('should display multiple table', () => {
    const expected = '2*2=4\n' + '2*3=6 3*3=9\n' + '2*4=8 3*4=12 4*4=16';
    expect(createMultiplyTable(2, 4)).toBe(expected);
});

it('should return null', () => {
    expect(createMultiplyTable()).toBe(null);
});

it('should return null', () => {
    expect(createMultiplyTable(4, 2)).toBe(null);
});

it('should return null', () => {
    expect(createMultiplyTable(1, 1001)).toBe(null);
});

it('should return null', () => {
    expect(createMultiplyTable('a', 2)).toBe(null);
});

it('should return null', () => {
    expect(createMultiplyTable(null, 2)).toBe(null);
});

it('should return null', () => {
    expect(createMultiplyTable(1.1, 2)).toBe(null);
});

it('should return null', () => {
    expect(createMultiplyTable(1)).toBe(null);
});

it('should return null', () => {
    expect(createMultiplyTable(0)).toBe(null);
});

it('should return null', () => {
    expect(createMultiplyTable(1001)).toBe(null);
});

it('should return null', () => {
    expect(createMultiplyTable(-1, 7)).toBe(null);
});

it('should return null', () => {
    expect(createMultiplyTable(-4, -1)).toBe(null);
});
