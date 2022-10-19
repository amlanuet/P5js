function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(51);
  stroke(255);
  branch(50);
}

// teken de stam van de boom
function branch(len) {
  line(200, height, 200, height - len);

}