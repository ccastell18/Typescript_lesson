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
