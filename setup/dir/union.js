"use strict";
//Union types
function combine(input1, input2, 
//resultConversion: string
//literal types
resultConversion) {
    let result;
    if ((typeof input1 === 'number' && input2 === 'number') ||
        resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    // if (resultConversion === 'as-number') {
    //   return +result;
    // } else {
    //   return result.toString();
    // }
    return result;
}
const combineAges = combine(30, 26, 'as-number');
console.log(combineAges);
const combineStringAges = combine('30', '25', 'as-number');
console.log(combineStringAges);
const combineNames = combine('Max', 'Anna', 'as-text');
console.log(combineNames);
