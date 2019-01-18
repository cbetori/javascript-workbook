'use strict';

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

getPrompt();

function pigLatin(word){
  let ordway
  let letterCount = word.length;
  let sub = '';
  let remainingWord = word;
  for (let i = 0; i < letterCount; i++){

    let letter = word.charAt(i);

    if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' ||letter == 'u' ||
    letter == 'A' || letter == 'E' || letter == 'I' || letter == 'O' ||letter == 'U'){

      remainingWord = remainingWord.substring(i, word.length)

      if (word.charAt(0) == 'a' || word.charAt(0) == 'e' || word.charAt(0) == 'i' || word.charAt(0) == 'o' ||word.charAt(0) == 'u' ||
      word.charAt(0) == 'A' || word.charAt(0) == 'E' || word.charAt(0) == 'I' || word.charAt(0) == 'O' ||word.charAt(0) == 'U'){
      ordway = remainingWord + sub + 'yay';
      
      return ordway
      } else {
        ordway = remainingWord + sub + 'ay';
        return ordway
      }
    
    } else {

      remainingWord = remainingWord.substring(i-1, word.length)
      sub += letter;

    } 
  }
}
module.exports = {
  pigLatin
}
