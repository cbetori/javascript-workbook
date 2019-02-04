'use strict'

let carsInReverse_Log = function () {
    let carsInReverse = ['Ford', 'Chevy', 'Honda', 'Toyota', 'Tesla', 'Nissan', 'Kia'];
    for (let i = 0; i < carsInReverse.length; i++) {
        console.log(carsInReverse[i]);
    }
};

let createObject = function(){
    let someObject = {        
        firstName: "Jane",
        lastName: "Doe",
        birthDate: "Jan 5, 1925",
        gender: "female"
    }
    return someObject;
};

let someObject_KeyLog = function (someObject) {
    for (let keys in someObject) {
        console.log(keys);
    }
};

let someObject_Birthday = function (someObject) {
    for (let birthDate in someObject) {
        if(birthDate === "birthDate"){
            console.log(someObject[birthDate]);
        }
    }
};

let countTo1000_While = function(number){
    while ( number <= 1000){
        console.log(number);
        number++
    }
};

let countTo1000_DoWhile = function(number){
    do {
        console.log(number)
        number++
    } while(number <= 1000)
};

carsInReverse_Log();
someObject_KeyLog(createObject());
someObject_Birthday(createObject());
countTo1000_While(1);
countTo1000_DoWhile(1);
