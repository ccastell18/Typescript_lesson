//Initiating with Types
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date(),
};

//Using interfaces
// interface Admin {
//   name: string;
//   privileges: string[];
// }

// interface Employee {
//   name: string;
//   startDate: Date;
// }

// interface ElevatedEmployee extends Admin, Employee {}

// const e1: ElevatedEmployee = {
//   name: 'Max',
//   privileges: ['create-server'],
//   startDate: new Date(),
// };

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

//TYPE GUARDS
function adding(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log('Name ' + emp.name);
  //must use "in" to see if the property is in the types
  if ('privileges' in emp) {
    console.log('Privileges ' + emp.privileges);
  }
  if ('startDate' in emp) {
    console.log('Start Date ' + emp.startDate);
  }
}

printEmployeeInformation(e1);

// _________________________________________________________________

class Car {
  drive() {
    console.log('driving...');
  }
}

class Truck {
  drive() {
    console.log('Driving a truck...');
  }

  loadCargo(amount: number) {
    console.log('Loading cargo ' + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  // if ('loadCargo' in vehicle) {
  //   vehicle.loadCargo(1000);
  // }
  //  or
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);
