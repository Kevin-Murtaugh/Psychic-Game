var alphabet=["abcdefghijklmnopqrstuvwxyz"];
alphabet= alphabet[0].split("");

var guessArray=["          "];

var wins= 0; 
var losses = 0;
var guesses = 10;
var randomLetter =null;



var newLetter =function(){
randomLetter= alphabet[(Math.floor(Math.random()*alphabet.length))]
console.log("newletter function: ", randomLetter);
}

newLetter();
document.onkeyup = function(event) {
 //   prompt("Please enter your guess here:");
    userGuess = event.key;
    guessArray[10-guesses]=userGuess;
    guesses--;
    console.log("inside",guesses, userGuess, guessArray);
    
    var fixit = "<p>Total Wins: " + wins + "</p>" +
            "<p>Total Losses: " + losses + "</p>" +
            "<p>Guesses so far: " + guessArray + "</p>" +
            "<p>Remaining Guesses: " + guesses + "</p>";   

if (guesses <= 0){
    losses++;
    guesses = 10;
    guessArray=["          "];
    console.log("guesses", guesses,"array", guessArray);
    newLetter();
    document.getElementById("html").innerHTML = fixit;
}

    else if (randomLetter===userGuess){
        wins++;
        guesses = 10; 
        guessArray=["          "];
        newLetter();
        document.getElementById("html").innerHTML = fixit;
    }
        else {

        document.getElementById("html").innerHTML = fixit; 

        // replace document.querySelector("#html").innerHTML = fixit;


    }
};
