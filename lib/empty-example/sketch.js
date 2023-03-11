var cellSize = 40;
var rows,cols;
var grid = [];

function setup() {
  createCanvas(400, 400);
  rows = floor(height/cellSize);
  cols = floor(width/cellSize);

  for(var j = 0; j < rows; j++) {
    for(var i = 0; i < cols; i++) {
      var cell = new Cell(i,j);
      grid.push(cell);
    }
  }
}

function draw() {
  // put drawing code here
  background(51);
  for(var i = 0; i < grid.length; i++) {
    grid[i].show();
  }
}

function Cell(i,j) {
  this.i = i;
  this.j = j;

  this.show = function() {
    var x = this.i * cellSize;
    var y = this.j * cellSize;
    stroke(255);
    noFill();
    rect(x,y,cellSize,cellSize);
  }
}
