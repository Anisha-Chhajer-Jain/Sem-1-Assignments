// const colorDisplay = document.querySelector('#colorDisplay');
// const messageDisplay = document.querySelector('#message');
// const currentStreakDisplay = document.querySelector('#currentStreak');
// const bestStreakDisplay = document.querySelector('#bestStreak');
// const livesLeftDisplay = document.querySelector('#livesLeft');

// const colorBoxes = document.querySelectorAll('.color-box');
// const newRoundBtn = document.querySelector('#newRoundBtn');
// const easyBtn = document.querySelector('#easyBtn');
// const hardBtn = document.querySelector('#hardBtn');
// const resetStreakBtn = document.querySelector('#resetStreakBtn');
// const btnTrack = document.querySelector('.color-box-container');

// let currentStreak = 0;
// let bestStreak = 0;
// let pickCorrectColor = "";
// let num = 6;
// let color = [];
// let lives = 3;
// let gameOver = false;

// function webLoad() {
//     onLoad();
//     setGame();
//     displayContent();
// }

// function onLoad() {
//     const temp = localStorage.getItem('highBestStreak');
//     if (temp != null) {
//         bestStreak = parseInt(temp);
//     }
// }

// function displayContent() {
//     currentStreakDisplay.textContent = currentStreak;
//     bestStreakDisplay.textContent = bestStreak;
//     livesLeftDisplay.innerHTML = "❤️".repeat(lives);
// }

// function statusMsg(msg) {
//     messageDisplay.textContent = msg;
// }

// function colorGenerate() {
//     const a = Math.floor(Math.random() * 256);
//     const b = Math.floor(Math.random() * 256);
//     const c = Math.floor(Math.random() * 256);
//     return `rgb(${a}, ${b}, ${c})`;
// }

// function generateColor(num) {
//     const arr = [];
//     for (let i = 0; i < num; i++) {
//         arr.push(colorGenerate());
//     }
//     return arr;
// }

// function pickGenerator() {
//     const math = Math.floor(Math.random() * color.length);
//     return color[math];
// }

// function setGame() {
//     color = generateColor(num);  //wo 6 color meh se hi koii ek color hoga select for sure
//     pickCorrectColor = pickGenerator();
//     console.log(color);
//     console.log(pickCorrectColor);
//     colorDisplay.textContent = pickCorrectColor;
//     for (var i = 0; i < color.length; i++) {
//         colorBoxes[i].style.backgroundColor = color[i];
//     }
// }

// function getHeartMessage(lives) {
//     if (lives === 0) return "💀 Game Over! Out of lives.";
//     return `❌ Wrong! ${"❤️".repeat(lives)}`;
// }

// function trackBtn(event) {
//     if (gameOver) return;
//     const element = event.target;
//     const rgb = element.style.backgroundColor;
//     if (!rgb) return;

//     if (pickCorrectColor === rgb){
//         statusMsg("🎉 Congratulations! You guessed right!");
//         currentStreak++;
//         if (currentStreak > bestStreak) {
//             bestStreak = currentStreak;
//             localStorage.setItem('highBestStreak', bestStreak);
//         }
//         lives = 3;
//         setGame();
//     } else {
//         lives--;
//         statusMsg(getHeartMessage(lives));
//         if (lives <= 0) {
//             gameOver = true;
//             for (let box of colorBoxes) {
//                 box.style.pointerEvents = 'none';
//                 box.style.opacity = '0.5';
//             }
//         }
//     }

//     displayContent();
// }

// function newRound() {
//     currentStreak = 0;
//     lives = 3;
//     gameOver = false;
//     statusMsg("Chaloo khush hojao ek aur chance diya haiii!!!");
//     displayContent();
//     setGame();
// }

// function easyGame() {
//     easyBtn.style.backgroundColor = 'lightgreen'
//     num = 3;
//     statusMsg("Lo ab karo hogyaa easyy!!!");
//     newRound();
//     for (let j = 3; j <= 5; j++) {
//         colorBoxes[j].style.display = 'none';
//     }
// }

// function hardGame() {
//     num = 6;
//     statusMsg("Ohh damnnn hardd mode choose kiya hai apne!!!");
//     newRound();
//     for (let j = 0; j < colorBoxes.length; j++) {
//         colorBoxes[j].style.display = '';
//     }
// }

// function resetStreak() {
//     currentStreak = 0;
//     bestStreak = 0;
//     lives = 3;
//     gameOver = false;
//     localStorage.removeItem('highBestStreak');
//     statusMsg("Streaks reset!");
//     displayContent();
//     setGame();
// }

// webLoad();

// btnTrack.addEventListener('click', trackBtn);
// newRoundBtn.addEventListener('click', newRound);
// easyBtn.addEventListener('click', easyGame);
// hardBtn.addEventListener('click', hardGame);
// resetStreakBtn.addEventListener('click', resetStreak);


const colorDisplay = document.querySelector('#colorDisplay');
const messageDisplay = document.querySelector('#message');
const currentStreakDisplay = document.querySelector('#currentStreak');
const bestStreakDisplay = document.querySelector('#bestStreak');
const livesLeftDisplay = document.querySelector('#livesLeft');

