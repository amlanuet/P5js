var cols, rows;
var w = 40;
var grid = [];

function setup() {
    // put setup code here
    colorMode(HSB);
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
        // line from top left of each cell to the top right of each cell
        // RED
        stroke(1, 100, 100);
        line(x, y, x + w, y);
        // line from top left of each cell to the bottom left of each cell
        // YELLOW
        stroke(60, 100, 100);
        line(x, y, x, y + w);
        // line from top right of each cell to the bottom right of each cell
        // Green
        stroke(110, 100, 100);
        line(x + w + 5, y, x + w + 5, y + w);
        // line from bottom left of each cell to the bottom right of each cell
        // BLUE
        stroke(250, 100, 100);
        line(x, y + w + 5, x + w, y + w + 5);
        // noFill();
        // rect(x, y, w, w);
    }
}