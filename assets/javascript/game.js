//Letter Guess - JavaScrip & jQuery

// Globals
var guessCount = 10;
var wins = 0;
var playerGuess = [];
var losses = 0;
var computerGuess
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

$("#playAgain").hide();


// On page load establish framework
$(document).ready(function() {

    // Set score/tries
    $("#triesCard").text(guessCount);
    $("#winsCard").text(wins);
    $("#lossesCard").text(losses);

    // Turn off play button
    $("#play").addClass("disabled");

    // Computer chooses letter
    computerGuess = alphabet[Math.floor(Math.random() * 26)];
    console.log("Computer's choice: " + computerGuess);

});

var roundReset = function () {
    // Enable input
    $("#playerInput").prop('disabled', false);
    
    // Reset Guess Count
    guessCount = 10;
    $("#triesCard").text(guessCount);

    // Reset player guess array
    playerGuess = [];

    // New Computer Letter
    computerGuess = alphabet[Math.floor(Math.random() * 26)];
    console.log("Computer's choice: " + computerGuess);

    // Reset Guess Log
    $("#guessLog").html('<h1 class="badge badge-light">Letters Guessed:</h1>')

    // Set input field
    $("#playerInput").attr("placeholder", "Guess a letter")
}

// Run this when players try a guess
var tryAttempt = function () {
    guessCount--;
    $("#triesCard").text(guessCount);

    // Check if guess count is 0
    if (guessCount == 0) {
        losses++;
        $("#lossesCard").text(losses);
        playAgain();
    }
}

// Run this when players lose
var playAgain = function () {
    $("#play").hide();
    $("#playAgain").show();
    $("#playerInput").attr("placeholder", "You ran out of tries. The Computer's letter was " + computerGuess);
    $("#playerInput").prop('disabled', true);
}

var checkGuess = function () {
    if (playerGuess.indexOf(computerGuess) > -1) {
        $("#play").hide();
        $("#playAgain").show();
        $("#playerInput").attr("placeholder", "You guessed the Computer's letter!");
        $("#playerInput").prop('disabled', true);
        wins++;
        $("#winsCard").text(wins);
    } else {
        $("#playerInput").attr("placeholder", "Try again");
        // Deduct a try
        tryAttempt();
        $("#triesCard").text(guessCount);
    }}

// Play again button
$("#playAgain").on("click", function(){
    roundReset();
    $("#play").show();
    $("#playAgain").hide();
    console.log("reset");
})

// Run this when the player clicks Play button
$("#play").on("click", function() {
    
    // Check to see if a letter was entered
    if (alphabet.indexOf(playerInput.value.toLowerCase()) < 0 ) {
        alert("You must enter a letter.");
    } else if (playerGuess.indexOf(playerInput.value.toLowerCase()) > -1 ) {
        alert("You have already guessed " + playerInput.value.toLowerCase());
    } else {
        // Store the player's guesses in an array
        playerGuess.push(playerInput.value.toLowerCase());
        // Append the guessed letters div
        $("#guessLog").append('<h1 class="badge badge-light">' + playerGuess[10-guessCount] + '</h1>');
        // Check the guess
        checkGuess();
    }
    
    // Turn off Play button
    $("#play").addClass("disabled");

    // Clear input
    playerInput.value = "";

    // Print player guess
    console.log(playerGuess);
})

// Run this when the player enters a letter in the input
playerInput.oninput = function(){
    // Turn play button back on
    $("#play").removeClass("disabled");
};