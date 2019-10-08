const createMultiplyTable = require('../main');

it ('should display multiple table', () => {
    const result =
    `2x2=4
    2x3=6 3x3=9
    2x4=8 3x4=12 4x4=16`
    console.log(result)
    expect(createMultiplyTable(2, 4)).toBe(result);
});