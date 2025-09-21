"use strict";

let apple = "smallApple";
let limon = "smallLimon";

const obj = {
    fruits: {
        apple: "apple",
        orange: "orange",
        limon: "limon",
        watermelon: "watermelon"
    },
    drinks: {
        juice: "juice",
        tea: "tea",
        coctail: "coctail"
    },
};

function coctailMixer({fruits: {apple, orange}, drinks: {juice}}) {
    console.log(`Вы приготовили ${apple} ${juice} и ${orange} ${juice}`)
}

coctailMixer(obj);