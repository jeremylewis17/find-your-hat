const prompt = require('prompt-sync')({sigint: true});
const {Field} = require('./components/field.js');
const {handleDirection, playCycle, setupGame, checkWinLoss} = require('./components/utility.js');

//const readline = require('readline-sync');
let playAgain = true;


while(playAgain) {
    setupGame();
    playCycle();
    checkWinLoss();
    let validAnswer = false;
    while (!validAnswer){
        let another = prompt('Would you like to play again? (answer yes or no): ');
        if (another === 'no'){
            validAnswer = true;
            playAgain = false;
            console.log('\nOkay, have a great rest of your day :)');
        } else if (another === 'yes'){
            validAnswer = true;
            playAgain = true;
        } else {
            console.log('That was not a valid answer.')
        }
    }
}
