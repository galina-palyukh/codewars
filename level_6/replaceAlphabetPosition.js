/*DESCRIPTION:
In this kata you are required to, given a string, replace every letter with its position in the alphabet.
If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example:
alphabetPosition("The sunset"); // "20 8 5 19 21 14 19" */

// SOLUTIONS:
function alphabetPosition1(text) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";

    let arr = text.split("");
    let arrOnlyLetters = arr.filter(el => alphabet.includes(el.toLowerCase())).map(el => el.toLowerCase());
    let indexes = [];
    for (let i = 0; i < arrOnlyLetters.length; i++){
        indexes.push(alphabet.indexOf(arrOnlyLetters[i])+1);
    }
    return indexes.join(" ");
}

// OR (with .replace and regexp)

function alphabetPosition2(text) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    return text.toLowerCase().replace(/[^a-zA-Z]/gi,"").split("")
        .map((el, i) => alphabet.indexOf(el)+1)
        .join(" ")
}

// OR (with .test and regexp)

function alphabetPosition3(text) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    return text.toLowerCase().split("")
        .filter(el => /[a-z]/.test(el))
        .map((el, i) => alphabet.indexOf(el)+1)
        .join(" ")
}

// OR (with .charCodeAt)
function alphabetPosition(text) {
    return text.toUpperCase()
        .replace(/[^A-Z]/g,"")
        .split("")
        .map(el => el.charCodeAt(0) - 64)
        .join(" ")
}