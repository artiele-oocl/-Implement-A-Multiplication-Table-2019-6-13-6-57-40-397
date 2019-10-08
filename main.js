// module.exports = (num1, num2) => {
//   return renderTable(num1,num2);
// };

function createMultiplyTable(num1, num2) {
    return renderTable(num1,num2);
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
// function renderTable(num1,num2) {
//     if (!(isInputValid(num1), isInputValid(num2), isRangeValid(num1, num2))) return null;
//     let out;
//     for (let indexOuter = num1; indexOuter <= num2; indexOuter++) {
//         let column = 1;
//         "2*2=4\n2*3=6 3*3=9\n2*4=8 3*4=12 4*4=16"
//         out = `${num1}*${indexOuter}=${num1*indexOuter}`;
//         column++;
//         return out;
//     }
// }

function renderTable(start, end){
    let multiplyArray = [];
    for(; start <= end; start++){
        let currentNum = start;
        while(currentNum <= end){
            multiplyArray.push(start + '*' + currentNum + '=' + start*currentNum);
            currentNum++;
        }
    }
    console.log(multiplyArray)
    return multiplyArray;
};

function arrangeArray(multiplyArray, start,end) {
    let out = '';
    for (let indexOuter = 0; indexOuter < ((end-start)+1); indexOuter++) {
        if (indexOuter === 0) out = multiplyArray[indexOuter]+"\n";
        for (let indexInner = 0; indexInner <= indexOuter; indexInner++) {
            out += multiplyArray[indexOuter]+" ";
        }
    }
    console.log(out);
}

const a = [ '2*2=4', '2*3=6', '2*4=8', '3*3=9', '3*4=12', '4*4=16' ];
arrangeArray(2,4,a);