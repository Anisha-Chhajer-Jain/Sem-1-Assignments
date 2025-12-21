
// //-DOM.elements
// const board = document.getElementById('board');
// const movesEl = document.getElementById('moves');
// const pairsEl = document.getElementById('pairs')
// const timeEl = document.getElementById('timeLeft');
// const startBtn = document.getElementById('startBtn')
// const restartBtn = document.getElementById('restartBtn');
// const resetBtn = document.getElementById('resetBtn');
// const bestScoreEl = document.getElementById('bestScore')
// const overlay = document.getElementById('countdownOverlay')

// // Game configuration
// const rows = 3; // grid layout chosen via CSS; use 6x3 - 18 cards (9 pairs)
// const cols = 6;
// const totalpairs = 9;
// const initialTime = 60; // seconds

// // State
// let firstCard = null;
// let secondCard = null;
// let busy = false;
// let moves = 0;
// let matchedpairs = 0;
// let timeleft = initialTime;
// let timerId = null;
// let pendingTimeouts = [];
// let bestScore = null;

// //step -1
// // call -> stores entire previous data in bestscore variable
// function onLoad(){
//     var temp = localStorage.getItem('highScoreGame')     //highScoreGame is a key
//     if (temp != null){
//         bestScore = parseInt(temp)
//     }
//     else{
//         bestScore = 0;
//     }
// }

// function displayContent(){
//     timeEl.textContent = timeleft;
//     bestScoreEl.textContent = bestScore;
// }

// onLoad();
// displayContent();

// var arr1 = [1,2,3,4,5,6,7,8,9];


// function createCard(value){
//     const card = document.createElement('div');
//     card.classList.add('card');

//     const inner = document.createElement('div');
//     inner.classList.add('inner');

//     const front = document.createElement('div');
//     front.classList.add('front');

//     const back = document.createElement('div');
//     back.classList.add('back');
//     back.textContent = value;

//     inner.appendChild(front);
//     inner.appendChild(back);

//     card.appendChild(inner);

// }


// function cardMaking(){
//     //destructure method concept....
//     var arr3 = [...arr1, ...arr1];
//     console.log(arr3);

//     // shuffling → position exchange.....
//     for (let i = arr3.length - 1; i > 0; i--) {
//     var j = Math.floor(Math.random() * (i + 1));
//     var a = arr3[i];
//     arr3[i] = arr3[j];
//     arr3[j] = a;
//     }
//     console.log("After shuffle method" + arr3);

//     arr3.forEach((value) => {
//         i++;
//         const card = createCard(value);
//         console.log(i);
//         console.log(card);
//     })
// }

// cardMaking();













// // DOM elements

// const board = document.getElementById('board');
// const movesEl = document.getElementById('moves');
// const pairsEl = document.getElementById('pairs');
// const timeEl = document.getElementById('timeLeft');
// const startBtn = document.getElementById('startBtn');
// const restartBtn = document.getElementById('restartBtn');
// const resetBtn = document.getElementById('resetBtn');
// const bestScoreEl = document.getElementById('bestScore');
// const overlay = document.getElementById('countdownOverlay');



// // Game configuration

// const rows = 3;                        // grid layout chosen via CSS; use 6x3 = 18 cards (9 pairs)
// const cols = 6;
// const totalPairs = 9;
// const initialTime = 60; // seconds



// // State

// let firstCard = null;
// let secondCard = null;
// let busy = false;
// let moves = 0;
// let matchedPairs = 0;
// let timeleft = initialTime;
// let timerId = null;
// let pendingTimeouts = [];
// let bestScore = null;



// // Step-1 

// // This function we had called because to load the previous data from the local/session storage and updating the bestscore variable
// function onLoad() {
//     var temp = localStorage.getItem('highScoreGame');
//     if (temp != null) {
//         bestScore = parseInt(temp);
//     }
//     else {
//         bestScore = 0;
//     }
// }


// // This function we had called it because when we want to display the content we had changed or anything written and we have to reflect it into the html file so that we can see it
// function displayContent() {
//     timeEl.textContent = timeleft;
//     bestScore.textContent = bestScore;
// }

// onLoad();
// displayContent();

// // We have to suffle the array as if we do it manually then we know that on which sequence is that number so not to do this then we are going to shuffle it 
// // We have 18 cards then we have to make an array of 1 to 9 twice 
// var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // 
// function createCard(value) {
//     // Parent card div
//     const card = document.createElement('div');
//     card.classList.add('card');

