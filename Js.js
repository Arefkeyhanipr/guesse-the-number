function guessGame() {
  let randomNr = Math.floor(Math.random() * 12);
  let guess;
  do {
    guess = prompt("Guess a number between 00 and 10");
    console.log(guess, randomNr);
    if (randomNr > guess) {
      alert("you guessed too low try again");
    } else if (randomNr < guess) {
      alert("you guessed too high try again");
    }
  } while (guess != randomNr);
  alert("YOU WON THE GAME!");
}

guessGame();
