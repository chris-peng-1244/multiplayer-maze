class MazeDrawer {
  constructor({ strokeSize, strokeColor }) {
    this.strokeColor = strokeColor;
    this.strokeSize = strokeSize;
  }

  draw(maze, canvas) {
    const pen = canvas.getContext('2d');
    pen.fillStyle = this.strokeColor;
    const size = this.strokeSize;
    for (let row = 0; row < maze.length; row++) {
      for (let col = 0; col < maze[row].length; col++) {
        if (maze[row][col] === 0) {
          pen.fillRect(row *  size, col * size, size, size);
        }
      }
    }
  }

  createPlayer(canvas) {
    const pen = canvas.getContext('2d');
    pen.beginPath();
    pen.arc(this.strokeSize * 1.5, this.strokeSize * 1.5, this.strokeSize * .3, 0, Math.PI * 2, true);
    pen.fillStyle = '#E41515';
    pen.fill();
  }
}

module.exports = MazeDrawer;