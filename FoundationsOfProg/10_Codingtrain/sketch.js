//3.3 else and else  if AND OR

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
ellipse(300, 200, 100, 100);
 }else {
rect(300, 200, 100, 100);
 }



}