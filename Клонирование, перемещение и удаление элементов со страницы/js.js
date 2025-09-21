'use strict';

let header = document.querySelector('h1');
let ul = document.querySelector('ul');

let ulClone = ul.cloneNode(true);

header.prepend(ulClone)

//для удаления тега со страницы используем .remove()
//для обычного клонирование .cloneNode()
//для глубокого клонирования .cloneNode(true)