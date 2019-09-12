require('./auth');
const MazeGenerator = require('./maze_generator');
const MazeDrawer = require('./maze_drawer');
const Player = require('./player');

const generator = new MazeGenerator(13, 13);
const maze = generator.generate();

const canvas = document.getElementById('maze');
const drawer = new MazeDrawer({
  strokeSize: 20,
  strokeColor: '#000',
  maze,
  canvas,
});
drawer.drawMaze();

const player = new Player(1, 1, maze);
drawer.addPlayer(player);
drawer.initPlayers();
drawer.drawFinishPoint(maze.length - 2, maze[0].length - 2);

bindPlayerMovements(player, drawer);

function bindPlayerMovements(player, drawer) {
  const validKeys = [37,38, 39, 40];
  window.addEventListener('keydown', e => {
    const keyCode = e.keyCode;
    if (validKeys.indexOf(keyCode) === -1) {
      return;
    }
    e.preventDefault();
    if (keyCode === 37) {
      // Go left
      player.moveLeft();
    } else if (keyCode === 38) {
      player.moveUp();
    } else if (keyCode === 39) {
      player.moveRight();
    } else if (keyCode === 40) {
      player.moveDown();
    }
    drawer.movePlayers();
    if (isMazeSolved(player)) {
      alert('You win!');
    }
  });
}

function isMazeSolved(player) {
  return player.x == maze.length - 2 && player.y == maze[0].length - 2;
}