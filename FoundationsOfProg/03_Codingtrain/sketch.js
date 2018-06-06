// 2.1 VARIABLEs in p5, mouseX and mouseY p5.js https://www.youtube.com/watch?v=RnS0YNuLfQQ&index=6&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA


 function setup() {
createCanvas(600, 400); // aa canvas to draw to, happens ONCE
background(250, 250, 100); // kan göra så bakrunden kommer EN gång, och ta bort i draw
}

function draw() {       // is basicly a loop, down and then back up FLOW.
// background(250, 250, 100); // ORDER IT LOADs, if all numbers the same = greyscale, unless 0, 0, 0 then its black


var rng = random(0,50);  // testade lite bara blö


fill(250, 200, 200);
ellipse(mouseX, mouseY, 50, 50);

fill(200, 250, 200);
line(rng, rng, rng, rng); 


fill(200, 250, 200);
rect(400, 100, 50, 50); 
}

function mousePressed() {
background(250, 250, 100);

}

  /*   var img;

function setup() {
	createCanvas(1000, 500);
	background(11, 182, 215);
	img = loadImage("https://i.imgur.com/nU9Oc1A.png");
}

function draw() {
	image(img, mouseX - 250, mouseY);
} */



