'use strict';


// * Récupération des id
const again = document.querySelector(".again");
const message = document.querySelector('.verif');
const gameScore = document.querySelector('.score');
const win = document.querySelector('.result');
const body = document.querySelector('body');
let highScore = document.querySelector('.highscore'); 

let score = 20;
let initialHighScore = 0;

// //* Random number
let secretNumber = Math.trunc(Math.random() * 20 + 1);

console.log(secretNumber);

//* Fonction onclick 
// Ajout de la fonction onclick 
document.querySelector('.check').addEventListener('click', function () {
    // Conversion de l'input en number
    const guess = Number(document.querySelector('.input-guess').value);

    // Condition si ce n'est pas un chiffre
    if (!guess) {
        message.textContent = '🚫 NaN, try again';
        score--;
        gameScore.textContent = score;  

    // Quand le nombre est exact
    } else if (guess === secretNumber) {
        message.textContent = '🏆 You win';
        win.textContent = `${guess}`;
        body.style.backgroundColor = "green";
        win.style.width = '300px';
        
        // Garder le high score pour la partie d'après
        if(score > initialHighScore) {
            initialHighScore = score;
            highScore.textContent = initialHighScore;
        }
    
    // Si le nombre est plus petit
    } else if (guess < secretNumber) {
        // Condition pour ne pas aller en dessous de 0 
        if (score > 1) {
            message.textContent = '📉 To low';
            score--;
            gameScore.textContent = score;
        } else {
            message.textContent = '💥 Game over';
            gameScore.textContent = '0';
        }

    // Si le nombre est plus grand
    } else if (guess > secretNumber) {
        // Condition pour ne pas aller en dessous de 0 
        if (score > 1) {
        message.textContent = '📈 To high';
        score--;
        gameScore.textContent = score; 
        }else {
            message.textContent = '💥 Game over';
            gameScore.textContent = '0';
        }
    }

});


// * Boutton again, réinitialise toutes les valeurs sauf le High score
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    console.log(secretNumber);

    gameScore.textContent = score;
    message.textContent = 'Start guessing...';
    body.style.backgroundColor = "#222";
    win.textContent = '?';
    document.querySelector('.input-guess').value = '';
    win.style.width = '140px';
})