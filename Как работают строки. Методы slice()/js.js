"use strict";

const airpline = "TAP Air Portugal";
const plane = "D430";
console.log(airpline.indexOf("a"));
console.log(airpline.slice(0, airpline.indexOf(" "))); //lastIndexOf

const checkSeat = function(seat) {
    const s = seat[0];
    if (s == "A") console.log("Вам повезло ваше место у окна");
    else console.log("Вам не повезло ваше место не у окна")
}

checkSeat("B667");