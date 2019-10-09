module.exports = (start, end) => {
    return createMultiplyTable(start, end);
}

function createMultiplyTable(start, end) {
    if (!isInputValid(start, end)) return null;
    return formatOutput(start, end);
}
function isInputValid(start, end) {
    return isNumberValid(start) && isNumberValid(end) && isRangeValid(start, end);
}
function isNumberValid(num) {
    return num !== null && Number.isInteger(num) && num > 0 && num < 1001;
}
function isRangeValid(start, end) {
    return (end - start > -1);
}
function formatOutput(start, end) {
    const rowNum = end - start;
    let currIdx = start;
    const equationString = generateEquation(start, end);
    let rowLine = '';

    for (let a = 0; a <= rowNum; a++)
    {
        const filteredEquationString = equationString.filter(result => result.multiplier == currIdx);
        if (filteredEquationString.length == 1)
        {
            rowLine += filteredEquationString[0].equation + '\n';
        } else
        {
            filteredEquationString.forEach((v, index) => {
                rowLine += filteredEquationString[index].equation;
                (index + 1 == filteredEquationString.length) ? rowLine += '\n' : rowLine += ' ';
            })
        }
        currIdx++;
    }
    return rowLine.trim();
}
function generateEquation(start, end) {
    const equationString = [];
    for (let multiplicand = start; multiplicand <= end; multiplicand++)
    {
        for (let multiplier = multiplicand; multiplier <= end; multiplier++)
        {
            equationString.push({
                multiplier,
                equation: `${multiplicand.toString()}*${multiplier.toString()}=${multiplicand * multiplier}`
            });
        }
    }
    return equationString;
}
