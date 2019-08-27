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

var lettersLeft = randomWord.length
var wins = 0;

window.onload = function renderWord() {



    randomLetters = Array.from(randomWord);
    // console.log(randomLetters);
    for (var i = 0; i < randomWord.length; i++) {
        randomLetters[i] = "_"
        // console.log(randomWord[0]);
        document.querySelector("#word").innerHTML = randomLetters;

    }


    document.getElementById('guesses-left').innerHTML = lettersLeft;




    document.onkeyup = function startGame() {
        var userGuess = event.key;
        console.log(userGuess);

        if (randomWord.includes(userGuess)) {
            for (var k = 0; k < randomWord.length; k++) {
                if (randomWord[k] === userGuess) {
                    randomLetters[k] = userGuess;

                }

            }
            lettersLeft--;
            console.log(lettersLeft);
            document.querySelector("#word").innerHTML = randomLetters;
        }
    }

}




