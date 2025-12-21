
// //DOM 
// const scoreDisplay = document.querySelector('#score');
// const timeLeftDisplay = document.querySelector('#timeLeft');
// const maxScoreDisplay = document.querySelector('#maxScore');
// const startBtn = document.querySelector('#startBtn');
// const holes = document.querySelectorAll('.hole');
// console.log(holes);
// const moles = document.querySelectorAll('.mole');

// // const bgaudio = new Audio('https://res.cloudinary.com/dq7hb3fah/video/upload/v1762771833/Aadat_Se_Majboor_Ladies_Vs_Ricky_Bahl_128_Kbps_lylupu.mp3')
// // const bg2 = new Audio('https://res.cloudinary.com/dq7hb3fah/video/upload/v1762771943/7_crore_meme_sound_kbc_bcg0mg.mp3')

// // Required variable
// var score = 0;
// var time = 30;
// var bestScore = 0;
// var playGame = false;     //To give single to user to start the game
// var gameId = null;


// function webLoad(){
//   onLoad();
//   displayContent();
// }


// //Step-2.  1.phase load the entire data
// function onLoad(){
//   var temp = localStorage.getItem('highscore');
//   if (temp != null){
//     bestScore = temp;
//   }
//   else{
//     bestScore = 0;
//   }
// }

// //Step-2 2. Reflecting the actual vale in the i=required html element using textContent

// function displayContent(){
//   scoreDisplay.textContent = score;
//   timeLeftDisplay.textContent = time;
//   maxScoreDisplay.textContent = bestScore;
// }

// //Calling webload function here

// webLoad();

// //Raandom time generator implementation
// function randomTimeGenerator(min, max){
//   return Math.floor(Math.random()*(max-min)+max);
// }

// //Random INdex funtion here
// function randomIndex(){
//   var index = Math.floor(Math.random()*holes.length);
//   return holes[index];
// }
// //pop game implementation for image appear and disapear purpose
// function popImageGame(){
//   var randomTime = randomTimeGenerator(500,1500);
//   var hole = randomIndex();
//   var mole = hole.querySelector('.mole');
//   if(playGame){
//   mole.classList.add('up');
//   setTimeout(function(){
//     mole.classList.remove('up')
//     popImageGame()
//   },randomTime);
// }
// }

// //endgame implementaion
// function endGame(){
//     // playGame=false;
//     clearInterval(gameId);

//     // Change Start button text to "Play Again"
//     startButton.innerText = "Play Again";

//     // bgaudio.pause();
//     // bg2.play();
//     if(score>bestScore){
//         bestScore=score;
//         localStorage.setItem('highScoreGame',bestScore);
//         alert(`your score is higher tahn the previous one : ${score}`);
//     }
//     else if(score>50){
//       document.body.style.color = 'gold';
//     }
//     else{
//         alert(`your score is: ${score}`)
//     }
//     score=0;
//     displayContent();
//     startBtn.disabled=false;
// }

// //ACTUAL IMPLEMENTATION OF START GAME FUNCTION
// function startGame(){
//     score=0;
//     time=30;
//     // bgaudio.play();
//   startBtn.disabled = true;
//   playGame=true;

//   popImageGame();
//   //disabled -> true which means button is disabled...
//   gameId = setInterval(function(){
//     time--;
//     if (time == 0){
//     //   clearInterval(gameId);
//       //This method is used only top stop the setinterval at some condition
//       endGame();
//     }
//     displayContent();
//   }, 1000);
// }

// function resetGame() {
//   clearInterval(gameId);
//   playGame = false;
//   paused = false;
//   score = 0;
//   time = 30;
//   displayContent();
//   startBtn.disabled = false;
//   pauseBtn.textContent = 'Pause';
// }


// function bonk(event){
//     if(playGame==false) return;
//     if(event.target.classList.contains('up')){
//         score++;
//         event.target.classList.remove('up');
//         event.target.classList.add('bonked');
//     }
//     setTimeout(function(){
//         event.target.classList.remove('bonked');
//     },300);
//     displayContent();
// }

// //ADD EVENT LISTNER PART:
// startBtn.addEventListener('click', startGame);
// pauseBtn.addEventListener('click', pauseGame);
// resetBtn.addEventListener('click', resetGame);
// //this is just a normal loop use to apply the add event listener in each mole class element
// moles.forEach((box)=>{
//     box.addEventListener('click',bonk);

// })






    
  




























// // function resetGame() {
// //     high = 0;
// //     localStorage.setItem('highScore', high);    //update the value of high 
// //     timer1 = 10; 
// //     flag = false;
// //     current = 0;
// //     clickButton.disabled = true; 
// //     clearInterval(timeId);
// //     displayContent();
// //     statusMsg("Game has been reset, click Start to play again!");
// // }


// // function pauseGame() {
// //     if (flag) 
// //         flag=false;
// //         clearInterval(timerId);
// //         statusMsg("Game paused. Click Pause again to resume.");
// //         clickButton.disabled = true;
// //         //pauseButtonButton.disabled = true;
// //         resumeButton.disabled=false;
// // }







































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
    if (score>bestScore){
        bestScore = score;
        localStorage.setItem('highScoreGame' , bestScore)
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