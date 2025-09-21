"use strict";
/*
ЗАДАЧИ:

1.Создайте отдельные массивы игроков каждой команды. (Переменные pleayersTeamOne и pleayersTeamTwo)

2. Первый игрок в каждом массиве - это вратарь, остальные игроки это просто члены команды. Для первых игроков каждой команды, создайте переменную goalKeeper, а для всех остальных fieldPlayers.

3.Создайте один массив allPlayers который будет содержать всех игроков обеих команд.

4.Добавьте в массив allPlayers еще 3-х игроков. (Имена игроков придумайте сами)

5. В объекте game есть объект odds, внутри которого три свойства: 
team1: 1.33, 
x: 3.25,
team2: 6.5. 
С помощью деструктуризации объекта, создайте 3 переменные из этого объекта. При создании переменных, 
let team1 = 1.33,
let x = 3.25,
let team2 = 6.5
поменяйте имя свойства x на draw.




*/
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1
const [playersTeamOne, playersTeamTwo] = game.players;
console.log(playersTeamOne);
console.log(playersTeamTwo);

//2
const [goalkeeper1, ...fieldPlayers1] = playersTeamOne;
const [goalkeeper2, ...fieldPlayers2] = playersTeamTwo;
console.log(goalkeeper1);
console.log(fieldPlayers1);

const goalKeepers = [goalkeeper1, goalkeeper2];
console.log(goalKeepers);

const fieldPlayers = [...fieldPlayers1, ...fieldPlayers2];
console.log(fieldPlayers);

//3
const allPlayers = [...playersTeamOne, ...playersTeamTwo];
console.log(allPlayers);

//4
allPlayers.push("Ronaldo", "Messi", "Neymar");
console.log(allPlayers);

//5
let {team1, x, team2} = game.odds;
let draw = x;
console.log(team1);
console.log(draw);
console.log(team2);