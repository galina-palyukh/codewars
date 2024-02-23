function checkExam(array1, array2) {
debugger;
  let score = 0;
  for(let i = 0; i < array1.length; i++){
    if (array1[i] === array2[i]){
      score += 4;
		
    } else if(array2[i] === "" || array2[i] === " "){
      score += 0;
    } else {
      score -= 1;
    }
  }
  return Math.max(0, score);
}


checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]);