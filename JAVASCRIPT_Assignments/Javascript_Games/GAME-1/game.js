var currentScore = document.querySelector('#currentScore');
var highScore = document.querySelector('#highScore');
var timer = document.querySelector('#timer');
var clickButton = document.querySelector('#clickButton');
var startButton = document.querySelector('#startButton');
var statusMessage = document.querySelector('#statusMessage');

//needed 5 more variables like below

var current = 0;
var high = 0;
var timer1 = 10;

var flag = false;
var timeId = null;
function onWebsite(){
    loadData();
    displayContent();
}

function loadData(){
    var temp = localStorage.getItem('highScore');
    if(temp != null){
        high= temp;
    }
    else{
        high = 0;
    }
}

function displayContent(){
    currentScore.textContent = current;
    highScore.textContent = high;
    timer.textContent =  timer1;
}

onWebsite();
function statusMsg(msg){
    statusMessage.textContent = msg;
}

function endGame(){
    clearInterval(timerId);
    flag = false;
    clickButton.disabled = true;
    if(current > high){
        localStorage.setItem('highScore',current);
        highScore.textContent = current;
        statusMsg(`You scored higher than the previous score, it is ${current}`);
    }
    else if(current == high){
        statusMsg(`You scored exactly the same as the previous score, it is ${current}`);
    }
    else{
        statusMsg(`You scored lesser than the previous score, it is ${current}`);
    }
}

function startGame(){
    clickButton.disabled = false;
    clickButton.style.backgroundColor = "blue";
    clickButton.style.color = "white";
    statusMsg("The game is started");
    //flag ture so that number of countas can be updated there
    flag = true;
    timerId = setInterval(function(){
        timer1--;
        if(timer1 <=0){
            endGame();
            timer1 = 10;
        }
        displayContent();
    },1000);
}
function userClick(){
    if(flag){
        current++;
        displayContent();
    }
}
startButton.addEventListener('click',startGame);