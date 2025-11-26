const scoreDisplay = document.querySelector('#score');
const timeLeftDisplay = document.querySelector('#timeLeft')
const maxSocreDisplay = document.querySelector('#maxScore')
const startBtn = document.querySelector('#startBtn')
const resetBtn = document.querySelector('#resetBtn')
const pauseBtn = document.querySelector('#pauseBtn')
const holes = document.querySelectorAll('.hole')
console.log(holes)
const moles = document.querySelectorAll('.mole')

const hitDisplay = document.querySelector('#hits')
const lastScoreDisplay = document.querySelector('#lastScore')
const fastestHitDisplay = document.querySelector('#fastestHit')
const messageBox = document.querySelector('#message')


var score = 0;
var time = 30;
var bestScore = 0;
var playGame = false;
var gameId = null;

var hits = 0;
var moleStartTime = null;

function onLoad(){
    let temp = localStorage.getItem('highScoreGame')
    bestScore = temp ? temp : 0;

    let last = sessionStorage.getItem('lastScore')
    lastScoreDisplay.textContent = last ? `Last game: ${last}` : "Last game: --"

    let fastest = sessionStorage.getItem('fastestHit')
    fastestHitDisplay.textContent = fastest ? `Fastest: ${fastest}ms` : "Fastest: --"
}

function displayContent(){
    scoreDisplay.textContent = score;
    timeLeftDisplay.textContent = time;
    maxSocreDisplay.textContent = bestScore;
    hitDisplay.textContent = `Hits: ${hits}`;

    // 1. Score turns gold when > 50
    if (score > 50) {
        scoreDisplay.style.color = "gold";
    } else {
        scoreDisplay.style.color = "white";
    }
}

function webLoad(){
    onLoad()
    displayContent()
}

webLoad()

function randomTimeGenerator(min,max){
    return Math.floor(Math.random()*(max-min)+min)
}

function randomIndex(){
    var index = Math.floor(Math.random()*holes.length)
    return holes[index]
}

function popImageGame(){
    // 4. Increase speed when time < 10
    let minTime = time < 10 ? 280 : 500;
    let maxTime = time < 10 ? 600 : 1500;

    var randomTime = randomTimeGenerator(minTime, maxTime)
    var hole = randomIndex()
    var mole = hole.querySelector('.mole')

    if (playGame){
        mole.classList.add('up')
        moleStartTime = Date.now(); // For fastest hit

        setTimeout(function(){
            mole.classList.remove('up')
            popImageGame()
        },randomTime)
    }
}

function endGame(){
    clearInterval(gameId)
    playGame = false;

    // 3. Start button becomes “Play Again”
    startBtn.innerText = "Play Again";

    // Save last game score
    sessionStorage.setItem('lastScore', score)
    lastScoreDisplay.textContent = `Last game: ${score}`

    if (score > bestScore){
        bestScore = score;
        localStorage.setItem('highScoreGame', bestScore)

        // 6. Glow effect for new record
        maxSocreDisplay.style.textShadow = "0 0 10px yellow";
        setTimeout(() => {
            maxSocreDisplay.style.textShadow = "none";
        }, 1000);

        alert(`You scored the highest yet! - ${score}`)
    }
    else{
        alert(`Your score is ${score}`)
    }

    score = 0;
    hits = 0;
    displayContent()
    startBtn.disabled = false;
}

function startGame(){
    score = 0;
    hits = 0;
    time = 30;
    playGame = true;

    startBtn.disabled = true
    startBtn.innerText = "Playing..."

    // Clear last game score for new session
    sessionStorage.removeItem('lastScore')
    lastScoreDisplay.textContent = "Last game: --"

    popImageGame()

    gameId = setInterval(function(){
        time--;
        if(time == 0){
            endGame()
        }
        displayContent()
    },1000)
}

function bonk(event){
    if (!playGame) return;

    if (event.target.classList.contains('up')){
        score++;
        hits++;

        // Hit time tracking
        let timeTaken = Date.now() - moleStartTime;
        let fastest = sessionStorage.getItem('fastestHit')

        if (!fastest || timeTaken < fastest) {
            sessionStorage.setItem('fastestHit', timeTaken)
            fastestHitDisplay.textContent = `Fastest: ${timeTaken}ms`
        }

        // 2. "Whack!" message
        messageBox.textContent = "Whack!"
        messageBox.style.opacity = "1"
        setTimeout(() => messageBox.style.opacity = "0", 250);

        event.target.classList.remove('up')
        event.target.classList.add('bonked')

        setTimeout(()=>{
            event.target.classList.remove('bonked')
        },300)
    }

    displayContent()
}

function resetGame(){
    time = 0;
    bestScore = 0;
    score = 0;
    hits = 0;

    localStorage.clear()
    sessionStorage.clear()

    lastScoreDisplay.textContent = "Last game: --"
    fastestHitDisplay.textContent = "Fastest: --"

    displayContent()
}

function pauseGame(){
    playGame = false;
    clearInterval(gameId)
    startBtn.innerText = "Resume"
    startBtn.disabled = false;
}

startBtn.addEventListener('click',startGame)
resetBtn.addEventListener('click',resetGame)
pauseBtn.addEventListener('click',pauseGame)

moles.forEach(mole => mole.addEventListener('click',bonk))
