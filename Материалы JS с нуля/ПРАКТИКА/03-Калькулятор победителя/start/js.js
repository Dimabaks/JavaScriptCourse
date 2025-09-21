/*
ОПИСАНИЕ ЗАДАНИЯ:

Вам нужно вычислить победителя среди двух команд.
Представим 2 комманды по плаванию - "crazyKats" и "funnyDucks"

Каждая из комманд показала 3 итоговых результата, в трех заплывах. Например crazyKats показали три резултата (30, 60, 43).

Одна из комманд побеждает только в том случае, если среднее количесто очков по итогам трех результатов, минимум в 2 раза больше чем у соперника. Иначе ничья

ЗАДАЧА:

    1. Создайте стрелочную функцию которая будет считать среднее значение, 3-х результатов комманды. Расчитывается по формуле:
    "(res1 + res2 + res3) / 3"

    2. Используйте созданную функцию чтобы получить средний результат 2-х комманд.
    
    3. Создайте функцию с двумя параметрами - которые будут принимать аргументы из результата среднего значения очков комманд. В этой функции создайте вариацию условий, которые помогут определить победителя с помощью if/ else if и вывести сообщение с результатом в консоль.

ДАННЫЕ ДЛЯ ЗАДАЧИ:

    Первый вариант: "crazyKats"- 44, 23, 71  "funnyDucks" 65, 54, 49
    Второй вариант: "crazyKats"- 85, 54, 41  "funnyDucks" 23, 34, 27


*/
const crazyKats = {
    res1: 44,
    res2: 23,
    res3: 71
}

const funnyDucks = {
    res1: 65,
    res2: 54,
    res3: 49
}

let mediumRes = (team) => {
    return ((team.res1 + team.res2 + team.res3) / 3)
}

console.log(mediumRes(crazyKats));
console.log(mediumRes(funnyDucks));

let biggestRes = (katsRes, ducksRes) => {
    if (katsRes > ducksRes * 2) {
        console.log("CrazyKats победили")
    }
    else if (ducksRes > katsRes * 2) {
        console.log("FunnyDucks победили")
    } 
    else {
        console.log("Ничья")
    }
}

biggestRes(mediumRes(crazyKats),mediumRes(funnyDucks));


// 2 метод


const calcAverage = (res1, res2, res3) => (res1 + res2 + res3) / 3;

const scoreKats = calcAverage(44, 23,71);
const scoreDucks = calcAverage(65, 54, 49);

function checkWinner(avgKats, avgDucks) {
    if (avgKats >= 2 * avgDucks) {
        console.log(`crazyKats победили с результатом ${avgKats} против funnyDucks с результатом ${avgDucks}`)
    }
    else if (avgDucks >= 2 * avgKats) {
        console.log(`funnyDucks победили с результатом ${avgDucks} против crazyKats с результатом ${avgKats}`)
    }
    else {
        console.log("Ничья")
    }
}

checkWinner(scoreKats, scoreDucks);