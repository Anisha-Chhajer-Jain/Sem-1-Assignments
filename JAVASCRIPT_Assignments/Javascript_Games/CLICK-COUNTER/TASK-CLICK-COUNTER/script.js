
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
var scaleIncrease=1;

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

function endGame() {
    flag = false;
    clickButton.disabled = true;   // disable click button
    startButton.disabled = false;  // re-enable start button
    clearInterval(timerId);

    // Change Start button text to "Play Again"
    startButton.innerText = "Play Again";

    if (current > high) {
        document.body.style.background = 'gold';
        video.style.display = "block";
        video.play();
        high = current;
        localStorage.setItem('highScore', current);
        highscore.textContent = current;   
        statusMsg(`🎉 You scored a new high! New high score: ${current/10}`); 
    } 
    else if (current === high) {
        statusMsg(`😎 Score is the same as your high score!`);
    } 
    else {
        statusMsg(`Your current score is ${(current/10)}.`);
    }

    current = 0;
    timer1 = 10;
    displayContent();
}
// function startGame() {
//     video.style.display = "none";
//     clickButton.disabled = false;
//     pauseButton.disabled = false;

//     flag = true;
//     timer1 = 10;  // countdown start
//     statusMsg("The game has started...!!");
//     statusMsg("Click Me!");

//  //Prevent multiple timers
//     if (timerId) {
//         clearInterval(timerId);
//     }

//     // setTimeout(() => {
//     //     statusMsg(""); // clear message after 1 second
//     // }, 1000);

//     timerId = setInterval(function() {
//         timer1--;
//         if (timer1 <= 0) {
//             endGame();
//         }
//         displayContent();
//     }, 1000);
// }

// function startGame(){
//     video.style.display = "none"
//     clickButton.disabled = false ;
//     // startButton.disabled = true; 
//     pauseButton.disabled = false
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
function startGame() {
    video.style.display = "none";
    clickButton.disabled = false;
    pauseButton.disabled = false;
    flag = true;
    timer1 = 10;

    setTimeout(() => {
        statusMsg(""); // clear message after 1 second
    }, 1000);

    statusMsg("The game has started!");
    timerId = setInterval(function() {
        timer1--;
        if (timer1 <= 0) {
            endGame();
        }
        displayContent();
    }, 1000);
}

function userClick(){
    if(flag){
        if (scaleIncrease<=2){
        scaleIncrease = scaleIncrease + 0.09;
        clickButton.style.transform = `scale(${scaleIncrease})`
        }
        current++;
        displayContent();
    }
    if(current >= 20){                                                   // task 1
        currentscore.style.color = 'red'
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
