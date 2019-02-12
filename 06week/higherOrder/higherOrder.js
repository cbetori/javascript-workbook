'use strict';


function forEach(arr, callback) {
  arr.forEach(() => {
    callback()
  });
  return
}

function map(arr, callback) {
  let mapped = []
  arr.map((num)=>{
    mapped.push(num * num);
  });
  return mapped
}

function filter(arr, callback) {
  let filtered = arr.filter((num)=>{
    return num % 2 === 0 ;
  })
  return filtered
}

function some(arr, callback) {
  let somed = arr.some((num) => {
      callback(num);
      return num % 2 === 0 ; 
  });
  return somed
}

function every(arr, callback) {
  let everied = arr.every((num) =>{
    callback(num);
    return num % 2 === 0;
  })
  return everied
}

module.exports = {
  forEach,
  map,
  filter,
  some,
  every
}