var randomNumber = Math.floor(Math.random() * 100) + 1, guessCount = 0, messages, message, userGuess;

function updateMessage(msg) {
    document.getElementById('message').textContent = msg;
}

document.getElementById('guessBtn').addEventListener('click', function() {
    userGuess = document.getElementById('guessInput').value;
    if (userGuess === '') return updateMessage("Please enter a number.");
    guessCount++;
    if (userGuess > randomNumber) {
        messages = ["Too high! Try a lower number.", "Your guess is too high! Go lower.", "You're aiming too high! Try a smaller number."];
        message = messages[Math.floor(Math.random() * messages.length)];
        updateMessage(message + " Guesses so far: " + guessCount);
    } else if (userGuess < randomNumber) {
        messages = ["Too low! Try a higher number.", "Your guess is too low! Go higher.", "You're aiming too low! Try a bigger number."];
        message = messages[Math.floor(Math.random() * messages.length)];
        updateMessage(message + " Guesses so far: " + guessCount);
    } else {
        messages = ["Congratulations! You found the number in ", "Well done! You guessed the number in ", "Awesome job! You discovered the number in "];
        message = messages[Math.floor(Math.random() * messages.length)];
        updateMessage(message + guessCount + " guesses.");
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
    messages = ["Game reset. Guess a new number!", "The game has been reset. Time for a new guess!", "Reset successful. Can you guess the new number?"];
    message = messages[Math.floor(Math.random() * messages.length)];
    updateMessage(message);
    document.getElementById('guessBtn').disabled = false;
    this.disabled = true;
    this.classList.remove('enabled');
});