//     // Inner wrapper
//     const inner = document.createElement('div');
//     inner.classList.add('inner');

//     // Front side
//     const front = document.createElement('div');
//     front.classList.add('front');

//     // Back side
//     const back = document.createElement('div');
//     back.classList.add('back');
//     back.textContent = value;   // show number here

//     // Add front + back inside inner
//     inner.appendChild(front);
//     inner.appendChild(back);

//     // Add inner inside card
//     card.appendChild(inner);

//     return card;
// }

// function matchFound(card){

//     if(card === firstCard) return;

//     card.classList.add('flipped');

//     if(firstCard == null){
//         firstCard = card;
//         return;
//     }
// secondCard = card;
// moves++;
// movesEl.textContent = moves;

// console.log(firstCard);
// console.log(secondCard);
// }


// function cardMaking() {
//     board.innerHTML = '';
//     // This method is known as Destructuring of array 

//     var arr3 = [...arr1, ...arr1];

//     // To reshuffle the number by exchanging the position

//     for (let i = arr3.length - 1; i > 0; i--) {
//         var j = Math.floor(Math.random() * (i + 1));
//         // [arr3[i], arr3[j]] = [arr3[j], arr3[i]];
//         var a = arr3[i];
//         arr3[i] = arr3[j];
//         arr3[j] = a;

//     }

//     console.log("After Shuffle method"+arr3);
//     var i = 0;
//     arr3.forEach((value) => {
//         i++;
//         const card = createCard(value);
//         console.log(i);
//         console.log(card);
//         board.appendChild(card);
//         card.addEventListener('click',matchFound);
//     });

// };

// cardMaking();

















// // DOM elements
// const board = document.getElementById('board');
// const movesEl = document.getElementById('moves');
// const pairsEl = document.getElementById('pairs');
// const timeEl = document.getElementById('timeLeft');
// const startBtn = document.getElementById('startBtn');
// const restartBtn = document.getElementById('restartBtn');
// const resetBtn = document.getElementById('resetBtn');
// const bestScoreEl = document.getElementById('bestScore');
// const overlay = document.getElementById('countdownOverlay');



// // Game configuration
// const rows = 3;                        // grid layout chosen via CSS; use 6x3 = 18 cards (9 pairs)
// const cols = 6;
// const totalPairs = 9;
// const initialTime = 60; // seconds



// // State
// let firstCard = null;
// let secondCard = null;
// let busy = false;
// let moves = 0;
// let matchedPairs = 0;
// let timeleft = initialTime;
// let timerId = null;
// let pendingTimeouts = [];
// let bestScore = null;



// // Step-1 
// // This function we had called because to load the previous data from the local/session storage and updating the bestscore variable
// function onLoad() {
//     var temp = localStorage.getItem('highScoreGame');
//     if (temp != null) {
//         bestScore = parseInt(temp);
//     }
//     else {
//         bestScore = 0;
//     }
// }


// // This function we had called it because when we want to display the content we had changed or anything written and we have to reflect it into the html file so that we can see it
// function displayContent() {
//     timeEl.textContent = timeleft;
//     bestScore.textContent = bestScore;
// }

// onLoad();
// displayContent();

// // We have to suffle the array as if we do it manually then we know that on which sequence is that number so not to do this then we are going to shuffle it 
// // We have 18 cards then we have to make an array of 1 to 9 twice 
// var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // 

// function createCard(value) {
//     // Parent card div
//     const card = document.createElement('div');
//     card.classList.add('card');

//     // Inner wrapper
//     const inner = document.createElement('div');
//     inner.classList.add('inner');

//     // Front side
//     const front = document.createElement('div');
//     front.classList.add('front');

//     // Back side
//     const back = document.createElement('div');
//     back.classList.add('back');
//     back.textContent = value;   // show number here

//     // Add front + back inside inner
//     inner.appendChild(front);
//     inner.appendChild(back);

//     // Add inner inside card
//     card.appendChild(inner);

//     return card;
// }

// // function createCard(){
// //     return card;
// // }

// function matchFound(card){

//     if(card === firstCard) return;

//     card.classList.add('flipped');

//     if(firstCard == null){
//         firstCard = card;
//         return;
//     }

//     secondCard = card;
//     moves++;
//     movesEl.textContent = moves;

