let enterName = prompt ("Enter your name");
let playerGuess;
let playerFeedback = "TEST";
let computerGuess;
loadDIV ();

function randomNum() { }

function loadDIV () {
    document.getElementById("ScriptThisDIV").innerHTML = "<H1>Hello " + enterName + "</H1>"
    document.getElementById("ScriptThisDIV").innerHTML = document.getElementById("ScriptThisDIV").innerHTML + "<H2>Guess a number between 1 & 10"
    document.getElementById("ScriptThisDIV").innerHTML = document.getElementById("ScriptThisDIV").innerHTML + playerFeedback
}

function enterNumber () {
    playerGuess = prompt ("Enter a number")
}
