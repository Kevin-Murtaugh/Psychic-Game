var alphabet=["abcdefghijklmnopqrstuvwxyz"];
alphabet= alphabet[0].split("");

var guessArray=["          "];

var wins= 0; 
var losses = 0;
var guesses = 10;
var randomLetter =null;



var newletter =function(){
randomLetter= alphabet[(Math.floor(Math.random()*alphabet.length))];
}

newletter();
document.onkeyup = function(event) {
    prompt("Please enter your guess here:");
    var userGuess = event.key;
    var fixit = "<p>Total Wins: " + wins + "</p>" +
            "<p>Total Losses: " + losses + "</p>" +
            "<p>Guesses so far: " + guessArray + "</p>" +
            "<p>Remaining Guesses: " + guesses + "</p>";   

if (guesses <= 0){
    losses++;
    guesses = 10;
    guessArray=["          "];
    newletter();


    else if (randomLetter===userGuess){
        wins++;
        guesses = 10; 
        guessArray=["          "];
        newletter();
        document.getElementById("html").innerHTML = fixit;
    }
        else {
        guesses--;
        guessArray[9-guesses]=userGuess;
        // replace document.querySelector("#html").innerHTML = fixit;

        document.getElementById("html").innerHTML = fixit;

    }
};
