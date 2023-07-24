/* REQUIREMENTS:
Write a function that takes a single string (word) as argument.
The function must return an ordered list containing the indexes of all capital letters in the string.
 */

//SOLUTIONS:

let capitals = function (word) {
    let arrCapitals = [];
    word.split("").forEach((el,i) => {
        if(el === el.toUpperCase()){
            arrCapitals.push(i);
        }
    });
    return arrCapitals;
};
capitals('CodEWaRs');  //[0,3,4,6]


// OR

let capitals2 = function (word) {
    return word.split("").map((el,i)=> {
        return el === el.toUpperCase()? i : null;
    }).filter(item => item != null);
};
capitals2('CodEWaRs');  //[0,3,4,6]