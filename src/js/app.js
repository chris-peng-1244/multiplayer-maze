require('./auth');
const MazeGenerator = require('./maze');

const generator = new MazeGenerator(13, 13);
const maze = generator.generate();

const canvas = document.getElementById('maze');
const pen = canvas.getContext('2d');
pen.fillStyle = '#aaa';

const size = 5;
for (let row = 0; row < maze.length; row++) {
  for (let col = 0; col < maze[row].length; col++) {
    if (maze[row][col] === 0) {
      pen.fillRect(col *  size, row * size, size, size);
    }
  }
}