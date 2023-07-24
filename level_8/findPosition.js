/* REQUIREMENTS:
return its position in the alphabet.
Input :: "a"
Ouput :: "Position of alphabet: 1"*/


// SOLUTION:
let position = (letter) => {
    return "Position of alphabet: " + Number("abcdefghijklmnopqrstuvwxyz".indexOf(letter) + 1);
};

position("a");// "Position of alphabet: 1"