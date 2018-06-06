// 2.2 Variablaes in p5.js 
// 1 Declare that the variable exists, just write the term VAR, var.
// 2 Initialize! give that shit a name, var test.
// 3 Use the variable! 


var circleX = 50; // assignment operation.


function setup() {

createCanvas(600, 400);

}

function draw() {
circleX++;
  background(250, 200, 200);

fill(0, 200, 0);
ellipse(circleX, 200, 80, 80);
circleX=circleX+1;




}