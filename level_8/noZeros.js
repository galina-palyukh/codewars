/*DESCRIPTION:
Get rid of zeroes. Only the ending ones.

Examples:
1450 -> 145
9060000 -> 906*/

// SOLUTIONS:
function noBoringZeros(n) {
    let arr = Array.from(String(Math.abs(n)), Number).reverse();
    let remove = 0;
    for(let i = 0; i< arr.length; i++){
        if(arr[i] === 0) {
            remove++;
        } else{
            break;
        }
    }
    let result = +arr.slice(remove).reverse().join("");
    return n < 0? -result : result;
}
noBoringZeros(1450); //145

// OR (shorter due to viseverse loop)

function noBoringZeros2(n) {
    if (n===0) return 0;

    let str = n.toString();
    for(let i = str.length-1; i >= 0; i--){
        if(str[i] === "0"){
            continue;
        } else {
            return +str.substring(0,i+1);
        }
    }
}
noBoringZeros(9060); //906