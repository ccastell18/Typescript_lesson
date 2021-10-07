//Union types

// function combine(input1: number | string, input2: number | string) {
//   let result;
//   if (typeof input1 === 'number' && input2 === 'number') {
//     result = input1 + input2;
//   } else {
//     result = input1.toString() + input2.toString();
//   }

//   return result;
// }

// const combineAges = combine(30, 26);

// const combineNames = combine('Max', 'Anna');

// function combine(
//   input1: number | string,
//   input2: number | string,
//   //resultConversion: string
//   //literal types
//   resultConversion: 'as-number' | 'as-text'
// ) {
//   let result;
//   if (
//     (typeof input1 === 'number' && input2 === 'number') ||
//     resultConversion === 'as-number'
//   ) {
//     result = +input1 + +input2;
//   } else {
//     result = input1.toString() + input2.toString();
//   }

//   // if (resultConversion === 'as-number') {
//   //   return +result;
//   // } else {
//   //   return result.toString();
//   // }

//   return result;
// }

//reusable type
type Combinable = number | string;

function combine(
  input1: Combinable,
  input2: Combinable,
  //resultConversion: string
  //literal types
  resultConversion: 'as-number' | 'as-text'
) {
  let result;
  if (
    (typeof input1 === 'number' && input2 === 'number') ||
    resultConversion === 'as-number'
  ) {
    result = +input1 + +input2;
  } else {
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
