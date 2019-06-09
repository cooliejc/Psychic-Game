//Psychic Guess - JavaScrip & jQuery

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


$("#generateGuess").on("click", function() {
    $(this).addClass("disabled");
    var computerGuess = alphabet[Math.floor(Math.random() * 26)];
    console.log(computerGuess);
})
