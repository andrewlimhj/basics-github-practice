// Create a game where a player must correctly guess secret words to win.
// There is 1 secret word for each guess, and the computer randomly chooses that secret word from a set of 3 words: "banana", "chisel" and "faucet".
//To win the game the player must guess correctly twice in total, e.g. the player still wins if she guesses wrongly 1 or more times between her 2 correct guesses. For each guess, output all information such as the guessed word, the secret word, and how many correct guesses the player still needs until she wins.

var playerWins = 0;
var secretWord = "";

//Generate random number between 1 and 3
var rollDice = function () {
  // produces a float between 0 and 3
  var randomFloat = Math.random() * 3;
  // take off the decimal
  var resultInteger = Math.floor(randomFloat + 1);
  return resultInteger;
};

var main = function (input) {
  // Generate random number
  var randomNumber = rollDice();

  if (randomNumber == 1) {
    secretWord = "banana";
  }

  if (randomNumber == 2) {
    secretWord = "chisel";
  }

  if (randomNumber == 3) {
    secretWord = "fauset";
  }

  if (input == secretWord) {
    playerWins = playerWins + 1;
  }

  if (input != secretWord) {
    playerWins = 0;
  }

  console.log("user guess is " + input);
  console.log("secret word is " + secretWord);
  console.log("player win count is " + playerWins);

  var myOutputValue =
    "The secret word is " +
    secretWord +
    ". Your guess is " +
    input +
    ". Your win is " +
    playerWins +
    ".";

  // if user guess correctly twice in a row, then user wins!

  if (playerWins == 2 && input == secretWord) {
    myOutputValue =
      "You win! The secret word is " +
      secretWord +
      ". Your guess is " +
      input +
      ". Your win streak is " +
      playerWins +
      ".";
  }
  return myOutputValue;
};
