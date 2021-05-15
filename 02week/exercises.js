//1.
const cars = ["Ford", "Toyota", "Acura", "Lexus", "Tesla"];
console.log(cars.length);

//2.
const moreCars = ["Nissan", "Chevy", "Kia", "Honda"];
let totalCars = cars.concat(moreCars);
console.log(totalCars);

//3.
console.log(moreCars.indexOf("Honda"));
console.log(cars.lastIndexOf("Ford"));
console.log(totalCars.indexOf("Honda"));
console.log(totalCars.lastIndexOf("Ford"));

//4.
let stringOfCars = totalCars.join();
console.log(stringOfCars);

//5.
totalCars = stringOfCars.split(",");
console.log(totalCars);

//6.
let carsInReverse = totalCars.reverse();
console.log(carsInReverse);

//7.
carsInReverse = carsInReverse.sort();
console.log(carsInReverse.indexOf("Acura"));
console.log(carsInReverse);

//.8
let removedCars = carsInReverse.slice(2, 4);
console.log(removedCars);

//.9
carsInReverse.splice(1, 2, removedCars[0], removedCars[1]);
console.log(carsInReverse);

//10.
carsInReverse.push(removedCars[0],removedCars[1]);

//11.
console.log(carsInReverse.pop(carsInReverse.length));

//12.
console.log(carsInReverse.shift());

//13.
carsInReverse.unshift("BMW");
console.log(carsInReverse);

//14.
let numbers = [23, 45, 0, 2];
let counter = numbers.length;

function numbersPlus2() {
  for (let i = 0; i < counter; i++) {
    numbers.push(numbers[i] + 2); 
  }
  numbers.splice(0,4);
  console.log(numbers);
}

numbersPlus2();

