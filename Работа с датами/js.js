"use strict";

const date = new Date(2025, 5, 10, 17, 23, 50);

date.setFullYear(2026)

console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getMinutes());

console.log(date.getTime())

const dateMil = new Date(1781101430000);
console.log(dateMil.toISOString())