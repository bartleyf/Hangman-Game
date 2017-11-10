
window.onload = function () {
	// arrays of words and letters
	var words = ['enterprise','kirk','data','worf','torres','picard','spock','starfleet','scotty'];

	var alphabet = ['a','b','c','d','e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

	// get by ID var for html input
	var displayWord = document.getElementById("displayWord")
	var displayGuesses = document.getElementById("guesses")
	var displayLettersUsed = document.getElementById("lettersUsed")

	// game play
	function gamePlay(){
		// initial guesses
		var guesses = 10;
		displayGuesses.innerHTML = guesses;

		// stored guesses
		var storedLetters = "";
		var arrayOfLetters = [];
		displayLettersUsed.innerHTML = arrayOfLetters;

		// pick random word
		var chooseWord = words[Math.floor(Math.random() * words.length)];
		console.log(chooseWord);

		// split random word
		var arraychooseWord = chooseWord.split('');
		console.log(arraychooseWord);
		var arrayOfBlanks = arraychooseWord.map(a=>'_');
		console.log(arrayOfBlanks);

		// display blanks/word
		var stringOfBlanks = arrayOfBlanks.join('');
	    displayWord.innerHTML = stringOfBlanks;

	    // keyup event function
		document.onkeyup = function checkKey() {
	    	var userGuess = event.keyCode;
	    	storedLetters = string.fromCharCode(userGuess).toLowerCase();
	    	// game rules (if statement and for loop)
	    	


	    } // End onKeyUp

	} // End gamePlay

	gamePlay(); 

} // End onload










