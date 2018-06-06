//    2.4: The map() Function - p5.js Tutorial
// 2.4: The map() Function - p5.js Tutorial



var boll = {

x:10,
y:10,
rad:50

}

var col = 0;




function setup() {
createCanvas(600, 400);
}

function draw() {
	
	col=map(mouseX,0,600,0,255);   // map function använder 2 olika RANGEs och typ smälter ihop de.
  background(col);

ellipse(boll.x, boll.y, boll.rad, boll.rad);




}