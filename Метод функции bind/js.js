"use strict";

const s7 = {
    airline: "s7",
    iCode: "S7",
    booking: [],
    book: function(flightNum, name) {
        console.log(`${name} забронировал место на самолет компании ${this.airline}, номер рейса ${this.iCode}${flightNum}`)
        this.booking.push({flight: `${this.iCode}${flightNum}`, name});
    },
};

/* s7.book(2131231, "Dmitrii"); */
/* console.log(s7.booking); */

const book = s7.book;

const turkish = {
    airline: "tr",
    iCode: "TR",
    booking: [],
}

/* book.call(turkish, 112, "Dmitri"); */
/* console.log(turkish.booking) */

////


const bookTr = s7.book.bind(turkish, 666666);

bookTr("Ivan");

turkish.planes = 300;
turkish.buyPlanes = function() {
    console.log(this);

    this.planes++;
    console.log(this.planes);
};

document.querySelector('button').addEventListener('click', turkish.buyPlanes.bind(turkish))


