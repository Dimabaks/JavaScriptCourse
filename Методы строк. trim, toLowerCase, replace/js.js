"use strict";

const airplane = "   dMItrII \n";

console.log(airplane.toLowerCase());
console.log(airplane.toUpperCase());

//trim удаляет пробелы
console.log(airplane.trim());


//slice вырезает данные
const priceRub = '2906р'
const priceUSD = priceRub.slice(0, priceRub.length - 1) / 72 + priceRub.replace('р', '$');
console.log(priceUSD);

//replace заменяет данные, например свет на мир
const str = 'Привет свет';
const correctStr = str.replace('свет', "мир");
console.log(correctStr);


//includes() проверяет содержимое данных
//startsWith() проверяет содержимое в начале
//endsWith() проверяет содержимое с конца
const flight = 's7ADR320';
console.log(flight.includes('7AD'));
console.log(flight.startsWith('s7'));
console.log(flight.endsWith('320'));