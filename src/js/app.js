const Maze = require('amazejs');

const size = 5;
const canvas = document.getElementById('maze');
const maze = new Maze.Backtracker(canvas.width/size, canvas.height/size);
maze.generate();

const pen = canvas.getContext('2d');
pen.fillStyle = '#aaa';

for (let row = 0; row < maze.height; row++) {
  for (let col = 0; col < maze.width; col++) {
    if (maze.get(row, col)) {
      pen.fillRect(col *  size, row * size, size, size);
    }
  }
}