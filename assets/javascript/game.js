//Letter Guess - JavaScrip & jQuery

// Globals
var guessCount = 10;
var wins = 0;
var playerGuess = [];
var losses = 0;
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


// On page load establish framework
$(document).ready(function() {
    $("#triesCard").text(guessCount);
    $("#winsCard").text(wins);
    $("#lossesCard").text(losses);
    $("#play").addClass("disabled");
    var computerGuess = alphabet[Math.floor(Math.random() * 26)];
    console.log(computerGuess);
});


// Run this when the player clicks Play button
$("#play").on("click", function() {
    // Store the player's guesses in an array
    playerGuess.push(playerInput.value);

    //Append the guessed letters div
    $("#guessLog").append('<h1 class="badge badge-light">' + playerGuess[10-guessCount] + '</div>');
    
    // Reset input field
    playerInput.value = "";
 
    // Deduct a try
    guessCount = --guessCount;
    $("#triesCard").text(guessCount);

    // Turn off Play button
    $("#play").addClass("disabled");

    // Print player guess
    console.log(playerGuess);
})


// Run this when the player enters a letter in the input
playerInput.oninput = function(){
    // Turn play button back on
    $("#play").removeClass("disabled");
};