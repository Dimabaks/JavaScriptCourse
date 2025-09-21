let elem = document.querySelector('h1');

console.log(elem.innerHTML);

let oldData = elem.innerHTML;

elem.innerHTML = `<p>${oldData}</p><p>Привет!</p>`

//outerHTML - позволяет заменять тег элемента. Допустим сейчас у нас бы поменялся тег h1 на p

