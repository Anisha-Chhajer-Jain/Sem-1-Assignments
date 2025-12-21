// const board = document.getElementById('board');
// const movesEl = document.getElementById('moves');
// const pairsEl = document.getElementById('pairs');
// const timeEl = document.getElementById('timeLeft');
// const startBtn = document.getElementById('startBtn');
// const restartBtn = document.getElementById('restartBtn');
// const resetBtn = document.getElementById('resetBtn');
// const bestScoreEl = document.getElementById('bestScore');
// const overlay = document.getElementById('countdownOverlay');

// // Add new elements for features
// const lastTestEl = document.createElement('div');
// lastTestEl.id = 'lastTest';
// lastTestEl.textContent = 'Last test: —';
// document.body.appendChild(lastTestEl);

// const fastStartEl = document.createElement('div');
// fastStartEl.id = 'fastStart';
// fastStartEl.textContent = 'Fastest start: —';
// document.body.appendChild(fastStartEl);

// const keepTypingEl = document.createElement('div');
// keepTypingEl.id = 'keepTyping';
// keepTypingEl.textContent = 'Keep typing!';
// keepTypingEl.style.display = 'none';
// keepTypingEl.style.color = 'blue';
// document.body.appendChild(keepTypingEl);

// // Game configuration
// const rows = 3;
// const cols = 6;
// const totalPairs = 9;
// const initialTime = 60;

// // State
// let firstCard = null;
// let secondCard = null;
// let busy = false;
// let moves = 0;
// let matchedPairs = 0;
// let timeLeft = initialTime;
// let timerId = null;
// let pendingTimeouts = [];
// let bestScore = null;
// let firstMoveTime = null;
// let gameStartTime = null;
// let pauseTimer = null;
// let hasFirstMatch = false;

// // Load and display content
// function onLoad(){
//   bestScore = localStorage.getItem('highScoreGame') ? parseInt(localStorage.getItem('highScoreGame')) : 0;
  
//   // Load last test results
//   const lastWPM = sessionStorage.getItem('lastWPM');
//   if (lastWPM) {
//     lastTestEl.textContent = `Last test: ${lastWPM} WPM`;
//   }
  
//   // Load fastest start
//   const fastStart = sessionStorage.getItem('fastStart');
//   if (fastStart) {
//     fastStartEl.textContent = `Fastest start: ${(parseInt(fastStart)/1000).toFixed(1)}s`;
//   }
// }

// function displayContent(){
//   timeEl.textContent = timeLeft;
//   bestScoreEl.textContent = bestScore;
// }

// onLoad();
// displayContent();

// // Feature 6: "Time Running Out!" at 10 seconds
// function updateTimer() {
//   timeLeft--;
//   timeEl.textContent = timeLeft;
  
//   if (timeLeft <= 10) {
//     timeEl.style.color = 'red';
//     timeEl.style.fontSize = '2.2em';
//   }
  
//   if (timeLeft <= 0) {
//     endGame();
//   }
// }

// // Feature 3: "Keep Typing!" When Paused (adapted for memory game)
// function startPauseTimer() {
//   clearTimeout(pauseTimer);
//   keepTypingEl.style.display = 'none';
  
//   pauseTimer = setTimeout(() => {
//     keepTypingEl.style.display = 'block';
//   }, 3000);
// }

// function startGame() {
//   if (!gameStartTime) {
//     gameStartTime = Date.now();
//   }
//   startPauseTimer();
  
//   if (!timerId) {
//     timerId = setInterval(updateTimer, 1000);
//   }
// }

// function endGame() {
//   clearInterval(timerId);
//   timerId = null;
  
//   // Feature 7: Save last test results
//   const finalScore = Math.round((matchedPairs / moves) * 100) || 0; // Using accuracy as "WPM" equivalent
//   sessionStorage.setItem('lastWPM', finalScore);
//   lastTestEl.textContent = `Last test: ${finalScore}%`;
  
//   // Feature 5: "New Personal Best!"
//   if (matchedPairs > bestScore) {
//     bestScore = matchedPairs;
//     localStorage.setItem('highScoreGame', bestScore);
//     bestScoreEl.textContent = bestScore;
//     bestScoreEl.style.color = 'red';
//     bestScoreEl.style.fontWeight = 'bold';
    
