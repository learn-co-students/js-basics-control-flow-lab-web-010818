// Write your code in this file!
function scuberGreetingForFeet(num) {
  let greeting;
  if (num < 400){
    greeting = "This one is on me!"
  } else if (num > 2000 && num <= 2500){
    greeting = "I will gladly take your thirty bucks."
  } else if (num > 2500){
    greeting = 'No can do.'
  }
  return greeting;
}

function ternaryCheckCity(city){
  let response;
   response =  (city === 'NYC') ? 'Ok, sounds good.' : 'No go.'
   return response;
}

function switchOnCharmFromTip(tip){
  let response = '';

  switch (tip){
    case 'generous':
    response = 'Thank you so much.';
    break;
    case 'not as generous':
    response = 'Thank you.';
    break;
    default:
    response = 'Bye.'
  }
  return response;
}
