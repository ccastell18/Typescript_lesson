// DECORATORS
//decorator is a function added to a  class

// 1.one way of writing
// function Logger(constructor: Function) {
//   console.log('Logging...');
//   console.log(constructor);
// }

// 2.
// function Logger(logString: string) {
//   console.log('Logger');
//   return function (constructor: Function) {
//     console.log(logString);
//     console.log(constructor);
//   };
// }

// function WithTemplate(template: string, hookId: string) {
//   console.log('template');
//   return function (constructor: any) {
//     const hookEl = document.getElementById(hookId);
//     const p = new constructor();
//     if (hookEl) {
//       hookEl.innerHTML = template;
//       hookEl.querySelector('h1')!.textContent = p.name;
//     }
//   };
// }

// //1. @Logger
// // 2.
// @Logger('Logging Person')
// @WithTemplate('<h1>My Person Object</h1>', 'app')
// class Person {
//   name = 'Max';

//   constructor() {
//     console.log('creating person object');
//   }
// }

// const pers = new Person();

// console.log(pers);

// _______________________________

//function for a property
function Log(target: any, propertyName: string | Symbol) {
  console.log('Log 1 Property decorator');
  console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Log 2 Accessor decorator!');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log('Log 3 Method decorator!');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
  console.log('Log 4 Parameter decorator!');
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error('Invalid price - must be a positive value');
    }
  }
  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 * tax);
  }
}
