"use strict";

///////////////////////////////////////

/* 
ЗАДАЧА: 
Создайте игру в угадай число.


Удачи)
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

let score = 20;
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
};

document.querySelector(".check").addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    if (!guess) {
        displayMessage("Вы не ввели число!")
    } else if (guess === secretNumber) {
        displayMessage("Вы выиграли")
        document.querySelector('body').style.background = 'green';
        document.querySelector('.number').textContent = guess;
        if(score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if (guess != secretNumber) {
        if(score > 1) {
            if (guess < secretNumber) {
                displayMessage("Слишком маленькое число")
                score--;
                document.querySelector('.score').textContent = score;
            } else if (guess > secretNumber) {
                displayMessage("Слишком большое число")
                score--;
                document.querySelector('.score').textContent = score;
            }
        } else {
            displayMessage("Вы проиграли");
            document.querySelector('.score').textContent = 0;
        }
    }
});


document.querySelector('.again').addEventListener('click', () => {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage("Начните угадывать");
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = "?";
    document.querySelector('.guess').value = "";
    document.querySelector('body').style.background = "black";
})

