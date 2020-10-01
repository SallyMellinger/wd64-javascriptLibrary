var gameLost = true;
var randomNumber = Math.floor(Math.random() * 10) + 1;
var theGuess;
var allowedGuesses = 3;
var message = 'Guess a number between 1 and 10';

do {
  theGuess = parseInt(prompt(message));
  allowedGuesses--;
  if (isNaN(theGuess) || theGuess < 1 || theGuess > 10)
    message = 'Hey! The instructions say a NUMBER between 1 and 10. Try again and do it right this time. You only have ' + allowedGuesses + ' guesses left!';
  else if (theGuess > randomNumber)
    message = 'Your guess is too high. Remaining guesses: ' + allowedGuesses;
  else if (theGuess < randomNumber)
    message = 'Your guess is too low. Remaining guesses: ' + allowedGuesses;
  else {  
    gameLost = false;
    alert('Winner, winner, chicken dinner! Nice job.');
    break;
  }
} while (allowedGuesses > 0);

if (gameLost) {
  alert('Aw, shucks! You lost. The number was ' + randomNumber);
}