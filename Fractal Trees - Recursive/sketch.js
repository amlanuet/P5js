function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(51);

  // teken de stam van de boom
  var len = 100;
  stroke(255);
  line(200, height, 200, height - len);
}