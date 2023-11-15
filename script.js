let randomNumber = Math.floor(Math.random()*101);
let attempts = 0;

//console.log(randomNumber);


let guess_button = document.getElementById("guess_button");
guess_button.addEventListener('click', checkAnswer);
/*guess_button.addEventListener('keypress', function(event) {
    if (event.key === 'Enter' || event.key === 'Return'){
        //checkAnswer();
        event.preventDefault();
        document.getElementById("guess_button").click();
    }
});*/



function checkAnswer() {
    let theGuess = document.getElementById('the_guess').value;
    //console.log(theGuess);
    if (theGuess == randomNumber) {
        console.log('You win!\nNumber of attempts:', attempts);
        attempts++;
        const congrats = 'Congrats! You win! \nAttempts: ' + attempts;
        document.getElementById('response').innerHTML = congrats;
    } else if (theGuess > randomNumber) {
        console.log('too high');
        document.getElementById('the_guess').value = '';
        attempts++;
        document.getElementById('response').innerHTML = 'Too high!';
    } else if (theGuess < randomNumber && theGuess !== '') {
        console.log('too low');
        document.getElementById('the_guess').value = '';
        attempts++;
        document.getElementById('response').innerHTML = 'Too low!';
    } else {
        console.log('Invalid answer')
        document.getElementById('the_guess').value = '';
        document.getElementById('response').innerHTML = 'Invalid Answer!';
    }

}