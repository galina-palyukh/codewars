// INSTRUCTIONS:

// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.


// SOLUTION:
function isSortedAndHow(array) {
	console.log(array);
		if([...array].sort((a,b) => a - b).every((el,i) => el === array[i])){
			return "yes, ascending";
		} else if([...array].sort((a,b) => b - a).every((el,i) => el === array[i]) ){
			return "yes, descending";
		} else{
			return "no";
		}
	}
