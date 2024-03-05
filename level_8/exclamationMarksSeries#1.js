// DESCRIPTION:
// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// Examples
// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi!!"
// "!Hi"     ---> "!Hi"

// SOLUTIONS:
// 1:
function remove (string) {
  let lastEl = string.length - 1;
  
  if(string.charAt(lastEl) === "!"){
    return string.slice(0, lastEl);
  } else{
    return string;
  }

}

// 2:
const remove = s => s.replace(/!$/, "");