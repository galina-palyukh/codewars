/*DESCRIPTION:
In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n.
For example: 5! = 5 * 4 * 3 * 2 * 1 = 120.
By convention the value of 0! is 1.

Write a function to calculate factorial for a given input.
If input is below 0 or above 12 throw throw a RangeError*/

// Examples:
// factorial(0); // 1, "factorial for 0 is 1";
// factorial(1); // 1, "factorial for 1 is 1";
// factorial(2); // 2, "factorial for 2 is 2";
// factorial(3); // 6, "factorial for 3 is 6";

// SOLUTION:

function factorial(n){

    if (n === 0) return 1;

    if (n < 0 || n > 12) {
        throw new RangeError("Input must be between 0 and 12");

    } else {
        let result = 1;
        for(let i = n; i > 0; i--){
            result = result * i;
        }
        return result;
    }
}

