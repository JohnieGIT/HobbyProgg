// 3.1: Introduction to Conditional Statements - p5.js Tutorial

var posH = 200;
var sizeB = 100;



function setup() {
	createCanvas(600, 400);
	
}

function draw() {

background(0);

stroke(255);
strokeWeight(4);
noFill();

if (mouseX > 300) {
	fill(255, 0, 200);

}

if (mouseX > 300) {
 posH++;
 sizeB++;
}
if (mouseX < 300) {
	posH--;
	sizeB--;
}

ellipse(300, posH, sizeB, sizeB);



}