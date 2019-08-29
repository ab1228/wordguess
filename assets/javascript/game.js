var wordsArray = [
    "appear",
    "disgust",
    "sack",
    "crack",
    "jewel",
    "fish",
    "frightening",
    "patch",
    "cub",
    "clammy",
    "hook",
    "approach",
    "cost",
    "cultured",
    "bright",
    "bind",
    "billowy",
    "flowery",
    "lettuce",
    "rain",
]




var randomWord = wordsArray
randomWord = randomWord[Math.floor(Math.random() * randomWord.length)];



window.onload = function renderWord() {

    var lettersLeft = randomWord.length;
    var wins = 0;
    wrongGuesses = [];
    arrayrandomLetters = [];

    arrayrandomLetters = Array.from(randomWord);
    // console.log(arrayrandomLetters);
    for (var i = 0; i < randomWord.length; i++) {
        arrayrandomLetters[i] = "_"
        var stashComma = arrayrandomLetters.join(" ")
        // console.log(randomWord[0]);
        document.querySelector("#word").innerHTML = arrayrandomLetters.join(" ");

    }


    document.getElementById('guesses-left').innerHTML = lettersLeft;
    document.getElementById('user-wins').innerHTML = wins;
    document.getElementById("letters-guessed").innerHTML = wrongGuesses;




    document.onkeyup = function startGame() {
        var userGuess = event.key;
        console.log(userGuess);

        if (randomWord.includes(userGuess)) {
            for (var k = 0; k < randomWord.length; k++) {
                if (randomWord[k] === userGuess) {
                    arrayrandomLetters[k] = userGuess;


                }

            }
            lettersLeft--;
            console.log(lettersLeft);
            document.querySelector("#word").innerHTML = arrayrandomLetters.join(" ");
            document.getElementById('guesses-left').innerHTML = lettersLeft;
        }
        if (lettersLeft <= 0 && arrayrandomLetters.includes("_") != true) {
            wins++
            document.getElementById("user-wins").innerHTML = wins;

        }
        else {
            var userGuess = event.key;
            for (var f = 0; f < randomWord.length; f++) {
                if (randomWord.indexOf(userGuess) === -1) {
                    wrongGuesses.push(userGuess);
                    console.log(wrongGuesses);
                }
            }
            document.getElementById("letters-guessed").innerHTML = wrongGuesses.join(" ");
            lettersLeft--
            document.getElementById('guesses-left').innerHTML = lettersLeft



        }
        if (lettersLeft === 0) {
            document.getElementById("game-over").innerHTML = "Your letters did not equal the word. Press any letters tp start again";
            startGame();
        }


    }

};




