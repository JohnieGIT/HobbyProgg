// 3.2: The Bouncing Ball - p5.js Tutorial
// random som fan xD



var yspeed = 3;
var xspeed = 3;
var x = 200;
var y = 100;

function setup() {
	createCanvas(600, 400);
	

}

function draw() {
background(0);
stroke(255);
strokeWeight(4);
noFill();
ellipse(x, y, 10, 10);


if (x > width) {
xspeed = -3;
}
if (x < 0) {
	xspeed = 3;
}
if (y < 0) {
	yspeed = 3;
}
if (y > height) {
	yspeed = -3;
}
if (y == mouseY) {
   yspeed = -3;
   xspeed = -3;

}

x = x + xspeed;
y = y + yspeed;

}