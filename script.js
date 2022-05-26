game = getElementById("game");
title = document.getElementById("title");

function toStartMenu() {
  game.src = "./StartMenu/StartMenu.html";
  title.innerHTML = "Welcome to the Arcade!";
}

function toButtonChaser() {
  game.src = "./ButtonChaser/index.html";
  title.innerHTML = "Welcome to the Arcade! Now Playing: Button Chaser";
}

function toRebound() {
  game.src = "./Rebound/rebound.html";
  title.innerHTML = "Welcome to the Arcade! Now Playing: Rebound";
  game.focus();
}

function toAnimation() {
  game.src = "./AnimationTest/point.html";
  title.innerHTML = "Welcome to the Arcade!";
}