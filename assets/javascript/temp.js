// Word Guess Game (word bank can be modified without breaking functions)





var wordBank = ["basketball", "jumpshot", "dribble", "rebound", "assist", "pass"]
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var guess
var alreadyGuessed = []
var guessesRem = 5
var wins = 0
var currentWord = wordBank[wins]
var currentWordText = []





var game = {


  writeDisplay: function() {
    document.getElementById("wins-text").innerHTML = "Wins: " + wins
    document.getElementById("currentWord-text").innerHTML = currentWordText
    document.getElementById("guessesRem-text").innerHTML = guessesRem
    document.getElementById("alreadyGuessed-text").innerHTML = alreadyGuessed
  },

  reset: function() {
    currentWordText = []
    for (var i = 0; i < currentWord.length; i++) {
    currentWordText.push("_")
    }
  },

  keyPress: function() {

    guess = event.key.toLowerCase()
    // for testing
    console.log(guess)

    //initial check to see if user guess is a viable character
    if (alphabet.indexOf(guess) > -1 && guessesRem != 0) {
      // loops a condition to check if user's guess exists in the current word, and then reveals them in respective order in the document
      for (var i=0; i < currentWord.length; i++) {
        if (guess === currentWord[i]) {
          currentWordText[i] = guess
        }
      }

      // pushes user guess to alreadyGuessed if user guess does not exist in currentWord or alreadyGuessed
      if (currentWord.indexOf(guess) == -1 && alreadyGuessed.indexOf(guess) === -1) {
          alreadyGuessed.push(guess)
          guessesRem --
      }


      // win condition: if there are no longer any _'s in currentWordText
      if (currentWordText.indexOf("_") === -1) {
        wins ++
        currentWord = wordBank[wins]
        guessesRem = 5
        alreadyGuessed = []
        this.reset()

        setTimeout(function(){writeDisplay()}, 1500)
      }

    }

    if (guessesRem === 0) {
       setTimeout(function(){
         wins = 0
         guessesRem = 5
         alreadyGuessed = []
         currentWord = wordBank[0]
         this.reset()
         this.writeDisplay()
        }, 750)
    }
  },
}

game.reset()
document.addEventListener("keyup", game.keyPress)

// write display function


// resets currentWordText array with _'s

// function reset() {
//   currentWordText = []
//   for (var i = 0; i < currentWord.length; i++) {
//   currentWordText.push("_")
//   }
// }



// function keyPress() {

//   guess = event.key.toLowerCase()
//   // for testing
//   console.log(guess)

//   //initial check to see if user guess is a viable character
//   if (alphabet.indexOf(guess) > -1 && guessesRem != 0) {
//     // loops a condition to check if user's guess exists in the current word, and then reveals them in respective order in the document
//     for (var i=0; i < currentWord.length; i++) {
//       if (guess === currentWord[i]) {
//         currentWordText[i] = guess
//       }
//     }

//     // pushes user guess to alreadyGuessed if user guess does not exist in currentWord or alreadyGuessed
//     if (currentWord.indexOf(guess) == -1 && alreadyGuessed.indexOf(guess) === -1) {
//         alreadyGuessed.push(guess)
//         guessesRem --
//     }

//     writeDisplay()

//     // win condition: if there are no longer any _'s in currentWordText
//     if (currentWordText.indexOf("_") === -1) {
//       wins ++
//       currentWord = wordBank[wins]
//       guessesRem = 5
//       alreadyGuessed = []
//       reset()

//       setTimeout(function(){writeDisplay()}, 1500)
//     }

//   }

//   if (guessesRem === 0) {
//      setTimeout(function(){
//        wins = 0
//        guessesRem = 5
//        alreadyGuessed = []
//        currentWord = wordBank[0]
//        reset()
//        writeDisplay()
//       }, 750)
//   }
// }
