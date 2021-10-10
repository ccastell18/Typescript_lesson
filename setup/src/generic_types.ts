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
//extending the generic types creates restraints on what kind of data is allowed.
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

//will create an object but cannot access keys and values.
// console.log(merge({ name: 'Max' }, { age: 39 }));

const mergeObj = merge({ name: 'Max' }, { age: 39 });
console.log(mergeObj.age);

// ANOTHER GENERIC FUNCTION
//to correct length error, use an interface
interface Lengthy {
  length: number;
}
//can give anytime of input to the function.
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value';
  if (element.length === 1) {
    descriptionText = 'Got 1 element';
  } else if (element.length > 1) {
    descriptionText = 'Got ' + element.length + ' elements';
  }
  return [element, descriptionText];
}

console.log(countAndDescribe([]));

// KEYOF CONSTRAING

function extractAndCount<T extends object, U extends keyof T>(obj: T, key: U) {
  return 'Value: ' + obj[key];
}

extractAndCount({ name: 'Max' }, 'name');

// GENERIC CLASS

class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }
  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

//gives flexibility while also being constrained. Can be string, number, object, etc....
const textStorage = new DataStorage<string>();
textStorage.addItem('Max');
textStorage.addItem('manu');
textStorage.addItem('chris');
textStorage.removeItem('chris');
console.log(textStorage.getItems());

// GENERIC UTILITY TYPES
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}
//Partial can make an interface like a type and not need all properties from interface
function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}
