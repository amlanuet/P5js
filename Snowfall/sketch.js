let snow = [];
let gravity;

let spriteSheet;
let textures = [];

function preload() {
  spriteSheet = loadImage('flakes32.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  gravity = createVector(0, 0.02);
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

  for (flake of snow) {
    flake.applyForce(gravity);
    flake.update();
    flake.render();
  }

  // for (let i = snow.length - 1; i >= 0; i--) {
  //   if (snow[i].offScreen()) {
  //     snow.splice(i, 1)
  //   }
  // }
}