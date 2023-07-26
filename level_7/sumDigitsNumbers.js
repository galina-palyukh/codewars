/*DESCRIPTION:
Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example:
99 --> 18
-32 --> 5*/

// SOLUTION:

let sumDigits = (number) => {
    number = Math.abs(number);
    return Array.from(String(number), Number).reduce((a,b) => a+b);
};

sumDigits(-35); //8