require('./auth');
const MazeGenerator = require('./maze');
const MazeDrawer = require('./maze_drawer');

const generator = new MazeGenerator(13, 13);
const maze = generator.generate();

const canvas = document.getElementById('maze');
const drawer = new MazeDrawer({
  strokeSize: 10,
  strokeColor: '#000'
});
drawer.draw(maze, canvas);