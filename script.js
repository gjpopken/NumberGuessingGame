let randomNumber = Math.floor(Math.random()*101);

console.log(randomNumber);


let guess_button = document.getElementById("guess_button");
console.log(guess_button);


guess_button.addEventListener('click', checkAnswer);



function checkAnswer() {
    let theGuess = document.getElementById('the_guess').value;
    if (theGuess.value === randomNumber) {
        console.log('You win!');
    } else if (theGuess.value > randomNumber) {
        console.log('too high');
        theGuess.value = '';
    } else if (theGuess.value < randomNumber) {
        console.log('too low');
        theGuess.value = '';
    } else {
        console.log('Invalid answer')
        theGuess.value = '';
    }
}