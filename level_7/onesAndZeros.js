/* REQUIREMENTS:
Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Examples:
Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
 */

//SOLUTION:

const binaryArrayToNumber = arr => {
    let str = arr.join();
    return parseInt(arr.join(""),2);
};

binaryArrayToNumber([1,0,0,0]); //8