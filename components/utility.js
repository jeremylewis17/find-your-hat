const {Field} = require('./field.js');
const prompt = require('prompt-sync')({sigint: true});

let game;

function playCycle() {
    while(game.gameOver === false) {
        game.print();
        console.log('');
        const userInput = prompt("Which way?: ");
        handleDirection(userInput);
        game.checkGameOver();
    }
}

function setupGame() {
    console.log('\nWelcome to the "find your hat" game.\nThe goal of this game is to navigate to the hat (^) symbol.\nYou begin your journey at the star (*)');
    console.log('');
    const gameHeight = prompt('Please select the height of your game board (enter a number greater than 1): ');
    console.log('');
    const gameWidth = prompt('Please select the width of your game board (enter a number greater than 1): ');
    console.log('');
    const difficulty = prompt('Please select the difficulty of your game board (easy, medium, or hard): ');
    game = new Field(Field.generateField(gameWidth, gameHeight, difficulty));
    console.log('\nGood luck and have fun!\n');
}

function checkWinLoss() {
    if (game.gameWon === true){
        console.log(`Congratulations, you won!`)
    } else {
        console.log(`Game Over. You Lost :(`)
    }
}

function handleDirection(input) {
    switch (input){
        //Left Key
        case "l": {
            game.posHorizontal -= 1;
            break;
        }
        //Up Key
        case "u": {
            game.posVertical -= 1;
            break;
        }
        //Right Key
        case "r": {
            game.posHorizontal += 1;
            break;
        }
        //Down Key
        case "d": {
            game.posVertical += 1;
            break;
        }
        default: {
            console.log("Try again, please type u,d,l,r (up, down, left, or right)")
        }
    }
};

module.exports = {handleDirection, playCycle, setupGame, checkWinLoss};