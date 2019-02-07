'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let count1 = 0;
let count2 = 0;

function checkForWinner(hand1, hand2){
  if(count1 > 3 || count2 > 3){
    count1 = 0;
    count2= 0;
  }else if (count1 === 3){
    return "Game Over: Player One Wins";
  }else if (count2 === 3){
    return "Game Over: Player Two Wins";
  }
  return "No Ulitmate Winner"
};

function rockPaperScissors(hand1, hand2) {
    hand1 = hand1.trim();
    hand1 = hand1.toLowerCase();

    hand2 = hand2.trim();
    hand2 = hand2.toLowerCase();

    if (hand1 === hand2){
        return ("It's a tie!")

    }else if(
        (hand1 === 'rock' && hand2 === 'scissors') || (hand1 === 'paper' && hand2 === 'rock')|| 
        (hand1 === 'scissors' && hand2 === 'paper')){
        count1 = count1 + 1
        checkForWinner();
        return "Hand one wins!"
         
    }else{
        count2 = count2 + 1
        checkForWinner();
        return "Hand two wins!"
    }

};

function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
      rockPaperScissors()
    });
  });
}

// Tests

if (typeof describe === 'function') {
  describe('rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('scissors', 'paper'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });


  describe('checkForWinner()', () => {
    ///couldn't get counter to reset back to zero
    it('check winner after three games', () => {
      rockPaperScissors('rock', 'paper');
      assert.equal(checkForWinner(), "No Ulitmate Winner");
      rockPaperScissors('rock', 'paper');
      assert.equal(checkForWinner(),"No Ulitmate Winner");
      rockPaperScissors('rock', 'paper');
      assert.equal(checkForWinner(), "Game Over: Player Two Wins");
    });
  });
} else {
  getPrompt();
}
