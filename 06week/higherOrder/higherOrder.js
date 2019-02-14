'use strict';


function forEach(arr, callback) {
  for (let i = 0; i < arr.length; i++){
    callback(arr)
  }
}


function map(arr, callback) {
  let newArray = []
  for (let i = 0; i < arr.length; i++){
    let newNum = callback(arr[i])
    newArray.push(newNum)

  }
  return newArray;
}

function filter(arr, callback) {
  let newArray = []
  for (let i = 0; i < arr.length; i++){
    if(callback(arr[i]) == true){
      newArray.push(arr[i])
    };
  }
  return newArray
}

function some(arr, callback) {
  for (let i = 0; i < arr.length; i++){
    if(callback(arr[i]) == true){
      return true
    }
  }
  return false
}

function every(arr, callback) {
  for (let i = 0; i < arr.length; i++){
    if(callback(arr[i]) == false){
      return false;
    }
  }
  return true
}

module.exports = {
  forEach,
  map,
  filter,
  some,
  every
}