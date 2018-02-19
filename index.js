// Write your code in this file!
const scuberGreetingForFeet =  function(feet) {
  if (feet <= 400) {
    return 'This one is on me!';
  } else if (1999 < feet && feet < 2500) {
    return "I will gladly take your thirty bucks.";
  } else {
    return "No can do.";
  }
}

const ternaryCheckCity = function(city){
  if(city === 'NYC'){
    return `Ok, sounds good.`
  }
  else {
    return `No go.`
  }
}

const switchOnCharmFromTip = function(tip){
  if (tip === 'generous'){
    return `Thank you so much.`
  }
  else if (tip === 'not as generous'){
    return `Thank you.`
  }
  else  {
    return `Bye.`
  }
}
