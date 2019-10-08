// module.exports = (num1, num2) => {
//     return renderTable(isInputValid(num1), isInputValid(num2), isRangeValid(num1, num2));
// };

function createMultiplyTable(num1, num2) {
    return isInputValid(num1) && isInputValid(num2) && isInputValid(num1) ? console.log('Valid') : console.log('Invalid');
};

function isInputValid(num) {
    return num!==null && Number.isInteger(num) && isValidInteger(num)
}
function isValidInteger(num) {
    return num > 0 && num <1001;
}
function isRangeValid(num1, num2) {
    return (num2-num1 > -1);
}

createMultiplyTable(2, 4);
