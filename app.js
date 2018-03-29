var alphabet=["abcdefghijklmnopqrstuvwxyz"];
alphabet= alphabet[0].split("");

var guessArray=["          "];
// alphabet= alphabet[0].split("");

var wins= 0; 
var losses = 0;
var guesses = 10;
var randomLetter =null;

var newletter =function(){
randomLetter= alphabet[(Math.floor(Math.random()*alphabet.length))];
console.log(randomLetter);}

newletter();
console.log("one-time execution?")
fixit = "<p>Total Wins: " + wins + "</p>" +
        "<p>Total Losses: " + losses + "</p>" +
        "<p>Guesses so far: " + guessArray + "</p>" +
        "<p>Remaining Guesses: " + guesses + "</p>";

document.onkeyup = function(event) {
    userGuess = event.key;
    guessArray[10-guesses]=userGuess;
    guesses--;
    document.getElementById("html").innerHTML =
                "<p>Total Wins: " + wins + "</p>" +
                "<p>Total Losses: " + losses + "</p>" +
                "<p>Guesses so far: " + guessArray + "</p>" +
                "<p>Remaining Guesses: " + guesses + "</p>";
//     fixit = "<p>Total Wins: " + wins + "</p>" +
//             "<p>Total Losses: " + losses + "</p>" +
//             "<p>Guesses so far: " + guessArray + "</p>" +
//             "<p>Remaining Guesses: " + guesses + "</p>";   

if (guesses <= 0){
    console.log("guesses<=0");
    losses++;
    guesses = 10;
    guessArray=["          "];
    document.getElementById("html").innerHTML =
                "<p>Total Wins: " + wins + "</p>" +
                "<p>Total Losses: " + losses + "</p>" +
                "<p>Guesses so far: " + guessArray + "</p>" +
                "<p>Remaining Guesses: " + guesses + "</p>";
    newletter();
    console.log("increase losses",losses,"reset",guesses);
    console.log("raw",wins, losses, guesses);
}

    else if (randomLetter===userGuess){
        wins++;
        guesses = 10; 
        guessArray=["          "];
        newletter();
//        document.getElementById("html").innerHTML = fixit;
        document.getElementById("html").innerHTML =
                "<p>Total Wins: " + wins + "</p>" +
                "<p>Total Losses: " + losses + "</p>" +
                "<p>Guesses so far: " + guessArray + "</p>" +
                "<p>Remaining Guesses: " + guesses + "</p>";
        console.log(html);
        console.log("raw", wins, losses, guesses);
        console.log("increase", wins, "reset", guesses);  
    }
        else {
//        guesses--;
//        guessArray[9-guesses]=userGuess;
        // document.querySelector("#html").innerHTML = fixit;
 //       console.log(html);
 //       document.getElementById("html").innerHTML = fixit;
 //       console.log(html);
        console.log("raw wins",wins,"losses", losses,"guesses", guesses);
 //       console.log("decrement guesses", guesses);
    }
};
