"use strict";

const bookings = [];

function createBooking(flightNum = 1, numPassengers = 1, price) {
    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking);
}

createBooking("343GRT", 23, 100);
createBooking("343BRT", 12, 200);
createBooking("343SRT", 21, 50);

console.log(bookings);