const colorBoxes = document.querySelectorAll('.color-box');
const newRoundBtn = document.querySelector('#newRoundBtn');
const easyBtn = document.querySelector('#easyBtn');
const hardBtn = document.querySelector('#hardBtn');
const resetStreakBtn = document.querySelector('#resetStreakBtn');
const btnTrack = document.querySelector('.color-box-container');

let currentStreak = 0;
let bestStreak = 0;
let pickCorrectColor = "";
let num = 6;
let color = [];
let lives = 3;
let gameOver = false;

function webLoad() {
    onLoad();
    setGame();
    displayContent();
}

function onLoad() {
    const temp = localStorage.getItem('highBestStreak');
    if (temp != null) {
        bestStreak = parseInt(temp);
    }
}

function displayContent() {
    currentStreakDisplay.textContent = currentStreak;
    bestStreakDisplay.textContent = bestStreak;
    livesLeftDisplay.innerHTML = "❤️".repeat(lives);
}

function statusMsg(msg) {
    messageDisplay.textContent = msg;
}

function colorGenerate() {
    const a = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const c = Math.floor(Math.random() * 256);
    return `rgb(${a}, ${b}, ${c})`;
}

function generateColor(num) {
    const arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(colorGenerate());
    }
    return arr;
}

function pickGenerator() {
    const math = Math.floor(Math.random() * color.length);
    return color[math];
}

function setGame() {
    color = generateColor(num);
    pickCorrectColor = pickGenerator();

    colorDisplay.textContent = pickCorrectColor;
    colorDisplay.style.fontWeight = "normal"; // remove bold for new round

    for (let i = 0; i < color.length; i++) {
        colorBoxes[i].style.backgroundColor = color[i];
        colorBoxes[i].style.border = "3px solid transparent"; // remove glow
        colorBoxes[i].classList.remove("shake");
        colorBoxes[i].style.display = "";
        colorBoxes[i].style.pointerEvents = "auto";
        colorBoxes[i].style.opacity = "1";
    }
}

function getHeartMessage(lives) {
    if (lives === 0) return "💀 Game Over! Out of lives.";
    return `❌ Wrong! ${"❤️".repeat(lives)}`;
}

function handleCorrectGuess(box) {
    box.style.border = "4px solid yellow";         // TASK-1-Glow effect

    currentStreak++;                          //TASK-2-Increase streak

    if (currentStreak === 1) {               //TASK-4-First Win message
        statusMsg("🥳 First Win!");
    }

    else if (currentStreak >= 3) {             //TASK-2-SHOW STREAK MESSAGE
        statusMsg("🔥 Streak!");
        messageDisplay.style.color = "green";
    }
    else {
        statusMsg("🎉 Correct!");
        messageDisplay.style.color = "black";
    }

    if (currentStreak > bestStreak) {               //TASK-5-TEXT IN BOLD
        bestStreak = currentStreak;
        localStorage.setItem('highBestStreak', bestStreak);
        colorDisplay.style.fontWeight = "bold";
    }

    lives = 3;
    setTimeout(setGame, 500);
}

function handleWrongGuess(box) {
    box.classList.add("shake");          // TASK-6-ANIMATION(SHAKE)

    lives--;
    statusMsg(getHeartMessage(lives));

    if (lives <= 0) {
        gameOver = true;
        for (let b of colorBoxes) {
            b.style.pointerEvents = "none";
            b.style.opacity = "0.5";
        }
    }
}

function trackBtn(event) {
    if (gameOver) return;
    const element = event.target;
    const rgb = element.style.backgroundColor;
    if (!rgb) return;

    if (pickCorrectColor === rgb) {
        handleCorrectGuess(element);
    } else {
        handleWrongGuess(element);
    }

    displayContent();
}

function newRound() {
    currentStreak = 0;
    lives = 3;
    gameOver = false;
    statusMsg("New Round Started!");
    displayContent();
    setGame();
}

function easyGame() {
    num = 3;
    easyBtn.style.backgroundColor = "lightgreen"; // TASK-3-highlight green
    hardBtn.style.backgroundColor = "";

    newRound();

    for (let j = 3; j <= 5; j++) {
        colorBoxes[j].style.display = 'none';
    }
}

function hardGame() {
    num = 6;
    hardBtn.style.backgroundColor = "lightgreen"; 
    easyBtn.style.backgroundColor = "";

    newRound();

    for (let j = 0; j < colorBoxes.length; j++) {
        colorBoxes[j].style.display = '';
    }
}

function resetStreak() {
    currentStreak = 0;
    bestStreak = 0;
    lives = 3;
    gameOver = false;
    localStorage.removeItem('highBestStreak');
    statusMsg("Streaks reset!");
    displayContent();
    setGame();
}

webLoad();

btnTrack.addEventListener('click', trackBtn);
newRoundBtn.addEventListener('click', newRound);
easyBtn.addEventListener('click', easyGame);
hardBtn.addEventListener('click', hardGame);
resetStreakBtn.addEventListener('click', resetStreak);
