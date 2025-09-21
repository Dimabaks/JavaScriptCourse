"use strict";
/*
ЗАДАЧА:
Создайте игру "Собери алфавит"

ПОДСКАЗКИ:

1-Не думайте о сокращении кода. Если будет очень много повторений однотипного кода - это нормально. Первая задача понимать логику языка, а только после оптимизировать его.
2-Помните про методы переноса элемента из одного места в другое(before, after и т.д.)
3-Помните про свойства, получения соседних элементов (previousElementSibling, previousElementSibling и т.д)

*/

/* const boxes = document.querySelector('.boxes')
const boxesLetter = document.querySelectorAll(".boxes__box");
const audioClick = new Audio("audio/Mountain Audio - Menu Click.mp3");
const audioWin = new Audio("audio/huge win.wav");

const letterA = document.querySelector('.box_a'),
      letterB = document.querySelector('.box_b'),
      letterC = document.querySelector('.box_c'),
      letterD = document.querySelector('.box_d'),
      letterE = document.querySelector('.box_e'),
      letterF = document.querySelector('.box_f');

for (let value of boxesLetter) {
    value.addEventListener('click', () => {
        const prev = value.previousElementSibling;
        if(prev) {
            prev.before(value);
        } else {
            boxes.append(value);
        }
        audioClick.play();


        const currentLetter = boxes.children;
        console.log(currentLetter)
        if (currentLetter[0] == letterA && currentLetter[1] == letterB && currentLetter[2] == letterC && currentLetter[3] == letterD && currentLetter[4] == letterE && currentLetter[5] == letterF) {
            audioWin.play();
        }
    })
}
 */

const letters = document.querySelectorAll('.boxes__box');
const audioClick = new Audio('audio/Mountain Audio - Menu Click.mp3');
const audioWin = new Audio('audio/huge win.wav');
let newLetters;

for (let i = 0; i < letters.length; i++) {
    letters[i].addEventListener('click', () => {
        if (letters[i].previousElementSibling != null) {
            letters[i].previousElementSibling.before(letters[i]);
            audioClick.play();
            newLetters = document.querySelectorAll('.boxes__box');

            console.log(newLetters)
        } else if (letters[i].nextElementSibling != null) {
            letters[i].nextElementSibling.after(letters[i]);
            audioClick.play()
            newLetters = document.querySelectorAll('.boxes__box');

            console.log(newLetters);
        }
        if(
            newLetters[0].classList.contains('box_a') &&
            newLetters[1].classList.contains('box_b') &&
            newLetters[2].classList.contains('box_c') &&
            newLetters[3].classList.contains('box_d') &&
            newLetters[4].classList.contains('box_e') &&
            newLetters[5].classList.contains('box_f')
        ) {
            audioWin.play();
        }
    })
}
