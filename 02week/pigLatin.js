'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function pigLatin(word) {
  let ordway
  let letterCount = word.length;
  let sub = '';
  let remainingWord = word;

  for (let i = 0; i < letterCount; i++){

    let letter = word.charAt(i);

    if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' ||letter == 'u' ||
    letter == 'A' || letter == 'E' || letter == 'I' || letter == 'O' ||letter == 'U'){

      remainingWord = remainingWord.substring(i, word.length)
      ordway = remainingWord + sub + 'ay';
      
      return ordway

    } else {
  
      remainingWord = remainingWord.substring(i-1, word.length)
      sub += letter;

    } 
  }
}

function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
