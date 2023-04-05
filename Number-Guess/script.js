"use strict";
// setting dom elements to variables
const secretNumberEl = document.querySelector(".secret-number");
const messageInfoEl = document.querySelector(".message-infos");
const scoreEl = document.querySelector(".score");
const highscoreEl = document.querySelector(".highscore");
const againBtnEl = document.querySelector(".btn-again");
const checkBtnEl = document.querySelector(".btn-check");
const guessEl = document.querySelector(".input-guess");
const bodyEl = document.querySelector("body");
const localHighscore = Number(
  localStorage.getItem("project-guess-number-highscore")
);
let highscore = 0;

if (localHighscore > 0) {
  highscore = localHighscore;
  highscoreEl.textContent = highscore;
}
let score;
let secretNumber;

function displayMessage(message) {
  messageInfoEl.textContent = message;
}
function init() {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  secretNumberEl.textContent = "?";
  messageInfoEl.textContent = "Start guessing....";
  scoreEl.textContent = score;
  checkBtnEl.disabled = false;
  if (bodyEl.classList.contains("winner")) {
    bodyEl.classList.remove("winner");
  } else if (bodyEl.classList.contains("loser")) {
    bodyEl.classList.remove("loser");
  }
}

init();
againBtnEl.addEventListener("click", function () {
  console.log("again button pressed");
  init();
});

checkBtnEl.addEventListener("click", checkSecretNumber);
guessEl.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    checkSecretNumber();
  }
});

function checkSecretNumber() {
  const guess = Number(guessEl.value);
  if (!guess) {
    displayMessage("⛔️ No number!");
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    checkBtnEl.disabled = true;
    secretNumberEl.textContent = secretNumber;
    bodyEl.classList.add("winner");
    if (score > highscore) {
      highscore = score;
      localStorage.setItem("project-guess-number-highscore", highscore);
      highscoreEl.textContent = highscore;
    }
  } else {
    displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
    score--;
    scoreEl.textContent = score;
    if (score == 0) {
      displayMessage("💥 You lost the game!");
      secretNumberEl.textContent = secretNumber;
      checkBtnEl.disabled = true;
      bodyEl.classList.add("loser");
    }
  }
}
