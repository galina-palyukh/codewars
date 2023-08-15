/*DESCRIPTION:
You might know some pretty large perfect squares. But what about the NEXT one?
Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter.
Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

Examples:(Input --> Output)

121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square*/

// SOLUTIONS:

function findNextSquare(sq) {
    let number;
    for(let i = 1; i < sq; i++){
        if(sq/i === i){
            number = i;
            break;
        }
    }
    return number? Math.pow(number+1,2) : -1;
}
console.log(findNextSquare(625)); //676
console.log(findNextSquare(155)); //-1


// OR (better and faster solution):
function findNextSquare2(sq) {
    let n = Math.sqrt(sq);
    return Number.isInteger(n)? Math.pow(n+1,2) : -1;
}
console.log(findNextSquare(121)); //144
console.log(findNextSquare(122)); //-1