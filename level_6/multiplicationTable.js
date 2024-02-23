// DESCRIPTION:
// Your task, is to create N×N multiplication table, of size provided in parameter.
// For example, when given size is 3:
//
// 1 2 3
// 2 4 6
// 3 6 9
//
// For the given example, the return value should be:
// [[1,2,3],[2,4,6],[3,6,9]]


// SOLUTION:
let multiplicationTable = (size) => {
    let arr = [];
    for(let j = 1; j <= size; j++){
        arr.push([]);
        for(let i = 1; i <= size; i++){
            arr[j-1].push(j*i);
        }
    }
    return arr;
};

console.log(multiplicationTable(5));


// 720 шагов в час черепахи A
//
// 850 шагов в час черепахи B
//
// Когда она стартует, то видит что Черепаха А уже впереди на 70 шагов,
//
// Как долго займет времени у Черепахи Б, чтобы догнать Черепаху А


