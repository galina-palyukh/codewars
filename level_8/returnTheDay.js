// INSTRUCTIONS:
// Complete the function which returns the weekday according to the input number:

// 1 returns "Sunday"
// 2 returns "Monday"
// 3 returns "Tuesday"
// 4 returns "Wednesday"
// 5 returns "Thursday"
// 6 returns "Friday"
// 7 returns "Saturday"
// Otherwise returns "Wrong, please enter a number between 1 and 7"


// SOLUTIONS:
// 1:
function whatday(num) { 

  const days = ["Sunday","Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  return num > 0 && num <= 7 ? days[num - 1] : "Wrong, please enter a number between 1 and 7"

}

// 2:
function whatday(num) { 

  switch (num){
      case 1: return "Sunday";
      case 2: return "Monday";
      case 3: return "Tuesday";
      case 4: return "Wednesday";
      case 5: return "Thursday";
      case 6: return "Friday";
      case 7: return "Saturday";
      default: return "Wrong, please enter a number between 1 and 7"; 
  }
}


// 3:
function whatday(num) { 

  const days = {
    1: "Sunday",
    2: "Monday",
    3: "Tuesday",
    4: "Wednesday",
    5: "Thursday",
    6: "Friday",
    7: "Saturday"
  }

  return days[num] || "Wrong, please enter a number between 1 and 7";
}