//     console.log(firstCard);
//     console.log(secondCard);

//     var a = firstCard.querySelector('.back');
//     console.log("The back calls for a:" + a.textContent);

//     var b = secondCard.querySelector('.back');
//     console.log("The back calls for b:" + b.textContent);

// }

// function cardMaking() {
//     // board.innerHTML = '';

//     // This method is known as Destructuring of array 

//     var arr3 = [...arr1, ...arr1];

//     // To reshuffle the number by exchanging the position
//     for (let i = arr3.length - 1; i > 0; i--) {
//         var j = Math.floor(Math.random() * (i + 1));
//         [arr3[i], arr3[j]] = [arr3[j], arr3[i]];
//     }

//     var i = 0;

//     arr3.forEach((value) => {
//         i++;
//         const card = createCard();
//         console.log(i);
//         console.log(card);
//         board.appendChild(card);
//         card.addEventListener('click',function(){
//             matchFound(card);
//         });
//     });

// };

// cardMaking();




const board = document.getElementById('board');
const movesEl = document.getElementById('moves');
const pairsEl = document.getElementById('pairs');
const timeEl = document.getElementById('timeLeft');
const startBtn = document.getElementById('startBtn');
const restartBtn = document.getElementById('restartBtn');
const resetBtn = document.getElementById('resetBtn');
const bestScoreEl = document.getElementById('bestScore');
const overlay = document.getElementById('countdownOverlay');

// Game configuration
const rows = 3; // grid layout chosen via CSS; use 6x3 =18 cards (9 pairs)
const cols = 6;
const totalPairs = 9;
const initialTime = 60; // seconds

// State
let firstCard = null;
let secondCard = null;
let busy = false;
let moves = 0;
let matchedPairs = 0;
let timeLeft = initialTime;
let timerId = null;
let pendingTimeouts = [];
let bestScore = null;

// step 1
// call -> entire previous dagt -> store -> bestscore variable
function onLoad(){
  var temp = localStorage.getItem('highScoreGame');
  if(temp != null){
    bestScore = parseInt(temp);
  }
  else{
    bestScore = 0;
  }

}

//Actual content reflect -> html file me 
function displayContent(){
  timeEl.textContent = timeLeft;
  bestScore.textContent = bestScore;
}

onLoad();
displayContent();

var arr1 = [1,2,3,4,5,6,7,8,9];

function createCard(value){
  const card = document.createElement('div');
  card.classList.add('card');

  const inner = document.createElement('div');
  inner.classList.add('inner');

  const front = document.createElement('div');
  front.classList.add('front');

  const back = document.createElement('div');
  back.classList.add('back');
  back.textContent = value;

  inner.appendChild(front);
  inner.appendChild(back);

  card.appendChild(inner);

  return card;
}

function matchFound(card){

  if(card === firstCard || card.classList.contains('matched')) return;

  card.classList.add('flipped');

  if(firstCard == null ){
    firstCard = card;
    return;
  }

  secondCard = card;
  moves++;
  movesEl.textContent = moves;

  console.log(firstCard);
  console.log(secondCard);

    var a = firstCard.querySelector('.back');
  console.log("the back class for a:"+ a.textContent);
    var b = secondCard.querySelector('.back');
  console.log("the back class for b:"+ b.textContent);

  if(a.textContent === b.textContent){
    firstCard.classList.add('matched');
    secondCard.classList.add("matched");
    firstCard = null;
    secondCard = null;
    matchedPairs++;
    pairsEl.textContent = matchedPairs;
    if(matchedPairs == 9){
        alert('endgame');
    }
    }
    else{
        setTimeout(function(){
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
            firstCard = null;
            secondCard = null;
            
        },700)
  }
}

function cardMaking(){

  //destructure method concept
  var arr3 = [...arr1, ...arr1];
  console.log(arr3);

  //shuffelign -> position exchange..
  for(let i = arr3.length -1; i > 0; i--){
    var j = Math.floor(Math.random()*(i+1));
    var a = arr3[i];
    arr3[i] = arr3[j];
    arr3[j] = a;
  }
  console.log("After shuffle method " + arr3);
var i=0;
  arr3.forEach((value)=>{
    i++;
    const card = createCard(value);
    console.log(i);
    console.log(card);
    board.appendChild(card);
    card.addEventListener('click',function(){
      matchFound(card);
    });
  })


}

cardMaking();