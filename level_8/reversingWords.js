/*DESCRIPTION:
You need to write a function that reverses the words in a given string. A word can also fit an empty string.
As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

Example (Input --> Output):
"Hello World" --> "World Hello"
"Hi There." --> "There. Hi"
*/


// SOLUTION:
function reverse(string){
    return string.trim().split(" ").reverse().join(" ");
}