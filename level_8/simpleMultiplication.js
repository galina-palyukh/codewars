/*DESCRIPTION:
This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.*/

// SOLUTION:
function simpleMultiplication(number) {
    return number%2===0 ? number*8 : number*9;
}

let simpleMultiplication1 = simpleMultiplication(2);
console.log(simpleMultiplication1);
let simpleMultiplication2 = simpleMultiplication(3);
console.log(simpleMultiplication2);