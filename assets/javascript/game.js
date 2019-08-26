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

function renderWord() {
    var randomWord = wordsArray
    randomWord = randomWord[Math.floor(Math.random() * randomWord.length)];
    console.log(randomWord);
    if (randomWord <= wordsArray.length - 1) {
        document.querySelector("#word").innerHTML = wordsArray[0];
    }
}
renderWord()