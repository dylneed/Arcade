var score = 0;
var aWidth;
var aHeight;
var timer;
var iterations = 0;

window.addEventListener('load', setGameAreaBounds);

function setGameAreaBounds() {
	aWidth = innerWidth;
	aHeight = innerHeight;
	aWidth -= 22;
	aHeight -= 97;
	document.getElementById('gameArea').style.width = aWidth + 'px';
	document.getElementById('gameArea').style.height = aHeight + 'px';
	document.getElementById('dot').addEventListener('click', detectHit);
	moveDot();
}

function detectHit() {
	score += 1;
	document.getElementById('scoreLabel').innerHTML= "Score: " + score;
}

function moveDot() {
	var x = Math.floor(Math.random()*(aWidth - 35));
	var y = Math.floor(Math.random()*(aHeight- 35));
	if (x < 35)
		x=35;
	if (y < 35)
		y=35;
	
	document.getElementById('dot').style.left = x +'px';
	document.getElementById('dot').style.top = y +'px';
	
	if (iterations < 30){
		timer = setTimeout("moveDot()", 1000);
	}
	else{
		document.getElementById('scoreLabel').innerHTML += "     Game Over!";
		document.getElementById('dot').removeEventListener("click", detectHit);
		clearTimeout(timer);
		document.getElementById('replay').style.visibility = "visible"
	}
	iterations++;
}

function restart() {
	document.getElementById('scoreLabel').innerHTML = "Score: 0";
	document.getElementById('replay').style.visibility = "hidden"
	score = 0;
	iterations = 0;
	moveDot()
}