const age = 16;

/* age >= 18 ? console.log("Мне есть 18") : console.log("Мне нет 18"); */

const drink = age >= 18 ? "wine" : "sok";
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = "wine"
} else {
    drink2 = "sok"
}
console.log(drink2);


console.log(`Я люблю пить ${age >= 18 ? "wine" : "sok"}`)