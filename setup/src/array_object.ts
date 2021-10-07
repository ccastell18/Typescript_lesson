// This is an object type inferred by Typescript. it creates key: type pairs.
// const person = {
//   name: 'Max',
//   age: 30,
// };

//the {} after person is typescript notation of a special object
// const person: {
//   name: string;
//   age: number;
// } = {

// const person = {
//   name: 'Max',
//   age: 30,
//   hobbies: ['sports', 'cooking'],

// };

//with role as tuple
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: 'Max',
//   age: 30,
//   hobbies: ['sports', 'cooking'],
//   //a union array. Also a tuple. can 'push' to a tuple, but types must be utilized.
//   role: [2, 'author'],
// };

//Enum
//assigns labels to numbers
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: 'Max',
  age: 30,
  hobbies: ['sports', 'cooking'],
  role: Role.ADMIN,
};

if (person.role === Role.AUTHOR) {
  console.log('is author');
}
