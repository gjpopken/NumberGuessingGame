let randomNumber = Math.floor(Math.random()*101);
let attempts = 0;
console.log(randomNumber);

function checkAnswer(event) {
    event.preventDefault()
    let theGuess = document.getElementById('the_guess').value;
    //console.log(theGuess);
    if (theGuess == randomNumber) {
        //console.log('You win!\nNumber of attempts:', attempts, );
        const congrats = 
        `Congrats! You win! 
        Attempts: ${attempts}
        The secret number was: ${randomNumber}`;
        display(congrats)
    } else if (theGuess > randomNumber) {
        //console.log('too high');
        display('Too high!')
    } else if (theGuess < randomNumber && theGuess !== '') {
        //console.log('too low');
        display('Too low!')
    }

}


function display(message) {
    //console.log('inside display');
    document.getElementById('the_guess').value = ''
    document.getElementById('response').innerHTML = message
    attempts++
}