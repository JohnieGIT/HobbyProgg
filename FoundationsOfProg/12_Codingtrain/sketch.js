//4.1: while and for Loops
//4.2 Nested Loops



function setup() {
	createCanvas(600, 400);
	

}

function draw() {
 background(0);
 strokeWeight(4);
 stroke(255);

//var x = 0;
//while (x <= width) {
//	fill(0,200,255);
// ellipse(x, 200, 25, 25);
//x = x + 50;
//}

for(var x = 0; x <= width; x+=50) {
	for (var y = 0; y <= height; y+=50){


fill(random(255),0,random(255));
	ellipse(x , y, 25, 25);
	
}
}


}