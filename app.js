//psychic game javascript

//declare & initialize all variables
var alphabet=["abcdefghijklmnopqrstuvwxyz"];
alphabet= alphabet[0].split("");

var guessArray=["          "];

var wins= 0; 
var losses = 0;
var guesses = 10;
var randomLetter =null;

//reduce redundant code by creating functions
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

//key press triggers the game
//in the real world, this function would require extra steps to sanitize the code (i.e., make sure it' a letter, a lower-case letter, non-duplicate to earlier guesses, etc.
//however, sine there was no such requirement in the directions, we will leave these enhancements for another day
document.onkeyup = function(event) {
    userGuess = event.key;
    guessArray[10-guesses]=userGuess;
    guesses--;
    printIt();

//if all guesses used, updates stats & restart
if (guesses <= 0){
    losses++;
    reset();
    printIt();
    newletter();
}
// if match update stats, get a new random letter
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
