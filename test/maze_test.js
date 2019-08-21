const Generator = require('../src/js/maze');

const generator = new Generator(5, 5);
const maze = generator.generate();

for (let row = 0; row < maze.length; row++) {
  let rowString = "";
  for (let col = 0; col < maze[row].length; col++) {
    if (maze[row][col] === 0) {
      rowString += "1";
    } else {
      rowString += " ";
    }
  }
  console.log(rowString);
}