//     // Reset after 2 seconds
//     setTimeout(() => {
//       bestScoreEl.style.color = '';
//       bestScoreEl.style.fontWeight = '';
//     }, 2000);
//   }
// }

// const arr1 = [1,2,3,4,5,6,7,8,9];

// function createCard(value){
//   const card = document.createElement('div');
//   card.classList.add('card');

//   const inner = document.createElement('div');
//   inner.classList.add('inner');

//   const front = document.createElement('div');
//   front.classList.add('front');

//   const back = document.createElement('div');
//   back.classList.add('back');
//   back.textContent = value;

//   inner.appendChild(front);
//   inner.appendChild(back);
//   card.appendChild(inner);

//   return card;
// }

// function matchFound(card){
//   if (card === firstCard || card.classList.contains('matched') || busy) return;
  
//   startGame(); // Start game on first move
//   startPauseTimer(); // Reset pause timer
  
//   // Feature 8: "Fastest Start" - measure first 5 moves
//   if (moves === 0) {
//     firstMoveTime = Date.now();
//   } else if (moves === 4 && !sessionStorage.getItem('fastStart')) {
//     const timeTaken = Date.now() - firstMoveTime;
//     sessionStorage.setItem('fastStart', timeTaken);
//     fastStartEl.textContent = `Fastest start: ${(timeTaken/1000).toFixed(1)}s`;
//   }

//   card.classList.add('flipped');

//   if (firstCard == null) {
//     firstCard = card;
//     return;
//   }

//   secondCard = card;
//   moves++;
//   movesEl.textContent = moves;
  
//   // Feature 1: "Lightning Fast!" When moves rate is high
//   const elapsedTime = (Date.now() - gameStartTime) / 1000 / 60; // in minutes
//   const movesPerMinute = moves / elapsedTime;
  
//   if (movesPerMinute > 10 && elapsedTime > 0.1) { // Adjusted threshold for memory game
//     movesEl.style.fontWeight = 'bold';
//   }

//   const firstValue = firstCard.querySelector('.back').textContent;
//   const secondValue = secondCard.querySelector('.back').textContent;

//   if (firstValue === secondValue) {
//     // Feature 4: "First Word!" on First Match
//     if (!hasFirstMatch) {
//       hasFirstMatch = true;
//       pairsEl.style.fontWeight = 'bold';
//       setTimeout(() => {
//         pairsEl.style.fontWeight = 'normal';
//       }, 500);
//     }
    
//     firstCard.classList.add('matched');
//     secondCard.classList.add('matched');
//     firstCard = null;
//     secondCard = null;
//     matchedPairs++;
//     pairsEl.textContent = matchedPairs;
    
//     // Feature 2: "Perfect!" on 100% Accuracy (all pairs matched)
//     if (matchedPairs === totalPairs) {
//       pairsEl.style.color = 'green';
//       endGame();
//     }
//   } else {
//     busy = true;
//     setTimeout(() => {
//       firstCard.classList.remove('flipped');
//       secondCard.classList.remove('flipped');
//       firstCard = null;
//       secondCard = null;
//       busy = false;
//     }, 700);
//   }
// }

// function cardMaking(){
//   const arr3 = [...arr1, ...arr1];
  
//   // Shuffle array
//   for (let i = arr3.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [arr3[i], arr3[j]] = [arr3[j], arr3[i]];
//   }
  
//   arr3.forEach((value) => {
//     const card = createCard(value);
//     board.appendChild(card);
//     card.addEventListener('click', () => matchFound(card));
//   });
// }

// // Add event listeners for buttons
// startBtn?.addEventListener('click', startGame);
// restartBtn?.addEventListener('click', () => {
//   location.reload();
// });

// cardMaking();

// // Game state
// let timeLeft = 60;
// let timerId = null;
// let isRunning = false;
// let isPaused = false;
// let startTime = null;
// let typedChars = 0;
// let correctChars = 0;
// let currentText = '';
// let bestWPM = localStorage.getItem('bestWPM') || 0;

