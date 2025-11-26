// // var player=prompt("Enter your name");
// // console.log(player);


// var currentscore = document.querySelector('#currentscore')
// var highscore = document.querySelector('#highscore')
// var timer = document.querySelector('#timer')
// var clickButton = document.querySelector('#clickButton')
// var startButton = document.querySelector('#startButton')
// var statusMessage = document.querySelector('#statusMessage')

// var resetButton = document.querySelector('#resetButton');
// var pauseButton = document.querySelector('#pauseButton');
// var resumeButton = document.querySelector('#resumeButton');


// var current = 0;
// var high = 0;
// var timer1 = 10;
// var flag = false;
// var count=0;
// var timeId=null;

// function onWebsite(){
//     loadData();
//     displayContent();
// }

// function loadData(){
//     var temp = localStorage.getItem('highScore');
//     if(temp!= null){
//         high = temp;
//     }
//     else{
//         high = 0;
//     }
// }

// function displayContent(){
//     currentscore.textContent = current;
//     highscore.textContent = high;
//     timer.textContent = timer1;
// }

// function statusMsg(msg){
//     statusMessage.textContent = msg;
// }

// function endGame(){
//     clearInterval(timerId);
//     flag=false;
//     clickButton.disabled =true;   //if true=disabled & if false=work
//     if(current>high){
//         localStorage.setItem('highScore',current);
//         highscore.textContent = current;
//         statusMsg(`You scored high,New high score is ${current}`);
//     }
//     else if(current==high){
//         statusMsg(`Score is same!!!`);
//     }
//     else{
//         statusMsg(`Your current score is ${current}`);
//     }
// }

// function startGame(){
//     clickButton.disabled = false ;
//     flag = true;
//     timer1 =10 ;   //work till 10 to 0 and will not go to minus(-)
//     statusMsg("The game is Started..!!");
//     timerId = setInterval(function(){
//         timer1--;
//         if(timer1<=0){
//             endGame();
//         }
//         displayContent();
//     },1000)
// }

// function userClick(){
//      if(flag){
//         current++;
//         displayContent();
//      }
// }
// function resetGame() {
//     high = 0;
//     localStorage.setItem('highScore', high);
//     timer1 = 10; 
//     flag = false;
//     current = 0;
//     clickButton.disabled = true; 
//     clearInterval(timeId);
//     displayContent();
//     statusMsg("Game has been reset, click Start to play again!");
// }


// function pauseGame() {
//     if (flag) 
//         flag=false;
//         clearInterval(timerId);
//         statusMsg("Game paused. Click Pause again to resume.");
//         clickButton.disabled = true;
//         pauseButtonButton.disabled = true;
//         resumeButton.disabled=false;
// }

// function resumeGame() {
//     if (!flag) {
//         flag = true;
//         statusMsg("Game Resumed");
//         clickButton.disabled = false;
//         resumeButton.disabled = true;
//         pauseButton.disabled = false;   
//         timeId = setInterval(function () {
//             timer1--;
//             if (timer1 <= 0) {
//                 endGame();
//             }
//             displayContent()
//         },1000)
//     } }



// startButton.addEventListener('click', startGame);
// clickButton.addEventListener('click',userClick);
// resetButton.addEventListener('click',resetGame);
// pauseButton.addEventListener('click', pauseGame);
// resumeButton.addEventListener('click',resumeGame);

// onWebsite();




// var player=prompt("Enter your name");
// console.log(player);


var currentscore = document.querySelector('#currentscore')
var highscore = document.querySelector('#highscore')
var timer = document.querySelector('#timer')
var clickButton = document.querySelector('#clickButton')
var startButton = document.querySelector('#startButton')
var statusMessage = document.querySelector('#statusMessage')

var resetButton = document.querySelector('#resetButton');
var pauseButton = document.querySelector('#pauseButton');
var resumeButton = document.querySelector('#resumeButton');
var video = document.querySelector('#video');

var current = 0;
var high = 0;
var timer1 = 10;
var flag = false;
var count=0;
var timeId=null;

function onWebsite(){
    loadData();
    displayContent();
}

function loadData(){
    var temp = localStorage.getItem('highScore');
    if(temp!= null){
        high = temp;
    }
    else{
        high = 0;
    }
}

function displayContent(){
    currentscore.textContent = current;
    highscore.textContent = high;
    timer.textContent = timer1;
}

function statusMsg(msg){
    statusMessage.textContent = msg;
}

function endGame(){
    flag=false;
    clickButton.disabled =true;   //if true=disabled & if false=work
    startButton.disabled =false; 
     clearInterval(timerId);
    if(current>high){
        video.style.display = "block";
        video.play();
        high = current;
        localStorage.setItem('highScore',current);
        highscore.textContent = current;
        statusMsg(`You scored high,New high score is ${current}`);
    }
    else if(current==high){
        statusMsg(`Score is same!!!`);
    }
    else{
        statusMsg(`Your current score is ${current}`);
    }
    current = 0;
    timer1 = 10;
    displayContent();
}

function startGame(){
    video.style.display = "none"
    clickButton.disabled = false ;
    // startButton.disabled = true; 
    pauseButton.disabled = false
    flag = true;
    timer1 =10 ;   //work till 10 to 0 and will not go to minus(-)
    statusMsg("The game is Started..!!");
    timerId = setInterval(function(){
        timer1--;
        if(timer1<=0){
            endGame();
        }
        displayContent();
    },1000)
}

function userClick(){
     if(flag){
        current++;
        displayContent();
     }
}
function resetGame() {
    high = 0;
    localStorage.setItem('highScore', high);    //update the value of high 
    timer1 = 10; 
    flag = false;
    current = 0;
    clickButton.disabled = true; 
    clearInterval(timeId);
    displayContent();
    statusMsg("Game has been reset, click Start to play again!");
}


function pauseGame() {
    if (flag) 
        flag=false;
        clearInterval(timerId);
        statusMsg("Game paused. Click Pause again to resume.");
        clickButton.disabled = true;
        //pauseButtonButton.disabled = true;
        resumeButton.disabled=false;
}

function resumeGame() {
    if (!flag) {
        flag = true;
        statusMsg("Game Resumed");
        clickButton.disabled = false;
       // resumeButton.disabled = true; 
        pauseButton.disabled = false;   
        timeId = setInterval(function () {
            timer1--;
            if (timer1 <= 0) {
                endGame();
            }
            displayContent()
        },1000)
    } }

startButton.addEventListener('click', startGame);
clickButton.addEventListener('click',userClick);
resetButton.addEventListener('click',resetGame);
pauseButton.addEventListener('click', pauseGame);
resumeButton.addEventListener('click',resumeGame);

onWebsite();
