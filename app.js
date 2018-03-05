// GLOBAL VARIABLES
// +++++++++++++++++++++++
var words = ['enterprise', 'kirk', 'data', 'worf', 'torres', 'picard', 'spock', 'starfleet', 'scotty'];

var displayWord = "";

var lettersInChosenWord = [];

var numOfBlanks = 0;

var blanksAndSuccesses = [];

var wrongGuesses = [];

// Game Counters
var winCounter = 0;
var lossCounter = 0;
var numOfGuesses = 10;

// Game Functions

// Game Start
function startGame() {
    numOfGuesses = 10;

    displayWord = words[Math.floor(Math.random() * words.length)];

    lettersInChosenWord = displayWord.split("");

    numOfBlanks = lettersInChosenWord.length;

    console.log(displayWord);

    blanksAndSuccesses = [];

    wrongGuesses = [];

    for (var i = 0; i < numOfBlanks; i++) {
        blanksAndSuccesses.push("_");
    }

    console.log(blanksAndSuccesses);

    document.getElementById("guesses").innerHTML = numOfGuesses;

    document.getElementById("displayWord").innerHTML = blanksAndSuccesses.join(" ");

    document.getElementById("lettersUsed").innerHTML = wrongGuesses.join(" ");
}

function checkLetters(letter) {
    var letterInWord = false;

    for (var i = 0; i < numOfBlanks; i++) {
        if (displayWord[i] === letter) {
            letterInWord = true;
        }
    }

    if (letterInWord) {
        for (var a = 0; a < numOfBlanks; a++) {
            if (displayWord[a] === letter) {
                blanksAndSuccesses[a] = letter;
            }
        }
        console.log(blanksAndSuccesses);
    }
    else {
        wrongGuesses.push(letter);
        numOfGuesses--;
    }
}

function roundComplete() {
    console.log("WinCount: " + winCounter + " | LossCount: " + lossCounter + " | NumGuesses: " + numOfGuesses);

    document.getElementById("guesses").innerHTML = numOfGuesses;

    document.getElementById("displayWord").innerHTML = blanksAndSuccesses.join(" ");

    document.getElementById("lettersUsed").innerHTML = wrongGuesses.join(" ");

    if (lettersInChosenWord.toString() === blanksAndSuccesses.toString()) {
        winCounter++;
        alert("You Win!");

        document.getElementById("winCounter").innerHTML = winCounter;
        startGame();
    }
    else if (numOfGuesses === 0) {
        lossCounter++;
        alert("You Lose! :( ");

        document.getElementById("lossCounter").innerHTML = lossCounter;

        startGame();
    }
}

startGame();

document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();

    checkLetters(letterGuessed);

    roundComplete();
};