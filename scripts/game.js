const result = document.getElementById('answer-section');
const letters = document.querySelectorAll('.letter');
const hangImg = document.getElementById("hang");

const words = ['shawshankredemption', 'godfather', 'darknight', 'goodwillhunt', 'shutterisland',
 'lordoftherings', 'pulpfiction', 'fightclub', 'butterflyeffect', 'taxidriver'];
const hangParts = [head, body, leftHand, rightHand,leftLeg, rightLeg];
let word = '';
let dashesWord = [];
let nbFalseGuesses = 0;

function startGame() {
    word = words[Math.floor(Math.random() * words.length)];
    for(let i = 0; i < word.length; i++){
        dashesWord.push('-');
    }
    result.innerHTML = dashesWord.join('');

    for (let i = 0; i < letters.length; i++) {
        letters[i].addEventListener('click', letterClick);
    }

    document.addEventListener('keydown', keyClick);
}

function letterClick(e) {
    let found = false;
    for (let j = 0; j < word.length; j++) {
        if (e.target.textContent.toLowerCase() == word[j]) {
            dashesWord[j] = word[j];
            result.innerHTML = dashesWord.join('');
            found = true;
        }
    }
    if (!found) {
        hangParts[nbFalseGuesses]();
        nbFalseGuesses++;
    }
    setTimeout(isGameOver, 100);
}

function keyClick(e) {
    let key = e.key.toLowerCase();
    let found = false;
    if (key >= 'a' && key <= 'z') {
        for (let j = 0; j < word.length; j++) {
            if (key == word[j]) {
                dashesWord[j] = word[j];
                result.innerHTML = dashesWord.join('');
                found = true;
            }
        }
    }
    if (!found) {
        hangParts[nbFalseGuesses]();
        nbFalseGuesses++;
    }
    setTimeout(isGameOver, 100);
}

function isGameOver() {
    if (nbFalseGuesses == 6) {
        for (let i = 0; i < letters.length; i++) {
            letters[i].removeEventListener('click', letterClick);
            letters[i].addEventListener('click', letterClick);
        }
        nbFalseGuesses = 0;
        dashesWord = [];
        hangImg.innerHTML = '';
        alert('You lose!! The word was:' + word);
        startGame();
    }
    else if(dashesWord.join('') == word) {
        alert('YOU WON! The word was:' + word);
        nbFalseGuesses = 0;
        dashesWord = [];
        hangImg.innerHTML = '';
        for (let i = 0; i < letters.length; i++) {
            letters[i].removeEventListener('click', letterClick);
            letters[i].addEventListener('click', letterClick);
        }
        startGame();
    }
}

startGame();