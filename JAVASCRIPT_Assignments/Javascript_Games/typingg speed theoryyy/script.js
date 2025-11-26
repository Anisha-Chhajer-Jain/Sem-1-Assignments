
// DOM Elements
const textDisplay = document.querySelector('#textDisplay');
const typingArea = document.querySelector('#typingArea');
const timerDisplay = document.querySelector('#timer');
const wpmDisplay = document.querySelector('#wpm');
const accuracyDisplay = document.querySelector('#accuracy');
const bestWPMDisplay = document.querySelector('#bestWPM');
const startBtn = document.querySelector('#startBtn');
const resetBtn = document.querySelector('#resetBtn');

// Test texts
const testTexts = [
    "The quick brown fox jumps over the lazy dog. Practice makes perfect when learning to type faster.",
    "Technology has revolutionized the way we communicate and work in the modern digital era.",
    "Typing speed is an essential skill for anyone working with computers in today's workplace.",
    "LABEL AAPKE PEECHE PADENGE AAP LABEL KE PEECHE MAT PADIYE AKELE REH LIJIYE PLEASEE ,KISI HALWI SE BAAT MAT KARIYE",
    "KYUNKI WOI HOTA HAI,WOI HOGA..MANN LAGEGA..DIL LAGEGA..DIL TOOTEGA..NASHE LAGENGE,PAISE LEGENGE,CHILLAM LAGEGI",
    "USSEY KISI AUR KE SAATH DEKHOGE,KHUDME HAZAARON KHAMIYAAN LAGENGI,KAASH MAI AISA HOTA..AUR KAASH MAI WAISA HOTA",
    "Pal-pal jeena muhaal mera tere bina...Yeh saaray nashay bekaar...teri aankhon ke siwa...Ghar nahi jaata, mein bahar"
];

// Game state
let currentText = '';
let timeLeft = 60;
let timerInterval = null;
let startTime = null;
let isTestActive = false;
let bestWPM = 0;

function onLoad(){
    var temp = sessionStorage.getItem('getHighwpm')
    if(temp != null){
        bestWPM = parseInt(temp)
    }
    else{
        bestWPM = 0;
    }
}

function displayContent(){
    timerDisplay.textContent = timeLeft;
    bestWPMDisplay.textContent = bestWPM;
}

function webLoad(){
    onLoad();
    displayContent();
}

webLoad();

function endGame(){
    clearInterval(timerInterval);
    timeLeft = 60;
    startBtn.disabled = false;
    displayContent();

    if(wpm > bestWPM){
        bestWPM = wpm;
        sessionStorage.setItem('getHighScore',bestWPM);
        alert(`scored high score than the previous one`);
    }
    else{
        alert(`score is: ${wpm}`);
    }
    wpm = 0;
    wpmDisplay.textContent = wpm;
    typingArea.value = "";
    displayContent();
}

function startGame(){
    timeLeft = 60;
    startBtn.disabled = true;

    currentText = testTexts[Math.floor(Math.random()*testTexts.length)]
    currentText = getRandomSentence();////////
   currentSentenceBoundary = currentText.length;////////
    textDisplay.textContent = currentText;///////

    typingArea.disabled = false;
    typingArea.value = "";
    typingArea.setAttribute('placeholder','Now the input box is enabled,use it to write something....');

    textDisplay.oncopy = (e) => e.preventDefault();
    textDisplay.oncut = (e) => e.preventDefault();
    textDisplay.oncontextmenu = (e) => e.preventDefault();
    typingArea.onpaste = (e) => e.preventDefault();
    typingArea.oncopy = (e) => e.preventDefault();
    typingArea.oncut = (e) => e.preventDefault();
    typingArea.oncontextmenu = (e) => e.preventDefault();

    startTime = null;          /////////////////////////////////

    timerInterval = setInterval(function(){
        timeLeft--
        if(timeLeft <= 0){
             clearInterval(timerInterval)
            endGame();
        }
        displayContent()
    },1000);
}
//......./...................
function getRandomSentence() {
   return testTexts[Math.floor(Math.random() * testTexts.length)];
}
//............................

function updateStatus(){
    var typed = typingArea.value
    const minute = Math.floor(Date.now()-startTime)/60000                               //ms to min
    const word = typed.trim().split(/\s+/).filter( w => w.length >0);
    console.log(word)
    const wpm = (minute > 0) ? Math.floor(word.length / minute): 0 ;
    wpmDisplay.textContent = wpm;

    var currentScore = 0;
    for (i=0 ; i< currentText.length; i++){
        if(currentText[i] === typed[i]){
            currentScore++;
        }
    }
    const accuracy = (typed.length >0) ? Math.floor(currentScore / typed.length *100) : 0;
    accuracyDisplay.textContent = accuracy;
}

function highLight(){
    var typed = typingArea.value;
    var highText = '';
    for(i =0 ; i < currentText.length ; i++){
        if (i < typed.length){
            if(currentText[i] === typed[i]){
                highText += `<span class="correct">${currentText[i]}</span>`
            }
            else{
                highText += `<span class="incorrect">${currentText[i]}</span>` 
            }
        }
        else{
            highText += currentText[i]
        }
    }
    textDisplay.innerHTML = highText;
}
 
function typeControl(){
    if(startTime == null){
        startTime = Date.now();    //works in 24hrs ke format meh and then usko millisecond meh time return karta haii
    }
    console.log(startTime);
    updateStatus();
    highLight();
    checkAndAddNewSentence(); 
}
    function checkAndAddNewSentence() {
    const typed = typingArea.value;
    if (typed.trim() === currentText.trim() && timeLeft > 10) {
        const newSentence = getRandomSentence();
        currentText += " " + newSentence;
        currentSentenceBoundary = currentText.length;
        textDisplay.innerHTML = currentText; // show full text again
    }
}

startBtn.addEventListener('click',startGame);

typingArea.addEventListener('input',typeControl);


// Load next sentence
function loadNextSentence() {
    if (!isTestActive || timeLeft <= 0) return;
    
    // Get random text
    currentText = testTexts[Math.floor(Math.random() * testTexts.length)];
    textDisplay.innerText = currentText;
    
    // Clear typing area
    typingArea.value = '';
    
    // Show brief feedback
    textDisplay.style.backgroundColor = '#d4edda';
    setTimeout(() => {
        textDisplay.style.backgroundColor = '#f8f9fa';
    }, 200);
}