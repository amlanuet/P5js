let angle = 0;
let w = 24;
let magicYangle;
let oa = 350; // ortho zoom amount
let maxD;
let angleSlider;
let offsetSlider;

function setup() {
  createCanvas(400, 400, WEBGL);
  magicYangle = atan(1 / sqrt(2));
  maxD = dist(0, 0, 200, 200)
  angleSlider = createSlider(0, 2, 0.1, 0.05);
  angleSlider.position(10, height);
  angleSlider.style('width', '80px');
  offsetSlider = createSlider(0, 5, 0.1, 0.05);
  offsetSlider.position(100, height);
  offsetSlider.style('width', '80px');
}

function draw() {
  background(51);
  ortho(-oa, oa, -oa, oa, -750, 750);
  pointLight(255, 184, 90, 0, 0, 500);
  pointLight(221, 34, 65, -500, -250, 0);
  pointLight(79, 168, 168, 500, 250, 0);



  translate(0, 50, -50);
  rotateX(-QUARTER_PI);
  rotateY(magicYangle);

  // spin op x As
  // rotateX(angle * 0.025)

  for (let z = 0; z < height; z += w) {
    for (let x = 0; x < width; x += w) {
      push();
      let d = dist(x, z, width / 2, height / 2)
      let offset = map(d, 0, maxD, -3, 3);
      let a = angle + offset;
      let h = floor(map(sin(a), -1, 1, 75, 300));
      translate(x - width / 2, 0, z - height / 2);
      ambientMaterial(255, 255, 255);
      // normalMaterial();
      box(w - 2, h, w - 2);
      // rect(x - width / 2 + w / 2, 0, w - 2, h);
      pop();
    }
  }
  angle += angleSlider.value();
}