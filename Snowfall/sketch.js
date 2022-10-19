let snow = [];
let gravity;

let zOff = 0;

let spriteSheet;
let textures = [];

function preload() {
  spriteSheet = loadImage('flakes32.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  gravity = createVector(0, 0.1);
  for (let x = 0; x < spriteSheet.width; x += 32) {
    for (let y = 0; y < spriteSheet.height; y += 32) {
      let img = spriteSheet.get(x, y, 32, 32);
      image(img, x, y);
      textures.push(img);
    }
  }
  for (let i = 0; i < 400; i++) {
    let x = random(width);
    let y = random(height);
    let design = random(textures);
    snow.push(new SnowFlake(x, y, design));
  }

}

function draw() {
  background(0);
  zOff += 0.01;

  for (flake of snow) {
    let xOff = flake.pos.x / width;
    let yOff = flake.pos.y / height;
    let wAngle = noise(xOff, yOff, zOff) * TWO_PI;
    let wind = p5.Vector.fromAngle(wAngle);
    wind.mult(0.1)

    flake.applyForce(gravity);
    flake.applyForce(wind);
    flake.update();
    flake.render();
  }

  // for (let i = snow.length - 1; i >= 0; i--) {
  //   if (snow[i].offScreen()) {
  //     snow.splice(i, 1)
  //   }
  // }
}