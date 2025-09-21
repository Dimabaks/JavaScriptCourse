"use strict";

/*
ЗАДАЧИ:

Создайте программу которая будет преобразовывать переменные слова в которых разделены нижним тире, в переменные которые будут записанны в camelCase нотации.
/////////

Подсказки:
1) Решение должно работать с переменными из 2-х слов. Не больше
2)Чтобы получить строку введенных данных из textarea, можно получить значение свойства value, DOM элемента textarea
3) Практика сложная, поэтому если на чем то застряли, посмотрите решение проблемы и пробуйте дальше самостоятельно.
4)Записать результат вы можете в div с классом output, через innerText
5)  По итогу переменные должны выглядеть так: 
underscoreCase
firstName
someVariable
calculateAge
delayedDeparture

*/

document.querySelector('.btn').addEventListener('click', function() {
    const textarea = document.querySelector('.text').value;
    /* console.log(textarea);
    console.log(textarea.split('\n')); */
    const arrFromStr = textarea.split('\n');
    let output = [];

    for(let el of arrFromStr) {
        const [first, second] = el.trim().toLowerCase().split("_");
        /* console.log(first);
        console.log(second); */
        const upperStr = second[0].toUpperCase() + second.slice(1);
        /* console.log(upperStr);  */
        const newStr = first + upperStr;
        /* console.log(newStr); */
        output.push(newStr);
    }
    document.querySelector('.output').innerText = output.join("\n");
    console.log(output);
 })

























/* document.querySelector('.btn').addEventListener('click', function() {
    const text = document.querySelector('.text').value;
    const rows = text.split("\n");
    let output = [];
    
    console.log(text);
    console.log(rows);

    for (let row of rows) {
        const [first, second] = row.trim().toLowerCase().split('_');
        console.log(first);
        console.log(second);
        output.push(
        `${first}${second.replace(second[0], second[0].toUpperCase())}`);
        console.log(output);
    }
    document.querySelector(".output").innerText = output.join('\n');
})
 */
