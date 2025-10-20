"use strict";
// Create a function called sumAllNumbers.
// This function should accept any number of numbers using a rest parameter.
// It should return the sum of all the numbers passed to it.
function sumAllNumbers(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sumAllNumbers(1, 2, 3, 4, 5)); // Expected output: 15
