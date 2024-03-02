const result = document.getElementById('answer-section');
const letters = document.querySelectorAll('.letter');

const words = ['shawshankredemption', 'godfather', 'darknight', 'goodwillhunt', 'shutterisland',
 'lordoftherings', 'pulpfiction', 'fightclub', 'butterflyeffect', 'taxidriver'];
let word = ''
let dashesWord = '';

function startGame() {
    word = words[Math.floor(Math.random() * words.length)];
    for(let i = 0; i < word.length; i++){
        dashesWord += '-';
    }
    result.innerHTML = dashesWord;

    for (let i = 0; i < letters.length; i++) {
        letters[i].addEventListener('click', function(e) {
            console.log(e.target.textContent.toLowerCase());
        });
    }

    document.addEventListener('keydown', function(e) {
        const key = e.key.toLowerCase();
        if (key >= 'a' && key <= 'z') {
            console.log(key);
        }
    });
}

startGame();