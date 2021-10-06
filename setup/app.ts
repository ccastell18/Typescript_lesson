//makes sure the return type is a number
function add(n1: number, n2: number): number {
  return n1 + n2;
}

//labels the return type as VOID because it doesn't know how to label it. Will return undefined, which is a valid type in typescript
function printResult(num: number) {
  console.log('Result' + num);
}