// // DOM elements
// const timerEl = document.getElementById('timer');
// const wpmEl = document.getElementById('wpm');
// const accuracyEl = document.getElementById('accuracy');
// const bestWPMEl = document.getElementById('bestWPM');
// const textDisplayEl = document.getElementById('textDisplay');
// const typingArea = document.getElementById('typingArea');
// const startBtn = document.getElementById('startBtn');
// const resetBtn = document.getElementById('resetBtn');
// const pauseBtn = document.getElementById('pauseBtn');
// const timeButtons = document.querySelectorAll('.btn');
// const lastTestEl = document.getElementById('lastTest');
// const fastStartEl = document.getElementById('fastStart');
// const keepTypingEl = document.getElementById('keepTyping');

// // Initialize
// document.addEventListener('DOMContentLoaded', () => {
//     bestWPMEl.textContent = bestWPM;
    
//     // Load last test from sessionStorage
//     const lastWPM = sessionStorage.getItem('lastWPM');
//     if (lastWPM) {
//         lastTestEl.textContent = `Last test: ${lastWPM} WPM`;
//     }
    
//     // Load fastest start from sessionStorage
//     const fastStart = sessionStorage.getItem('fastStart');
//     if (fastStart) {
//         fastStartEl.textContent = `Fastest start: ${(parseInt(fastStart)/1000).toFixed(1)}s`;
//     }
    
//     // Time button event listeners
//     timeButtons.forEach(btn => {
//         btn.addEventListener('click', () => {
//             timeButtons.forEach(b => b.classList.remove('active'));
//             btn.classList.add('active');
//             timeLeft = parseInt(btn.dataset.time);
//             timerEl.textContent = timeLeft;
//         });
//     });
    
//     // Set default time
//     timeButtons[1].classList.add('active'); // 60 seconds default
// });

// // Add your existing game logic here for the typing test functionality




// Game state
let timeLeft = 60;
let timerId = null;
let isRunning = false;
let isPaused = false;
let startTime = null;
let typedChars = 0;
let correctChars = 0;
let currentText = '';
let bestWPM = localStorage.getItem('bestWPM') || 0;
let pauseTimer = null;
let hasFirstSpace = false;
let firstFiveStartTime = null;
let hasRecordedFastStart = false;

// DOM elements
const timerEl = document.getElementById('timer');
const wpmEl = document.getElementById('wpm');
const accuracyEl = document.getElementById('accuracy');
const bestWPMEl = document.getElementById('bestWPM');
const textDisplayEl = document.getElementById('textDisplay');
const typingArea = document.getElementById('typingArea');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const pauseBtn = document.getElementById('pauseBtn');
const timeButtons = document.querySelectorAll('.btn');
const lastTestEl = document.getElementById('lastTest');
const fastStartEl = document.getElementById('fastStart');
const keepTypingEl = document.getElementById('keepTyping');

// Sample texts for typing test
const sampleTexts = [
    "The quick brown fox jumps over the lazy dog while programming computers can be fun.",
    "JavaScript is a versatile programming language used for web development and beyond.",
    "Typing speed tests help improve your keyboard skills and overall productivity.",
    "Practice makes perfect when it comes to developing fast and accurate typing abilities.",
    "Modern web development requires knowledge of HTML, CSS, and JavaScript fundamentals."
];

// Initialize game
function initGame() {
    bestWPMEl.textContent = bestWPM;
    
    // Load last test from sessionStorage
    const lastWPM = sessionStorage.getItem('lastWPM');
    if (lastWPM) {
        lastTestEl.textContent = `Last test: ${lastWPM} WPM`;
    }
    
    // Load fastest start from sessionStorage
    const fastStart = sessionStorage.getItem('fastStart');
    if (fastStart) {
        fastStartEl.textContent = `Fastest start: ${(parseInt(fastStart)/1000).toFixed(1)}s`;
    }
    
    // Set default time
    timeButtons[1].classList.add('active');
    
    // Generate random text
    currentText = sampleTexts[Math.floor(Math.random() * sampleTexts.length)];
    textDisplayEl.innerHTML = currentText.split('').map(char => 
        `<span class="char">${char}</span>`
    ).join('');
}

