"use strict";

const hotel = new Map([
    ["categories", ["std", "eco", "suit", "lux"]],
    [true, "Мы открыты"],
    [false, "Мы закрыты"]
]);
console.log(hotel);

for(let [key, value] of hotel) {
    console.log(`Ключ ${key}, значение ${value}`);
}

const obj = {
    name: "John",
    lastName: "Travolta",
    age: 30
};

/* const mapFromObj = new Map(Object.entries(obj));
console.log(mapFromObj);

const setFromMap = new Set(hotel);
console.log(setFromMap); */

/* const arrFromMap = Array.from(hotel);
console.log(arrFromMap); */

/* const arrFromObj = Object.entries(obj);
console.log(arrFromObj);

const objFromArr = Object.fromEntries(arrFromObj);
console.log(objFromArr); */


const events = ['goal', 'foul', 'goal', 'corner', 'foul'];
const eventsMap = new Map();
console.log(eventsMap)

for (let event of events) {
    if (eventsMap.has(event)) {
        eventsMap.set(event, eventsMap.get(event) + 1)
    } else {
        eventsMap.set(event, 1);
    }
}

for (let [key,value] of eventsMap) {
    console.log(`${key}: ${value}`);
}