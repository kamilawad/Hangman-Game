const result = document.getElementById('answer-section');

const words = ['shawshankredemption', 'godfather', 'darknight', 'goodwillhunt', 'shutterisland', 'lordoftherings', 'pulpfiction', 'fightclub', 'butterflyeffect', 'taxidriver'];
let word = ''
let dashesWord = '';

function startGame() {
    word = words[Math.floor(Math.random() * words.length)];
    for(let i = 0; i < word.length; i++){
        dashesWord += '-';
    }
    result.innerHTML = dashesWord;
}

startGame();