'use strict'

// var visitor = prompt('Welcome! My name is Jacque.  What is your name?');
// console.log('Hi ' + visitor);

function visitor() {
    var visitorName = prompt('Welcome! My name is Jacque.  What is your name?');
    // console.log('Thanks for stopping by' + visitorName);
    alert('Thanks for stopping by ' + visitorName)
    document.write('Thanks for stopping by ' + visitorName);
}

visitor();

var score = 0;

// Question 1
var local = prompt('Do you think I am originally from Washington?').toLowerCase();
if (local === 'yes' || local === 'y ') {
    // console.log('No, I\'m actually from Cali');
    alert('No, I\'m actually from California.')
} else if (local === 'No' || 'N') {
    alert('You are correct! I am from California.');
    score++;
}

// Question 2
var hobbie = prompt('Do I like painting?').toLowerCase();
if (hobbie === 'yes' || hobbie === 'y') {
    // console.log('No, I actually LOVE painting');
    alert('No because, I actually L.O.V.E. painting!!!')
} else if (hobbie === 'No' || 'N') {
    alert('You are correct, because I LOVE to paint!!!');
    score++;
}

// Question 3
var pets = prompt('Do I have a cat?').toLowerCase
    ()
if (pets === 'yes' || pets === 'y') {
    // console.log('No, I actually have a dog name Sherman');
    alert('No, I actually have a dog and his name is Sherman.')
} else if (pets === 'No' || 'N') {
    alert('You are correct.  I\'m allergic to cats, I have a dog name Sherman.');
    score++;
}

// Question 4
var kids = prompt('Do I have kids?').toLowerCase
    ()
if (kids === 'yes' || kids === 'y') {
    // console.log('Yes, I have 2');
    alert('Yes, I have 2, my daughter Sydney and my son named Trey')
} else if (hobbie === 'No' || 'N') {
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
} else if (married === 'No' || 'N') {
    alert('I actually have been married for 25 years.')
}

//Question 6

var tries = 0
var numberOftries = 4
var rightAnswer = false;

while (tries < 3 && !rightAnswer){
    var guessGame = prompt('Can you guess the age of my dog Sherman?  I will give you 4 tries')

    if(guessGame < 8){
        alert('Try again' `${visitorName}`, + 'that guess to too low.');
     } else if (guessGame > 8) {
        alert('Well, not quite' `${visitorName}`, + 'that guess is too high!');
     } else if (guessGame === 8){
         alert('Fantastic' `${visitorName}`, + 'that is correct!');
         rightAnswer = true;
     }
     }
