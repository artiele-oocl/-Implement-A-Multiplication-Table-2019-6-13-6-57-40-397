const createMultiplyTable = require('../main');

it ('should display multiple table', () => {
    const result = "2*2=4\n2*3=6 3*3=9\n2*4=8 3*4=12 4*4=16"
    console.log(result)
    expect(createMultiplyTable(2, 4)).toBe(result);
});

it ('should return null', () => {
    expect(createMultiplyTable(4, 2)).toBe(result);
});

it ('should return null', () => {
    expect(createMultiplyTable(4, 2)).toBe(result);
});

it ('should return null', () => {
    expect(createMultiplyTable('a', 2)).toBe(result);
});

it ('should return null', () => {
    expect(createMultiplyTable(null, 2)).toBe(result);
});