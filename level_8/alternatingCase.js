// DESCRIPTION:

// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

// "hello world".toAlternatingCase() === "HELLO WORLD"
// "HELLO WORLD".toAlternatingCase() === "hello world"
// "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"

// SOLUTION:

String.prototype.toAlternatingCase = function () {
  return this.split("").map(el => {
    return el === el.toLowerCase() ? el.toUpperCase() : el.toLowerCase()
  }).join("")
}

"hello world".toAlternatingCase(); //===> "HELLO WORLD"
"HeLLo WoRLD".toAlternatingCase(); //===> "hEllO wOrld"
"1a2b3c4d5e".toAlternatingCase();  //===> "1A2B3C4D5E"