var words = ['enterprise', 'kirk', 'data', 'worf', 'torres', 'picard', 'spock', 'starfleet', 'scotty'];

// var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var chooseWord = words[Math.floor(Math.random() * words.length)];

var arraychooseWord = chooseWord.split("");

var arrayOfBlanks = arraychooseWord.map(a => '_');

document.onkeyup = function(event) {
    var userGuess = event.key;

    var startValue = 0;

    while (chooseWord.indexOf(userGuess, startValue) !== -1) {
        startValue = chooseWord.indexOf(userGuess, startValue) + 1;
    }

}
















