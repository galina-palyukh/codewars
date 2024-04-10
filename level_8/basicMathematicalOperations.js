// INSTRUCTIONS:
// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

SOLUTIONS:
// 1:
const basicOp = (operation, val1, val2) => eval(val1 + operation + val2);
// basicOp("*", 5, 5); ===>  25
// 2:
// const basicOp = (operation, value1, value2) => {
//    switch(operation){
//       case '+': return value1 + value2;
//       case '-': return value1 - value2;
//       case '*': return value1 * value2;
//       case '/': return value2 != 0?  value1 / value2 : "You can't divide by 0";
//       default: return "Incorrect data entered";
//   }

// }