const dino = document.getElementById('dino')
const cactus = document.getElementById('cactus')
const startBtn = document.getElementById('start')
const scoreTxt = document.getElementById('score')
const board = document.querySelector('html')

cactus.classList.add('stop');

let isGameStarted = false;

let score = 0;


const updateScore = () => {
    scoreTxt.innerText = `Score ${score}`;
}


const jump = () => {
    if (!dino.classList.contains('jump')) {
        dino.classList.add('jump')
    }
    if (isGameStarted) {
        score += 100;
    }
}

const dinoJumpActions = () => {
    if (isGameStarted) {
        jump()
        setTimeout(() => dino.classList.remove('jump'), 500)
    }
}

board.addEventListener('click', (e) => {
    dinoJumpActions()
})

board.addEventListener('keyup', (event) => {
    if (isGameStarted && event.key === 'ArrowUp') dinoJumpActions()
})

board.addEventListener('keypress', (event) => {
    if (isGameStarted && event.keyCode === 32) dinoJumpActions()
})

const checkGameOver = () => {
    const dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'))
    const cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'))
    if (dinoTop >= 240 && cactusLeft > 30 && cactusLeft < 100) {
        alert(`Game over`)
        isGameStarted = false;
        cactus.classList.add('stop');
        score = 0;
    }
}

setInterval(() => {
    if (isGameStarted) {
        checkGameOver()
        updateScore()
    }


}, 10)

const startGame = (e) => {
    e.stopPropagation()
    cactus.classList.remove('stop')
    isGameStarted = true;
}


startBtn.addEventListener('click', startGame)


