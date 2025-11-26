const colorCode = document.getElementById("colorCode");
const colorButtons = document.getElementById("colorButtons");
const message = document.getElementById("message");
const currentStreakDisplay = document.getElementById("currentStreak");
const bestStreakDisplay = document.getElementById("bestStreak");
const resetButton = document.getElementById("resetButton");

let colors = [];
let correctColor;
let currentStreak = 0;
let bestStreak = localStorage.getItem("bestStreak") || 0;

bestStreakDisplay.textContent = bestStreak;

// Generate random RGB color
function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// Setup new game round
function newGame() {
  colors = [];
  colorButtons.innerHTML = "";
  message.textContent = "";

  // Generate 6 random colors
  for (let i = 0; i < 6; i++) {
    colors.push(randomColor());
  }

  // Pick one correct color
  correctColor = colors[Math.floor(Math.random() * colors.length)];
  colorCode.textContent = correctColor;

  // Create buttons
  colors.forEach(color => {
    const btn = document.createElement("button");
    btn.classList.add("color-btn");
    btn.style.backgroundColor = color;
    btn.addEventListener("click", () => checkColor(color));
    colorButtons.appendChild(btn);
  });
}

// Check if chosen color is correct
function checkColor(selectedColor) {
  if (selectedColor === correctColor) {
    message.textContent = "✅ Correct!";
    currentStreak++;
    if (currentStreak > bestStreak) {
      bestStreak = currentStreak;
      localStorage.setItem("bestStreak", bestStreak);
    }
  } else {
    message.textContent = "❌ Wrong! Try again!";
    currentStreak = 0;
  }

  currentStreakDisplay.textContent = currentStreak;
  bestStreakDisplay.textContent = bestStreak;
  newGame(); // Start next round automatically
}

resetButton.addEventListener("click", () => {
  currentStreak = 0;
  currentStreakDisplay.textContent = currentStreak;
  message.textContent = "";
  newGame();
});

// Start first round
newGame();
