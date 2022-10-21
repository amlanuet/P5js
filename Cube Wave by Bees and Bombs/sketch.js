let angle = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(51);

  translate(width / 2, height / 2);
  rectMode(CENTER);

  for (let x = 0; x < width; x+=10) {
    let h = map(sin(angle), -1, 1, 0, 100);
    fill(255);
    rect(x - width / 2, 0, 10, h);
    
  }

  angle += 0.1;
}