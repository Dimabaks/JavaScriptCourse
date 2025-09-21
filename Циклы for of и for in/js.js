'use strict';

/* let a = 0

let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}


while (a < 3) {
    console.log(a);
    a++;
} */

let arr = [1, 2, 3, 4, 5];

for (let value of arr) {
    console.log(value)
}

let obj = {
    name: "John",
    lastName: "Travolta",
    age: 30
};

for (let key in obj) {
    console.log(obj[key])
}