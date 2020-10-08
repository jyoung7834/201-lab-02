'use strict'

// var visitor = prompt('Welcome! My name is Jacque.  What is your name?');
// console.log('Hi ' + visitor);


var visitorName = prompt('Welcome! My name is Jacque.  What is your name?');
// console.log('Thanks for stopping by' + visitorName);
alert('Thanks for stopping by ' + visitorName)
document.write('Thanks for stopping by ' + visitorName);



var score = 0;

// Question 1
var local = prompt('Do you think I am originally from Washington?').toLowerCase();
if (local === 'yes' || local === 'y ') {
    // console.log('No, I\'m actually from Cali');
    alert('No, I\'m actually from California.')
} else if (local === 'no' || local ==='n') {
    alert('You are correct! I am from California.');
    score++;
}

// Question 2
var hobbie = prompt('Do I like painting?').toLowerCase();
if (hobbie === 'yes' || hobbie === 'y') {
    // console.log('No, I actually LOVE painting');
    alert('No because, I actually L.O.V.E. painting!!!')
} else if (hobbie === 'no' || 'n') {
    alert('You are correct, because I LOVE to paint!!!');
    score++;
}

// Question 3
var pets = prompt('Do I have a cat?').toLowerCase
    ()
if (pets === 'yes' || pets === 'y') {
    // console.log('No, I actually have a dog name Sherman');
    alert('No, I actually have a dog and his name is Sherman.')
} else if (pets === 'no' || 'n') {
    alert('You are correct.  I\'m allergic to cats, I have a dog name Sherman.');
    score++;
}

// Question 4
var kids = prompt('Do I have kids?').toLowerCase
    ()
if (kids === 'yes' || kids === 'y') {
    // console.log('Yes, I have 2');
    alert('Yes, I have 2, my daughter Sydney and my son named Trey')
} else if (kids === 'no' || 'n') {
    alert('You are correct because, they aren\'t kids, they are actually young adults. ');
    score++;
}

// Question 5
var married = prompt('Am I married?').toLowerCase
    ()
if (married === 'yes' || married === 'y') {
    // console.log('Yes and his name is Jack.  HA! Jacq & Jack');
    alert('Yes, and my husband\'s name is Jack.  HA! Jack & Jacque!');
    score++;
} else if (married === 'no' || 'n') {
    alert('I actually have been married for 25 years.')
}

// Question 6

var tries = 0;
var shermanAge = 8;

while (tries < 3 ) {
    var guessGame = parseInt(prompt('Can you guess the age of my dog Sherman?'));
    

    // If user guesses correctly 
    if (guessGame === shermanAge) {
        alert(`You are correct ${visitorName}!`);
        score++;
        break;
    // If user guesses too high
    } else if (guessGame > shermanAge) {
        alert(`Well, not quite ${visitorName}, that guess is too high!`);
        tries++
    // If user guesses too low    
    } else if (guessGame < 8) {
        alert(`Sorry ${visitorName}, that is too low`);
        tries++
    // catch all 
    } else {
        alert('invalid response');
    } 

    if (tries === 3 && guessGame !== shermanAge) {
        alert("Sorry, you lose. The correct answer is 8.")
    }
}     

var guesses = 6;
var guessesCorrect = false;
var rightAnswer = ['apples', 'pineapple', 'kiwi', 'dragonfruit', 'mango'];
var guessFav = prompt('Can you guess my favorite fruit?');

while (guesses > 0 && !guessesCorrect) {
    guesses--;

    for (var i = 0; i < rightAnswer.length; i++) {
        if (rightAnswer[i] === guessFav) {
            guessesCorrect = true;
            alert(`That is correct, I like ${guessFav}`);
            score++;
        }
    }
    if (guesses > 0 && !guessesCorrect) {
        guessFav = prompt(`No, I don't like ${guessFav}, guess again.`)
    }
    if (guesses === 0 && !guessesCorrect) {
        alert(`Sorry, you lose, the correct answers are: ${rightAnswer}`);
    }
}

alert(`you scored ${score}/7`)