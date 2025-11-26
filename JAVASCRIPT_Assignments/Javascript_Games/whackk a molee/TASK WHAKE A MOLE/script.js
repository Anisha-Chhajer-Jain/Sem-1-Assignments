const scoreDisplay = document.querySelector('#score');
const timeLeftDisplay = document.querySelector('#timeLeft')
const maxSocreDisplay = document.querySelector('#maxScore')
const startBtn = document.querySelector('#startBtn')
const resetBtn = document.querySelector('#resetBtn')
const pauseBtn = document.querySelector('#pauseBtn')
const holes = document.querySelectorAll('.hole')
console.log(holes)
const moles = document.querySelectorAll('.mole')

var score = 0;
var time = 30;
var bestScore = 0;
var playGame = false;
var gameId = null;

function onLoad(){
    var temp = localStorage.getItem('highScoreGame')
    if (temp != null){
        bestScore = temp;
    }
    else{
        bestScore = 0;
    }
}

function displayContent(){
    scoreDisplay.textContent = score;
    timeLeftDisplay.textContent = time;
    maxSocreDisplay.textContent = bestScore;
}

function webLoad(){
    onLoad()
    displayContent()
}

webLoad()

function randomTimeGenerator(min,max){
    return Math.floor(Math.random()*(max-min)+max)
}

function randomIndex(){
    var index = Math.floor(Math.random()*holes.length)
    return holes[index]
}

function popImageGame(){
     //TASK-4-Increase speed when time < 10
    let minTime = time < 10 ? 280 : 500;
    let maxTime = time < 10 ? 600 : 1500;

    var randomTime = randomTimeGenerator(500 , 1500)
    var hole = randomIndex()
    var mole = hole.querySelector('.mole')
    if (playGame){
    mole.classList.add('up')
    setTimeout(function(){
        mole.classList.remove('up')
        popImageGame()
    },randomTime)
}
}

function endGame(){
    clearInterval(gameId)
    playGame = false;

    //TASK-3-Start button becomes “Play Again”
    startBtn.innerText = "Play Again";

    if (score>bestScore){
        bestScore = score;
        localStorage.setItem('highScoreGame' , bestScore)

        //TASK-4-Glow effect for new record
        maxSocreDisplay.style.textShadow = "0 0 10px yellow";
        setTimeout(() => {
            maxSocreDisplay.style.textShadow = "none";
        }, 1000);

        alert(`you scored the highest yet! - ${score}`)
    }
    else{
        alert(`your score is ${score}`)
    }
    score = 0;
    displayContent()
    startBtn.disabled = false;
}

function startGame(){
    score =0 ;
    time = 30;
    playGame = true;
    startBtn.disabled = true

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
    //feature:1
    if (score > 50) {
        scoreDisplay.style.color = "gold";
    } else {
        scoreDisplay.style.color = "white";
    }

    //TASK-2-"Whack!" message
        messageBox.textContent = "Whack!"
        messageBox.style.opacity = "1"

    if (playGame==false){
        return;
    }
    if (event.target.classList.contains('up')){
        score++;
        event.target.classList.remove('up')
        event.target.classList.add('bonked')
    }
    setTimeout(function(){
        event.target.classList.remove('bonked')
    },300)
    displayContent()
}

function resetGame(){
    time = 0;
    bestScore =0;
    score =0 ;
    localStorage.clear()
    displayContent()
}

function pauseGame(){
    
}


startBtn.addEventListener('click',startGame)

resetBtn.addEventListener('click',resetGame)

pauseBtn.addEventListener('click',pauseGame)

moles.forEach((box)=> {
    box.addEventListener('click',bonk)
})