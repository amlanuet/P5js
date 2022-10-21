let angle = 0;
let w = 24;
let angleSlider;
let offsetSlider;

function setup() {
  createCanvas(400, 400, WEBGL);
  angleSlider = createSlider(0, 2, 0.1, 0.05);
  angleSlider.position(10, height);
  angleSlider.style('width', '80px');
  offsetSlider = createSlider(0, 5, 0.1, 0.05);
  offsetSlider.position(100, height);
  offsetSlider.style('width', '80px');
}

function draw() {
  background(51);
  ortho();
  directionalLight(255, 255, 255, 0, -1, 0)
  translate(0, 50, -50)
  rotateX(-PI / 8)
  // translate(width / 2, height / 2);
  rectMode(CENTER);
  // spin op x As
  // rotateX(angle * 0.25)

  let offset = 0;
  for (let x = 0; x < width; x += w) {
    push();
    let a = angle + offset;
    let h = map(sin(a), -1, 1, 0, 100);
    translate(x - width / 2, 0, 0);
    normalMaterial(255);
    box(w - 2, h, w);
    // rect(x - width / 2 + w / 2, 0, w - 2, h);
    offset += offsetSlider.value();
    pop();
  }

  angle += angleSlider.value();
}