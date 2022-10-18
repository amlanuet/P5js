var cols, rows;
var w = 40;
var grid = [];

function setup() {
    // put setup code here
    createCanvas(400, 400);
    cols = floor(width / w);
    rows = floor(height / w);

    for (var j = 0; j < rows; j++) {
        for (var i = 0; i < cols; i++) {
            var cell = new Cell(i, j);
            grid.push(cell);
        }
    }
}
function draw() {
    // put drawing code here
    background(51);
    for (let i = 0; i < grid.length; i++) {
        grid[i].show();
    }
}

function Cell(i, j) {
    this.i = i;
    this.j = j;

    this.show = function () {
        var x = this.i * w;
        var y = this.j * w;
        stroke(255);
        noFill();
        rect(x, y, w, w);
    }
}