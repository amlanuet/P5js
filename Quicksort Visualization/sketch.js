let values = [];
let w = 10;

let states = [];

function setup() {
   createCanvas(800, 200);
   values = new Array(floor(width / w));
   for (let i = 0; i < values.length; i++) {
      values[i] = random(height);
      states[i] = -1;
   }
   // frameRate(5);
   quickSort(values, 0, values.length -1);
}

async function quickSort(arr, start, end) {
   if (start >= end) {
      return;
   }
   let index = await partition(arr, start, end);
   states[index] = -1;

   await Promise.all([
      quickSort(arr, start, index -1),
      quickSort(arr, index + 1, end)
   ]);
}

await function partition(arr, start, end) {
   for (let i = start; i < end; i++) {
      states[i] = 1;
   }
   let pivotValue = arr[end];
   let pivotIndex = start;
   for (let i = start; i < end; i++) {
      if (arr[i] < pivotValue) {
         await swap(arr, i, pivotIndex);
         pivotIndex++;
         states[pivotIndex] = 0;
      }
   }
   await swap(arr, pivotIndex, end);
   for (let i = start; i < end; i++) {
      if (i != pivotIndex) {
         states[i] = -1;
      }
   }
   return pivotIndex;
}

function draw() {
  background(51);

  for (let i = 0; i < values.length; i++) {
     noStroke();
     if (states[i] == 0) {
        fill('#E0767E');
     } else if (states[i] == 1) {
        fill('#D6FFD4');
     } else {
        fill(255);
     }
     rect(i * w, height - values[i], w, values[i]);
  }
}

async function swap(arr, a, b) {
   await sleep(50);
   let temp = arr[a];
   arr[a] = arr[b];
   arr[b] = temp;
}

function sleep(ms) {
   return new Promise(resolve => setTimeout(resolve, ms));
}
