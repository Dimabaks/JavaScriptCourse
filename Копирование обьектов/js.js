const obj = {
    name: "John",
    age: 30,
}

/* const obj2 = obj
obj2.age = "dadasdasd"

console.log(obj);
console.log(obj2); */

const obj2 = Object.assign({}, obj) //или const obj2 = {...obj}
obj2.age = "dsadasd"

console.log(obj);
console.log(obj2)