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
  word = word.trim();
  word = word.toLowerCase();
  let letterCount = word.length;
  let remainingWord = word;

  let returnWord
  let sub = '';

  for (let i = 0; i < letterCount; i++){

    let letter = word.charAt(i);

    if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' ||letter == 'u'){
      remainingWord = remainingWord.substring(i, letterCount)

      if (word.charAt(0) == 'a' || word.charAt(0) == 'e' || word.charAt(0) == 'i' || word.charAt(0) == 'o' ||word.charAt(0) == 'u'){

      returnWord = remainingWord + sub + 'yay';
      
      return returnWord
      } else {

        returnWord = remainingWord + sub + 'ay';
        return returnWord

      }
    
    } else {

      remainingWord = remainingWord.substring(i-1, letterCount)
      sub += letter;

    } 
  }
}
module.exports = {
  pigLatin
}
