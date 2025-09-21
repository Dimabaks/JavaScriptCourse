const firstName = prompt("Напишите первое имя", ""),
      secondName = prompt("Напишите второе имя", ""),
      randomNum = Math.floor(Math.random() * 100);

if (randomNum < 33 && firstName != null && secondName != null && firstName != "" && secondName != "") {
    alert(`Результат совместимости имен ${firstName} и ${secondName} равен ${randomNum} Вам нужно поискать человека с другим именем`);
} else if (randomNum >= 33 && randomNum < 66 && firstName != null && secondName != null && firstName != "" && secondName != "") {
    alert(`Результат совместимости имен ${firstName} и ${secondName} равен ${randomNum} Совместимость хорошая, но может быть и лучше`);
} else if (randomNum >= 66 && firstName != null && secondName != null && firstName != "" && secondName != "") {
    alert(`Результат совместимости имен ${firstName} и ${secondName} равен ${randomNum} Вы идеально подходите друг другу`);
}
 else {
    alert("Упс... Вы не ввели имя. Попробуете еще раз");
}

console.log(null ?? undefined);


alert(alert(1) || 2 || alert(3));