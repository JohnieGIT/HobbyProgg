// 2.5: The random() Function - p5.js Tutorial

var dot = {
x: 100,
y: 50
}

var col = {
	r: 255,
	g: 0,
	b: 0
}

function setup() {
createCanvas(600, 400);
background(0);

}

function draw() {
	
	col.r = random(100, 255);
	col.g = 0;
	col.b = random(100, 255);


	dot.x = random(0, width);
	dot.y = random(0, height);

	noStroke();

	fill(col.r, col.g, col.b, 100);
  ellipse(dot.x, dot.y, 24, 24); 
}

function mousePressed() {

background(0);
}