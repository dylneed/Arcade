var ball;
var paddle;
var score;
var playingArea;
var replay;

var aWidth;
var aHeight;
var pWidth;
var pHeight;

var dx = 2;
var dy = 2;
var pdx = 25;
var currentScore = 0;
var timer;
var paddleLeft = 228;
var ballLeft = 100;
var ballTop = 8;

window.addEventListener('load', init);
window.addEventListener('resize', layoutPage);

function init(){
	ball = document.getElementById('ball');
	paddle = document.getElementById('paddle');
	score = document.getElementById('score');
	playingArea = document.getElementById('playingArea');
	replay = document.getElementById('replay');
	
	layoutPage();
	
	document.addEventListener('keydown',keyListener, false);
	
	timer = requestAnimationFrame(start);
}

function layoutPage(){
	aWidth = innerWidth;
	aHeight = innerHeight;
	pWidth = aWidth - 22;
	pHeight = aHeight - 22;
	playingArea.style.width = pWidth + 'px';
	playingArea.style.height = pHeight + 'px';
}

function keyListener(e) {
	var key = e.keyCode;
	
	if ((key == 37 || key == 65) && paddleLeft > 0){
		paddleLeft -= pdx;
		if (paddleLeft < 0) {paddleLeft = 0;}
	} else if ((key == 39 || key == 68) && paddleLeft < pWidth - 64){
		paddleLeft += pdx;
		if (paddleLeft > pWidth - 64) {paddleLeft = pWidth - 64;}
	}
	
	paddle.style.left = paddleLeft + 'px';
}

function start() {
	render();
	detectCollisions();
	difficulty();
	if (ballTop < pHeight - 36){
		timer = requestAnimationFrame(start);
	} else {gameOver();}
}

function render() {
	moveBall();
	updateScore();
}

function moveBall(){
	ballLeft += dx;
	ballTop += dy;
	ball.style.left = ballLeft + 'px';
	ball.style.top = ballTop +'px';
}

function updateScore() {
	currentScore += 5;
	score.innerHTML = "Score: " + Math.floor(currentScore/100);
}

function detectCollisions() {
	if (collisionX()){
		dx *= -1;
	}
	
	if (collisionY()){
		dy *= -1;
	}
}

function collisionX() {
	if (ballLeft < 4 || ballLeft > pWidth - 20){
		return true;
	}
	return false;
}

function collisionY() {
	if (ballTop < 4){
		return true;
	}
	
	if (ballTop > pHeight - 64){
		if (ballLeft >= paddleLeft && ballLeft <= paddleLeft + 64){
			return true;
		}
	}
	return false;
}

function difficulty(){
	if (currentScore % 1000 == 0) {
		if (dy > 0)
			dy += 1;
		else
			dy -= 1;
	}
}

function gameOver() {
	cancelAnimationFrame(timer);
	score.innerHTML += "     Game Over";
	score.style.backgroundColor = "rgb(128,0,0)";
	replay.style.visibility="visible"
}

function restart() {
	replay.style.visibility = "hidden";
	dx = 2;
	dy = 2;
	pdx = 25;
	currentScore = 0;
	paddleLeft = 228;
	ballLeft = 100;
	ballTop = 8;
	score.innerHTML="Score: 0"
	score.style.backgroundColor = "rgb(32,128,64)";
	start();
}