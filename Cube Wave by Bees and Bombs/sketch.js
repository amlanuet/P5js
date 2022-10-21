let angle = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(51);

  translate(width / 2, height / 2);
  rectMode(CENTER);

  let h = map(sin(angle), -1, 1, 0, 100);
  fill(255);
  rect(0, 0, 10, h);

  angle += 0.1;
}