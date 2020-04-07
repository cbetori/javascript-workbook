'use strict';

//1.
console.log(Date());

//2.
let num = 5;
num.toString();

//3.
let text = '10';
parseFloat(text);

//4.
let trueFalse = true;
let undef
let nothing = null;

console.log(typeof(num));
console.log(typeof(text));
console.log(typeof(trueFalse));
console.log(typeof(undef));
console.log(typeof(undef + 1));
console.log(typeof(nothing));

//5.
let x = 5;
let y = 4;

console.log(x+y);

//6.
if (x === 5 && y === 4){
    console.log("Hey both conditions were met!");
}

//7.
if (x === 5 || y === 50){
    console.log("Hey one condition was met!");
}

if (x != 10 && y != 15) {
    console.log("Hey both conditions were WRONG!");
}