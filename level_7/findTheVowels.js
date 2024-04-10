INSTRUCTIONS:
// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

// So given a string "super", we should return a list of [2, 4].

// Some examples:
// Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]
// NOTES
// Vowels in this context refers to: a e i o u y (including upper case)

// SOLUTIONS:
// 1: 
function vowelIndices(word){
  const vowelLetters= ["a", "e", "i", "o","u", "y"];
  return word.toLowerCase().split("").map((el,i) => vowelLetters.includes(el) ? i+1 : null)
                .filter(k => k!== null);
}


// 2:
function vowelIndices(word){
  return word.split("").map((el,i) => {
        if(/[aeiouy]/i.test(el)){
          return i+1;
        }
        }).filter(k => k!= undefined);
}