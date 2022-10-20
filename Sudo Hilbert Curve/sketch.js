colored = true;
var order = 4;
var N = Math.pow(2, order);
var total = N * N;
var path = []
var direction = 1;

function setup() {
  colorMode(HSB,360,255,255)
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
  for (let j = 1; j < order; j++) {
    // Bit Masking // verplaatst/removed de achterste 2 bits van de binary representatie van i "hilbert(<i>)"
    i = i >>> 2;
    index = i & 3;
    var lenght = Math.pow(2, j);
    if (index == 0) {
      // verwissel index 1 en 3
      var temp = v.x
      v.x = v.y;
      v.y = temp;
    } else if (index == 1) {
      v.y += lenght;
    } else if (index == 2) {
      v.x += lenght;
      v.y += lenght;
    } else if (index == 3) {
      // verwissel index 0 en 2
      var temp = lenght - 1 - v.x
      v.x = lenght - 1 - v.y
      v.y = temp
      v.x += lenght;
    }
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
  noFill()
  for (var i = 1; i < counter; i++) {
    if (colored) {
      h = map(i, 0, path.length, 0, 360)
      stroke(h, 255, 255)
    } else {
      stroke(255)
    }
    line(path[i].x, path[i].y, path[i - 1].x, path[i - 1].y)
  }
  endShape();
  counter += direction;
  if (counter == path.length) {
    direction = -1;
  } else if (counter == 0) {
    direction = 1;
  }

  // strokeWeight(2);
  // for (let i = 0; i < path.length; i++) {
  //   point(path[i].x, path[i].y);
  //   text(i, path[i].x + 5, path[i].y - 5);
  // }
}