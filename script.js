"use strict";
const bodyElement = document.querySelector("body");
const numberElement = document.querySelector(".number");
const message = document.querySelector(".message");

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highScore = 0;

const btnCheck = document
  .querySelector(".check")
  .addEventListener("click", function () {
    let guess = Number(document.querySelector(".guess").value);

    //  No input
    if (!guess) {
      displayMessage("No Number");
    }
    //  Player win
    else if (guess === secretNumber) {
      if (score > highScore) {
        highScore = score;
        document.querySelector(".highscore").textContent = highScore;
      }

      numberElement.textContent = secretNumber;
      displayMessage("Correct Number");
      bodyElement.style.backgroundColor = "#60b347";
      numberElement.style.width = "30rem";
    } else if (guess !== secretNumber) {
      if (score > 1) {
        displayMessage(guess > secretNumber ? "Too hight" : "Too low");
        score--;
        document.querySelector(".score").textContent = score;
      } else {
        message.textContent = "You lost";
        score = 0;
      }
    }
  });

const again = document.querySelector(".again").addEventListener("click", () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;

  numberElement.textContent = "?";
  document.querySelector(".guess").value = "";
  bodyElement.style.backgroundColor = "#222";
  numberElement.style.width = "15rem";
});
