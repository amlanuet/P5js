let angle = 0;
let w = 24;
let angleSlider;
let offsetSlider;

function setup() {
  createCanvas(400, 400);
  angleSlider = createSlider(0, 2, 0.1, 0.05);
  angleSlider.position(10, height);
  angleSlider.style('width', '80px');
  offsetSlider = createSlider(0, 5, 0.1, 0.05);
  offsetSlider.position(100, height);
  offsetSlider.style('width', '80px');
}

function draw() {
  background(51);

  translate(width / 2, height / 2);
  rectMode(CENTER);

  let offset = 0;
  for (let x = 0; x < width; x+=w) {
    let a = angle + offset;
    let h = map(sin(a), -1, 1, 0, 100);
    fill(255);
    rect(x - width / 2 + w / 2, 0, w - 2, h);
    offset += offsetSlider.value();
  }

  angle += angleSlider.value();
}