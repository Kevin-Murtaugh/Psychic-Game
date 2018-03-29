var alphabet=["abcdefghijklmnopqrstuvwxyz"];
alphabet= alphabet[0].split("");

var guessArray=["          "];

var wins= 0; 
var losses = 0;
var guesses = 10;
var randomLetter =null;

var reset = function() {
        guesses =10;
        guessArray=["          "];
}

var printIt = function() {
        document.getElementById("html").innerHTML =
                "<p>Total Wins: " + wins + "</p>" +
                "<p>Total Losses: " + losses + "</p>" +
                "<p>Guesses so far: " + guessArray + "</p>" +
                "<p>Remaining Guesses: " + guesses + "</p>";
}

var newletter =function(){
randomLetter= alphabet[(Math.floor(Math.random()*alphabet.length))];}


newletter();

document.onkeyup = function(event) {
    userGuess = event.key;
    guessArray[10-guesses]=userGuess;
    guesses--;
    printIt();

if (guesses <= 0){
    losses++;
    reset();
    printIt();
    newletter();
}

    else if (randomLetter===userGuess){
        wins++;
        reset();
        newletter();
        printIt();

    }
        else {
// else do nothing except restart by obtaining a new guess

    }
};
