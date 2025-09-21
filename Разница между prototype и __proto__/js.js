"use strict";

Array.prototype.uniq = function() {
    return [...new Set(this)]
}

const arr1 = [2, 2, 3, 3, 4, 4, 4];

console.log(arr1.uniq());