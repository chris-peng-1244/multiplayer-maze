class MazeDrawer {
  constructor({ strokeSize, strokeColor, maze, canvas }) {
    this.strokeColor = strokeColor;
    this.strokeSize = strokeSize;
    this.maze = maze;
    this.canvas = canvas;
    this.players = [];
  }

  drawMaze() {
    const pen = this.canvas.getContext('2d');
    pen.fillStyle = this.strokeColor;
    const size = this.strokeSize;
    for (let row = 0; row < this.maze.length; row++) {
      for (let col = 0; col < this.maze[row].length; col++) {
        if (this.maze[row][col] === 0) {
          pen.fillRect(row *  size, col * size, size, size);
        }
      }
    }
  }

  drawFinishPoint(x, y) {
    const pen = this.canvas.getContext('2d');
    pen.fillStyle = 'blue';
    pen.beginPath();
    pen.moveTo((x+0.05)*this.strokeSize, (y + 0.35) * this.strokeSize);
    // upper
    pen.lineTo((x+0.35)*this.strokeSize, (y + 0.35) * this.strokeSize);
    pen.lineTo((x+0.5)*this.strokeSize, (y + 0.05) * this.strokeSize);
    pen.lineTo((x+0.65)*this.strokeSize, (y + 0.35) * this.strokeSize);
    pen.lineTo((x+0.95)*this.strokeSize, (y + 0.35) * this.strokeSize);
    // lower
    pen.lineTo((x+0.75)*this.strokeSize, (y + 0.55) * this.strokeSize);
    pen.lineTo((x+0.85)*this.strokeSize, (y + 0.95) * this.strokeSize);
    pen.lineTo((x+0.5)*this.strokeSize, (y + 0.65) * this.strokeSize);
    pen.lineTo((x+0.15)*this.strokeSize, (y + 0.95) * this.strokeSize);
    pen.lineTo((x+0.25)*this.strokeSize, (y + 0.55) * this.strokeSize);
    pen.lineTo((x+0.05)*this.strokeSize, (y + 0.35) * this.strokeSize);
    pen.closePath();
    pen.fill();
  }

  addPlayer(player) {
    this.players.push(player);
  }

  initPlayers() {
    this.players
      .forEach(player => {
        this._drawPlayer(player);
      });
  }

  movePlayers() {
    this.players
      .filter(player => player.hasMoved())
      .forEach(player => {
        this._clearPreviousPlayer(player);
        this._drawPlayer(player);
      });
  }

  _drawPlayer(player) {
    const pen = this.canvas.getContext('2d');
    pen.beginPath();
    pen.arc(this.strokeSize * (player.x + 0.5), this.strokeSize * (player.y + 0.5), this.strokeSize * .3, 
          0, Math.PI * 2, true);
    pen.fillStyle = '#E41515';
    pen.fill();
  }

  _clearPreviousPlayer(player) {
    const pen = this.canvas.getContext('2d');
    pen.clearRect(this.strokeSize * player.prevX, this.strokeSize * player.prevY, this.strokeSize, this.strokeSize);
  }
}

module.exports = MazeDrawer;