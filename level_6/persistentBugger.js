/*
DESCRIPTION
Write a function that takes in a positive parameter num and returns its multiplicative persistence,
which is the number of times you must multiply the digits in num until you reach a single digit.

For example:
39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)*/


// SOLUTIONS:

function persistence(num) {
    let counter = 0;

    while(num.toString().length > 1){
        counter ++;
        let mult = 1;
        for (let i = 0; i < num.toString().length; i++){
            mult = mult * Number(num.toString()[i]);
        }
        num = mult;
    }
    return counter;
}
persistence(39); //4

// OR (using array and method reduce)

function persistence2(num) {
    let counter = 0;
    num = num.toString();

    while(num.length > 1){
        num = num.split("").map(Number).reduce((a,b) => a * b).toString();
        counter++;
    }
    return counter;
}
persistence2(4); //0