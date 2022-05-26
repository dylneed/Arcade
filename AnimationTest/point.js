var w = innerWidth;
var h = innerHeight;
var currentX = 100;
var currentY = 100;
var currentR = 0;
var dx = 2;
var dy = 2;
var dr = 1;

window.addEventListener('load', animate);
window.addEventListener('load', blink);
window.addEventListener('load', bounce);

function animate() {
	document.getElementById('ball').style.left = currentX + 'px';
	document.getElementById('ball').style.top = currentY + 'px';
	document.getElementById('ball').style.transform = 'rotate(' + currentR + 'deg)';
	
	currentX += dx;
	currentY += dy;
	currentR += dr;
	
	if (currentX > w - 200 || currentX < 1){
		dx = -1 * dx;
		dr = -1 * dr;
	}
	
	if (currentY > h - 200 || currentY < 1)
	{
		dy = -1 * dy;
		dr = -1 * dr;
	}
	setTimeout('animate()', 1);
}

function blink(){
	var i = Math.floor(Math.random()*16777215);
	
	document.getElementById('text').style.color = '#' + i.toString(16);
	
	setTimeout('blink()',100);
}


var dh = 5;
var currentH = 0;
function bounce() {
	document.getElementById('text').style.top = currentH + 'px';
	
	currentH += dh;
	if (currentH > h - 100||currentH < 0)
	{
		dh = -1 * dh;
	}
	
	setTimeout('bounce()', 1);
}