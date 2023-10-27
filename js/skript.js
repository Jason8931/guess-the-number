var randomNumber = Math.floor(Math.random() * 20) + 1;
var guesses = 0;

function checkGuess() {
    var userGuess = document.getElementById("guess").value;
    guesses++;

    if (userGuess == randomNumber) {
        document.getElementById("result").innerHTML = "Поздравляем, вы угадали число " + randomNumber + " за " + guesses + " попыток!";
    } else if (userGuess < randomNumber) {
        document.getElementById("result").innerHTML = "Загаданное число больше!";
    } else {
        document.getElementById("result").innerHTML = "Загаданное число меньше!";
    }
}