// Start the typing test
function startTest() {
    if (isRunning) return;
    
    isRunning = true;
    isPaused = false;
    startTime = Date.now();
    typedChars = 0;
    correctChars = 0;
    hasFirstSpace = false;
    firstFiveStartTime = Date.now();
    hasRecordedFastStart = false;
    
    typingArea.disabled = false;
    typingArea.value = '';
    typingArea.focus();
    
    // Reset styles
    wpmEl.style.fontWeight = 'normal';
    accuracyEl.style.color = '';
    timerEl.style.color = '';
    timerEl.style.fontSize = '';
    bestWPMEl.style.color = '';
    bestWPMEl.style.fontWeight = '';
    
    // Start timer
    timerId = setInterval(updateTimer, 1000);
    
    // Reset character highlighting
    const chars = textDisplayEl.querySelectorAll('.char');
    chars.forEach(char => {
        char.className = 'char';
    });
    
    updateStats();
}

// Update timer
function updateTimer() {
    timeLeft--;
    timerEl.textContent = timeLeft;
    
    // Feature 6: "Time Running Out!" at 10 seconds
    if (timeLeft <= 10) {
        timerEl.style.color = 'red';
        timerEl.style.fontSize = '2.2em';
    }
    
    if (timeLeft <= 0) {
        endTest();
    }
}

// Update statistics
function updateStats() {
    if (!isRunning || isPaused) return;
    
    const elapsedMinutes = (Date.now() - startTime) / 60000;
    const wpm = Math.round((correctChars / 5) / elapsedMinutes) || 0;
    const accuracy = typedChars > 0 ? Math.round((correctChars / typedChars) * 100) : 100;
    
    wpmEl.textContent = wpm;
    accuracyEl.textContent = accuracy + '%';
    
    // Feature 1: "Lightning Fast!" When WPM > 100
    if (wpm > 100 && wpmEl.style.fontWeight !== 'bold') {
        wpmEl.style.fontWeight = 'bold';
    }
    
    // Feature 2: "Perfect!" on 100% Accuracy
    if (accuracy === 100) {
        accuracyEl.style.color = 'green';
    } else {
        accuracyEl.style.color = '';
    }
}

// Feature 3: "Keep Typing!" When Paused
function startPauseTimer() {
    clearTimeout(pauseTimer);
    keepTypingEl.style.display = 'none';
    
    pauseTimer = setTimeout(() => {
        if (isRunning && !isPaused) {
            keepTypingEl.style.display = 'block';
        }
    }, 3000);
}

// Handle typing input
function handleInput() {
    if (!isRunning || isPaused) return;
    
    // Feature 3: Reset pause timer on each keystroke
    startPauseTimer();
    
    const typedText = typingArea.value;
    typedChars = typedText.length;
    
    // Feature 8: "Fastest Start" - record time for first 5 characters
    if (typedChars === 5 && !hasRecordedFastStart) {
        const timeTaken = Date.now() - firstFiveStartTime;
        const currentFastStart = sessionStorage.getItem('fastStart');
        
        if (!currentFastStart || timeTaken < parseInt(currentFastStart)) {
            sessionStorage.setItem('fastStart', timeTaken);
            fastStartEl.textContent = `Fastest start: ${(timeTaken/1000).toFixed(1)}s`;
        }
        hasRecordedFastStart = true;
    }
    
    // Feature 4: "First Word!" on First Space
    if (typedText.includes(' ') && !hasFirstSpace) {
        hasFirstSpace = true;
        wpmEl.style.fontWeight = 'bold';
        setTimeout(() => {
            wpmEl.style.fontWeight = wpmEl.textContent > 100 ? 'bold' : 'normal';
        }, 500);
    }
    
    // Update character highlighting
    updateCharacterHighlighting(typedText);
    updateStats();
}

// Update character highlighting
function updateCharacterHighlighting(typedText) {
    const chars = textDisplayEl.querySelectorAll('.char');
    let correctCount = 0;
    
    chars.forEach((char, index) => {
        if (index < typedText.length) {
            if (typedText[index] === currentText[index]) {
                char.className = 'char correct-char';
                correctCount++;
            } else {
                char.className = 'char incorrect-char';
            }
        } else if (index === typedText.length) {
            char.className = 'char current-char';
        } else {
            char.className = 'char';
        }
    });
    
    correctChars = correctCount;
}

