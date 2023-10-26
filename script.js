var randomNumber = Math.floor(Math.random() * 100) + 1;
var guessCount = 0;

document.getElementById('guessBtn').addEventListener('click', function() {
    var userGuess = document.getElementById('guessInput').value;

    if (userGuess === '') {
        document.getElementById('message').textContent = "Please enter a number.";
        return;
    }

    guessCount++;
    
    if (userGuess > randomNumber) {
        var messages = ["Too high! Try a lower number.", "Your guess is too high! Go lower.", "You're aiming too high! Try a smaller number."];
        var message = messages[Math.floor(Math.random() * messages.length)];
        document.getElementById('message').textContent = message + " Guesses so far: " + guessCount;
    } else if (userGuess < randomNumber) {
        var messages = ["Too low! Try a higher number.", "Your guess is too low! Go higher.", "You're aiming too low! Try a bigger number."];
        var message = messages[Math.floor(Math.random() * messages.length)];
        document.getElementById('message').textContent = message + " Guesses so far: " + guessCount;
    } else {
        var messages = ["Congratulations! You found the number in ", "Well done! You guessed the number in ", "Awesome job! You discovered the number in "];
        var message = messages[Math.floor(Math.random() * messages.length)];
        document.getElementById('message').textContent = message + guessCount + " guesses.";
        document.getElementById('guessBtn').disabled = true;
        document.getElementById('resetBtn').disabled = false;
        document.getElementById('resetBtn').classList.add('enabled');
        document.getElementById('guessBtn').classList.remove('enabled');
    }

    document.getElementById('guessInput').value = '';
});

document.getElementById('resetBtn').addEventListener('click', function() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    guessCount = 0;

    var messages = ["Game reset. Guess a new number!", "The game has been reset. Time for a new guess!", "Reset successful. Can you guess the new number?"];
    var message = messages[Math.floor(Math.random() * messages.length)];
    
    document.getElementById('message').textContent = message;

    document.getElementById('guessBtn').disabled = false;
    this.disabled = true;
    this.classList.remove('enabled');
});