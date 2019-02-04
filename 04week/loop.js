carsInReverse = ['Ford','Chevy', 'Honda', 'Toyota', 'Tesla', 'Nissan', 'Kia'];

let carsInRevers_Log = function(){
    for(let i = 0; i < carsInReverse.length; i++){
        console.log(carsInReverse[i]);
    }
};

someObject = {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
};

let someObject_KeyLog = function(){
    for(let keys of Object.keys(someObject)){
        console.log(keys);
    }
};

let someObject_Birthday= function(){
    for(let birthDate in someObject.birthDate){
        console.log(someObject.birthDate);
        
    }
}

carsInRevers_Log(carsInReverse);
someObject_KeyLog(someObject);
someObject_Birthday(someObject);
