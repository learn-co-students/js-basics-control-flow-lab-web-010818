// Write your code in this file!
function scuberGreetingForFeet(num) {
  if (num <= 400) {
    return 'This one is on me!';
  } else if (1999 < num && num < 2500) {

    return "I will gladly take your thirty bucks.";
  } else {
    return "No can do.";
  }
}


function ternaryCheckCity(city){
  if (city !== "NYC"){
    return "No go.";
  } else {
    return "Ok, sounds good."
  }
}


function switchOnCharmFromTip(tip){
  if (tip === "generous"){
    return "Thank you so much.";
  } else if (tip === "not as generous"){
    return "Thank you.";

  } else {
    return "Bye.";
  }
}
