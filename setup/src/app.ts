// GENERICS

// BUILT-IN GENERICS
//an array is already a type. putting string gives the variable access to all the string methods like .split()
const names: Array<string> = ['Max']; //string[]
names[0].split(' ');

//another built-in is Promise constructor
const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('this is done');
  }, 2000);
});

// GENERIC FUNCTIONS
//using generic types means different info will be parameters and will return an intersection. Set dynamically.
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

//will create an object but cannot access keys and values.
// console.log(merge({ name: 'Max' }, { age: 39 }));

const mergeObj = merge({ name: 'Max' }, { age: 39 });
console.log(mergeObj.age);
