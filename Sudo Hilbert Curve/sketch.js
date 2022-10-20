var order = 2;
var N = Math.pow(2, order);
var total = N * N;
var path = []

function setup() {
  createCanvas(512, 512);
  background(0);
  for (let i = 0; i < total; i++) {
    path[i] = hilbert(i);
    len = width / N;
    path[i].mult(len);
    path[i].add(len / 2, len / 2);
  }
}

function hilbert(i) {
  points = [createVector(0, 0), createVector(0, 1), createVector(1, 1), createVector(1, 0)];
  index = i & 3;
  v = points[index];
  // Bit Masking // verplaatst/removed de achterste 2 bits van de binary representatie van i "hilbert(<i>)"
  i = i >>> 2;
  index = i & 3;
  var lenght = order;
  if (index == 0) {

  } else if (index == 1) {
    v.y+=lenght;
  } else if (index == 2) {
    v.x+=lenght;
    v.y+=lenght;
  } else if (index == 3) {
    v.x+=lenght;
  }
  return v;
}

let counter = 0;
function draw() {
  background(51);
  stroke(255);
  strokeWeight(1);
  noFill();
  beginShape();
  for (let i = 0; i < path.length; i++) {
    vertex(path[i].x, path[i].y);
  }
  endShape();

  strokeWeight(2);
  for (let i = 0; i < path.length; i++) {
    point(path[i].x, path[i].y);
    text(i, path[i].x+5, path[i].y-5);
  }
}