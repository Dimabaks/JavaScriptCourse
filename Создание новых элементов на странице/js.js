'use strict';
let header = document.querySelector("h1");
let secondHeader = document.createElement("h2");

secondHeader.innerHTML = "Я второй заголовок";
/* header.append(secondHeader, "Some text"); */
header.insertAdjacentHTML("afterbegin", "<p>Some text</p>")
console.log(secondHeader);

//.before - для вставки нового элемента перед выбранным
//.after - для вставки нового элемента после выбранного
//.prepend - для вставки нового элемента внутрь выбранного и перед его содержимым
//.append - для вставки нового элемента внутрь выбранного и после его содержимого