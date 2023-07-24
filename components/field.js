
const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

const addFieldElement = (difficulty) => {
    const chosenElement = Math.random();
    switch (difficulty){
        case 'easy': {
            if (chosenElement > 0.1){
                return fieldCharacter;
            } else return hole;
        }
        case 'medium': {
            if (chosenElement > 0.25){
                return fieldCharacter;
            } else return hole;
        }
        case 'hard': {
            if (chosenElement > 0.4){
                return fieldCharacter;
            } else return hole;
        }
        default:{
            if (chosenElement > 0.2){
                return fieldCharacter;
            }   else return hole;
        }
}
};


class Field {
    constructor(fieldArray){
        this._board = fieldArray;
        this._posVertical = 0;
        this._posHorizontal = 0;
        this._gameOver = false;
        this._gameWon = false;
    }

    //GETTERS
    get board() {
        return this._board;
    }
    get posVertical() {
        return this._posVertical;
    }
    get posHorizontal() {
        return this._posHorizontal;
    }
    get gameOver() {
        return this._gameOver;
    }
    get gameWon() {
        return this._gameWon;
    }

    //SETTERS
    set board(n) {
        this._board = n;
    }
    set posVertical(n) {
        this._posVertical = n;
    }
    set posHorizontal(n) {
        this._posHorizontal = n;
    }
    set gameOver(val) {
        this._gameOver = val;
    }
    set gameWon(val) {
        this._gameWon = val;
    }

    //METHODS
    print() {
        for (let i = 0; i<this._board.length; i++ ){
            console.log(`${this._board[i].join('')}`)
        }
    }

    handleDirection(input) {
        switch (input){
            //Left Key
            case "l": {
                this.posHorizontal -= 1;
                break;
            }
            //Up Key
            case "u": {
                this.posVertical -= 1;
                break;
            }
            //Right Key
            case "r": {
                this.posHorizontal += 1;
                break;
            }
            //Down Key
            case "d": {
                this.posVertical += 1;
                break;
            }
            default: {
                console.log("Try again, please type u,d,l,r (up, down, left, or right)")
            }
        }
    };

    checkGameOver() {
        if (this.posVertical < 0 || this.posVertical > this.board.length){
            this.gameOver = true;
        } else if (this.posHorizontal < 0 || this.posHorizontal > this.board[this.posVertical].length){
            this.gameOver = true;
        } else {
            const playerPosition = this.board[this.posVertical][this.posHorizontal];

            switch (playerPosition){
                case '^':{
                    this.gameOver = true;
                    this.gameWon = true;
                    break;
                }
                case 'O':{
                    this.gameOver = true;
                    break;
                }
                case '░':{
                    this.board[this.posVertical][this.posHorizontal] = '*';
                    break;
                }
            }
        }
    };

    static generateField (width, height, difficulty) {
        let hatWidth = 0;
        let hatHeight = 0;
        while(hatWidth === 0 && hatHeight === 0){
            hatWidth = Math.floor(Math.random() * width);
            hatHeight = Math.floor(Math.random() * height);
        };
        let newField = [];
        for(let i=0; i < height; i++){
            const newRow = [];
            for(let j=0; j < width; j++){
                newRow.push(addFieldElement(difficulty));
            }
            newField.push(newRow);
        }
        newField[0][0] = pathCharacter;
        newField[hatHeight][hatWidth] = hat;
        return newField;
    }
}


module.exports = {Field};