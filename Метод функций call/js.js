"use strict";

function person(greetStr) {
    console.log(greetStr + " " + this.firstName + " " + this.lastName)
}

const person1 = {
    firstName: "John",
    lastName: "Doe",
};

const person2 = {
    firstName: "Mary",
    lastName: "Doe",
}

person.call(person2, 'Добрый день');

const s7 = {
    airline: "s7",
    iCode: "S7",
    booking: [],
    book: function(flightNum, name) {
        console.log(`${name} забронировал место на самолет компании ${this.airline}, номер рейса ${this.iCode}${flightNum}`)
        this.booking.push({flight: `${this.iCode}${flightNum}`, name});
    },
};

s7.book(2131231, "Dmitrii");
console.log(s7.booking);

const book = s7.book;

const turkish = {
    airline: "tr",
    iCode: "TR",
    booking: [],
}

book.call(turkish, 112, "Dmitri");
console.log(turkish.booking)