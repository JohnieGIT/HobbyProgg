//           2.3: JavaScript Objects - p5.js Tutorial


var circle = {  //organizing variables in objects  nice
 x : 0,
 y : 100,
 diameter : 50

};



function setup() {

createCanvas(600, 400);



}

function draw() {
  background(100, 100, 30);

ellipse(circle.x, circle.y, circle.diameter, circle.diameter); 

}