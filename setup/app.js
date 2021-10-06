//makes sure the return type is a number
function add(n1, n2) {
    return n1 + n2;
}
//labels the return type as VOID because it doesn't know how to label it. Will return undefined, which is a valid type in typescript
function printResult(num) {
    console.log('Result' + num);
}
//saving a function as a variable
// let combineValues: Function;
var combineValues;
combineValues = add;
console.log(combineValues(8, 8));