// Feature 5: Save best WPM
function saveBestWPM(finalWPM) {
    if (finalWPM > bestWPM) {
        bestWPM = finalWPM;
        localStorage.setItem('bestWPM', bestWPM);
        bestWPMEl.textContent = bestWPM;
        
        // Feature 5: "New Personal Best!" - highlight best WPM
        bestWPMEl.style.color = 'red';
        bestWPMEl.style.fontWeight = 'bold';
        
        // Reset highlight after 3 seconds
        setTimeout(() => {
            bestWPMEl.style.color = '';
            bestWPMEl.style.fontWeight = '';
        }, 3000);
    }
}

// End the test
function endTest() {
    isRunning = false;
    clearInterval(timerId);
    clearTimeout(pauseTimer);
    
    const elapsedMinutes = (Date.now() - startTime) / 60000;
    const finalWPM = Math.round((correctChars / 5) / elapsedMinutes) || 0;
    const finalAccuracy = typedChars > 0 ? Math.round((correctChars / typedChars) * 100) : 100;
    
    // Feature 7: Save last test results
    sessionStorage.setItem('lastWPM', finalWPM);
    lastTestEl.textContent = `Last test: ${finalWPM} WPM`;
    
    // Save best WPM
    saveBestWPM(finalWPM);
    
    // Disable typing area
    typingArea.disabled = true;
    keepTypingEl.style.display = 'none';
    
    // Show results
    alert(`Test completed!\nWPM: ${finalWPM}\nAccuracy: ${finalAccuracy}%`);
}

// Pause/resume test
function togglePause() {
    if (!isRunning) return;
    
    isPaused = !isPaused;
    
    if (isPaused) {
        clearInterval(timerId);
        typingArea.disabled = true;
        pauseBtn.textContent = 'Resume Test';
        keepTypingEl.style.display = 'none';
    } else {
        timerId = setInterval(updateTimer, 1000);
        typingArea.disabled = false;
        typingArea.focus();
        pauseBtn.textContent = 'Pause Test';
        startPauseTimer();
    }
}

// Reset the test
function resetTest() {
    isRunning = false;
    isPaused = false;
    clearInterval(timerId);
    clearTimeout(pauseTimer);
    
    timeLeft = parseInt(document.querySelector('.btn.active').dataset.time);
    timerEl.textContent = timeLeft;
    timerEl.style.color = '';
    timerEl.style.fontSize = '';
    
    wpmEl.textContent = '0';
    wpmEl.style.fontWeight = 'normal';
    accuracyEl.textContent = '100%';
    accuracyEl.style.color = '';
    
    typingArea.value = '';
    typingArea.disabled = true;
    keepTypingEl.style.display = 'none';
    pauseBtn.textContent = 'Pause Test';
    
    // Reset character highlighting
    const chars = textDisplayEl.querySelectorAll('.char');
    chars.forEach(char => {
        char.className = 'char';
    });
    
    // Generate new text
    currentText = sampleTexts[Math.floor(Math.random() * sampleTexts.length)];
    textDisplayEl.innerHTML = currentText.split('').map(char => 
        `<span class="char">${char}</span>`
    ).join('');
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    initGame();
    
    // Time button event listeners
    timeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            if (isRunning) return;
            
            timeButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            timeLeft = parseInt(btn.dataset.time);
            timerEl.textContent = timeLeft;
        });
    });
    
    // Control button event listeners
    startBtn.addEventListener('click', startTest);
    resetBtn.addEventListener('click', resetTest);
    pauseBtn.addEventListener('click', togglePause);
    
    // Typing area event listeners
    typingArea.addEventListener('input', handleInput);
    typingArea.addEventListener('focus', startPauseTimer);
    
    // Prevent spacebar from scrolling page
    typingArea.addEventListener('keydown', (e) => {
        if (e.code === 'Space' && e.target === typingArea) {
            e.preventDefault();
        }
    });
});

// Additional CSS classes for character highlighting (add to your CSS)
const additionalCSS = `
.char {
    transition: all 0.1s ease;
}

.correct-char {
    color: #28a745;
}

.incorrect-char {
    color: #dc3545;
    background: #ffe6e6;
    text-decoration: underline;
}

.current-char {
    background: #b3d4fc;
    border-radius: 2px;
}
`;

// Inject additional CSS
const style = document.createElement('style');
style.textContent = additionalCSS;
document.head.appendChild(style);