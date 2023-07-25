/*REQUIREMENTS:
There is an array with some numbers. All numbers are equal except for one. Try to find it!

It’s guaranteed that array contains at least 3 numbers.
The tests contain some very huge arrays, so think about performance.*/


//SOLUTIONS:
function findUniq(arr) {
    let obj = {};

    arr.forEach(el => !obj[el] ? obj[el] = 1 : obj[el]++);

    for(let key in obj){
        if(obj[key] === 1){
            return +key;
        }
    }
}
findUniq([0.5,1,1,1]);// 0.5

// OR

function findUniq2(arr) {
    arr = arr.sort();
    return arr[0]===arr[1]? arr.pop() : arr[0];
}

findUniq1([4,5,4,4,4]);// 5