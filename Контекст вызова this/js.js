'use strict';

const user = {
    name: "John",
    age: 30,
    calcAge: function() {

        //Первый спсоб через создание переменной 

        /* const self = this;
        console.log(this);
        function newFn() {
            console.log(self);
        } */

        //Второй способ через стрелочную функцию
        const newFn = () => {
            console.log(this);
        }
        newFn()
    },
};

user.calcAge();



/* function calcAge() {
    console.log(2023 - this.age)
} */