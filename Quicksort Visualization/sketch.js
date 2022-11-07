let i = 0;
let w = 10;

function setup() {
   createCanvas(800, 200);
   values = new Array(floor(width / w));
   for (let i = 0; i < values.length; i++) {
      values[i] = random(height);
   }
   frameRate(5);
   quickSort(values, 0, values.length);
}

function quickSort(arr, start, end) {
   if (start >= end) {
      return;
   }
   let index = partition(arr, start, end);
   quickSort(arr, start, index -1);
   quickSort(arr, index + 1, end);
}

function draw() {
  background(51);

  for (let i = 0; i < values.length; i++) {
     stroke(0);
     fill(255);
     rect(i * w, height - values[i], w, values[i]);
  }
}

function swap(arr, a, b) {
   let temp = arr[a];
   arr[a] = arr[b];
   arr[b] = temp;
}
