//makes sure the return type is a number
function add(n1: number, n2: number): number {
  return n1 + n2;
}

//labels the return type as VOID because it doesn't know how to label it. Will return undefined, which is a valid type in typescript
function printResult(num: number) {
  console.log('Result' + num);
}

//saving a function as a variable
// let combineValues: Function;
let combineValues: (a: number, b: number) => number;

combineValues = add;

console.log(combineValues(8, 8));

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(12, 29, (result) => {
  console.log(result);
  //will not return anything because the type is void
});
