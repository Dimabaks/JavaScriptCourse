
/* let a = 12;
function myFunction() {
    a = 10;
}

myFunction()
console.log(a); */

const a = 3;
function myFunction() {
    function myFunction2() {
        console.log(a)
    }
    myFunction2()
}
myFunction();