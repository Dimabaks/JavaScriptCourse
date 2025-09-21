"use strict";

const map = new Map([
    ["USD", "Dollars"],
    ["RUB", "Rubbles"],
    ["EUR", "Euro"],
]);

/* map.forEach(function(value, key, map) {
    console.log(value);
    console.log(key);
    console.log(map);
}); */


const set = new Set(map);

set.forEach(function(value) {
    console.log(value);
})