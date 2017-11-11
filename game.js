// arrays of words and letters
var words = ['enterprise', 'kirk', 'data', 'worf', 'torres', 'picard', 'spock', 'starfleet', 'scotty'];
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var leng = alphabet.length;

// get by ID var for html input
var displayWord = document.getElementById("displayWord");
var displayGuesses = document.getElementById("guesses");
var displayLettersUsed = document.getElementById("lettersUsed");
var message = document.getElementById("message");
var guesses = 10;
var arrayChooseWord;
var currentStateArray;

var storedLetters = "";
var arrayOfLetters = [];

//End Global Varibles

displayLettersUsed.innerHTML = arrayOfLetters;
displayGuesses.innerHTML = guesses;

newWord();

function newWord() {
    var chooseWord = words[Math.floor(Math.random() * words.length)];
    // split random word
    arrayChooseWord = chooseWord.split('');
    console.log(arrayChooseWord);
    currentStateArray = arrayChooseWord.map(function(a) {
        return "_";
    });
    drawBoard();
}

function changeState(userGuess) {
    console.log(userGuess);
    for (var i = 0; i < arrayChooseWord.length; i++) {
        if (userGuess === arrayChooseWord[i]) {
            currentStateArray[i] = userGuess;
        }
    }
    drawBoard();
}

function drawBoard() {
    console.log(currentStateArray);
    // display blanks
    var stringOfBlanks = currentStateArray.join('');
    displayWord.innerHTML = stringOfBlanks;
}

// keyup event function
document.onkeyup = function checkKey(event) {
    message.innerHTML = "";
    var userGuess = event.key;
    validateGuess(userGuess);
} // End onKeyUp

function validateGuess(userGuess) {
    for (var i = 0; i < leng; i++) {
        if (userGuess === alphabet[i]) {
            changeState(userGuess);
            return;
        }// end if statement
    }//end loop
}//end validate guess

//Remaining Items
//function to push incorrect guesses into an array and display on page
//function to deduct lives for incorrect guesses
//display win/lose message
//function to restart game