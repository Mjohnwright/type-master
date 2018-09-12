window.addEventListener('load', init);

// Global Variables

// Available levels
const levels= {
    easy: 5,
    medium: 3,
    hard: 2
}

// To change levels
const currentLevel = levels.easy;


let time = currentLevel;
let score = 0;
let isPlaying;

// DOM elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconde = document.querySelector('#seconds');

const words = [
    'hello',
    'name',
    'juicy',
    'adjourn',
    'finally',
    'hazard',
    'regular',
    'limousine',
    'symbol',
    'stamina',
    'cantaloupe',
    'pageant',
    'accuse',
    'antisocial',
    'adapt',
    'pedometer',
    'judgment',
    'concur',
    'concede',
    'privilege',
    'annihilate',
    'reverberate',
    'influence',
    'turquoise',
        
];

// Initialize game
function init() {
    // Show number of seconds in UI
    seconds.innerHTML = currentLevel;
    // Load word from array
    showWord(words);
    // Start matching on word input
    wordInput.addEventListener('input', startMatch);
    // Call countdown every second
    setInterval(countdown, 1000);
    // Check game status
    setInterval(checkStatus, 50);
};

// Start Match
function startMatch() {
    if(matchWords()) {
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = '';
        score ++;
    }

    // if score is -1 display -
    if (score === -1) {
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score;
    }
};

// Matched current word with input
function matchWords() {
    if (wordInput.value === currentWord.innerHTML) {
        message.innerHTML = 'Correct!!!';
        return true;
    } else {
        message.innerHTML = '';
        return false;
    }
}


// Pick random word
function showWord(words) {
    // Generate random array index
    const randIndex = Math.floor(Math.random() * words.length);
    // Output random word
    currentWord.innerHTML = words[randIndex];
}

// Countdown timer
function countdown() {
    // Make sure time is not run out
    if( time > 0 ){
        // Decrement time
        time--

    } else if (time === 0) {
        //Game is over
        isPlaying = false;
        //startMatch();
    }
    // Show time
    timeDisplay.innerHTML = time;
};

// Check game status
function checkStatus() {
    if(!isPlaying && time === 0) {
        message.innerHTML = 'Game Over';
        score = -1;
    }
};