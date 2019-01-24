'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


    function rockPaperScissors(hand1, hand2) {

        if (hand1 === hand2) {
            "tie"
        } else if ((hand1 === 'rock' && hand2 === 'scissors') || (hand1 === 'paper' && hand2 === 'rock') || (hand1 === 'scissors' && hand2 === 'paper')) {
            "Hand 1 wins"
        } else {
            "Hand 2 wins"
        };


    }

    function getPrompt() {
        rl.question('hand1: ', (answer1) => {
            rl.question('hand2: ', (answer2) => {
                console.log(rockPaperScissors(answer1, answer2));
                getPrompt();
            });
        });
    }
