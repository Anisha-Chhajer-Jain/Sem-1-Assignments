const colorDisplay = document.querySelector('#colorDisplay');
const messageDisplay = document.querySelector('#message');
const currentStreakDisplay = document.querySelector('#currentStreak');
const bestStreakDisplay = document.querySelector('#bestStreak');

const colorBoxes = document.querySelectorAll('.color-box');
console.log(colorBoxes);

const newRoundBtn = document.querySelector('#newRoundBtn');

const easyBtn = document.querySelector('#easyBtn');
const hardBtn = document.querySelector('#hardBtn');
const resetStreakBtn = document.querySelector('#resetStreakBtn');

// variables...
var currentStreak = 0; // user-->track
var bestStreak = 0; //previously data fetch ->store
var pickCorrectColor = 0; //random color
var color = [];  // ->empty array -> 6 - color store index-by-index
var num = 6;  //->loop control


//we can call normally or also we can keep this callling function in a function such that call ek baar meh ho jaye
function webLoad() {
    onLoad();
    colorGenerate();
    setGame();
    displayContent();
}

// whenever the website will load then first it will load the entire data so it will return the data.....
function onLoad() {
    var temp = localStorage.getItem('highBestStreak');
    if (temp != null) {
        bestStreak = parseInt(temp); // --> here the localStorage contains the data so it will return the data no.
    } else {
        bestStreak = 0;  //if there is no data in LS so it will return null instead of number
    }
}


// here we will define the display content message in a function format..

function displayContent() {
    currentStreakDisplay.textContent = currentStreak;
    bestStreakDisplay.textContent = bestStreak;
}

// webload();
//we can call normally or also we can keep this callling function in a function such that call ek baar meh ho jaye
// random color generator


//to generate color
function colorGenerate() {
    var a = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var c = Math.floor(Math.random() * 256);
    return `rgb(${a}, ${b}, ${c})`;     //taki color eksum mast proper aaye
}

function generateColor(num) {      //num-> 6     i=0,colorGenerate->rgb(122,23,54)   
    const arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(colorGenerate());
    }
    return arr;
}

function pickGenerator() {
    const index= Math.floor(Math.random() * color.length);
    console.log(index);
    return color[index];
}

function setGame() {
    color = generateColor(num);  //wo 6 color meh se hi koii ek color hoga select for sure
    pickCorrectColor = pickGenerator();
    console.log(color);
    console.log(pickCorrectColor);
    colorDisplay.textContent = pickCorrectColor;
    for (var i = 0; i < color.length; i++) {
        colorBoxes[i].style.backgroundColor = color[i];
    }
}

webLoad();

function winGuess(event){
    var tempBox=event.target;
    if(pickCorrectColor === tempBox.style.backgroundColor){
        messageDisplay.textContent="YOU WON";
        currentStreak++;
        bestStreak++;
        displayContent();
        setGame();
    }
    else{
        messageDisplay.textContent="TRY AGAIN";
    }
}

//forEach by default starts from 0
colorBoxes.forEach((box)=>{
console.log(box);
box.addEventListener('click',winGuess);
});

//New Round
newRoundBtn.addEventListener('click',()=>{
    setGame();
    messageDisplay.textContent="New round started!!!";
});

//Reset Streak Button
resetStreakBtn.addEventListener('click',()=>{
    currentStreak = 0;
    bestStreak = 0;
    localStorage.setItem('highBestStreak', 0);
    displayContent();
    messageDisplay.textContent="Hahahha Done Reset!!!";
});

//easy
easyBtn.addEventListener('click',()=>{
    for (let i=3;i<colorBoxes.length; i++) {
        colorBoxes[i].style.display='none'; 
    }
    setGame();
    messageDisplay.textContent="Enjoyyy karo hogya abb easyyy!!!";
});

//easy
hardBtn.addEventListener('click',()=>{
    for (let i=0; i<colorBoxes.length; i++) {
        colorBoxes[i].style.display='block';
    }
    setGame();
    messageDisplay.textContent="Hehehhe hard mode!!!";
});
