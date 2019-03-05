// Word Guess Game

var wordBank = ["basket", "flower", "muscle", "zebra", "crayon", "monkey"]
var guess
var guesses = []
var guessesRem = 20
var wins = 0
var currentWord = wordBank[wins]
var currentWordText = []


function writeDisplay() {
  document.getElementById("wins-text").innerHTML = "Wins: " + wins
  document.getElementById("currentWord-text").innerHTML = currentWordText
  document.getElementById("guessesRem-text").innerHTML = guessesRem
  document.getElementById("alreadyGuessed-text").innerHTML = guesses
}

for (var i = 0; i < currentWord.length; i++) {
  currentWordText.push("_")
}








document.addEventListener("keyup", keyPress)

function keyPress() {

  guess = event.key.toLowerCase()
  // for testing
  console.log(guess)

  var index = currentWord.indexOf(guess)

  if (index > -1) {
      currentWordText[index] = guess

  } else if (guesses.indexOf(guess) === -1) {
      guesses.push(guess)
      guessesRem --
  }


  writeDisplay()

  //if user wins
   if (currentWordText.indexOf("_") === -1) {
      wins ++
      currentWord = wordBank[wins]
      currentWordText = []
      guessesRem = 20

      for (var i = 0; i < currentWord.length; i++) {
        currentWordText.push("_")
      }

      writeDisplay()
   }


}
