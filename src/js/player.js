class Player {
  constructor(x, y, maze) {
    this.x = x;
    this.y = y;
    this.prevX = x;
    this.prevY = y;
    this.maze = maze;
  }

  moveUp() {
    if (this.maze[this.x][this.y-1] === 1) {
      this._savePrevState();
      this.y--;
    }
  }

  _savePrevState() {
    this.prevX = this.x;
    this.prevY = this.y;
  }

  moveRight() {
    if (this.maze[this.x+1][this.y] === 1) {
      this._savePrevState();
      this.x++;
    }
  }

  moveLeft() {
    if (this.maze[this.x-1][this.y] === 1) {
      this._savePrevState();
      this.x--;
    }
  }

  moveDown() {
    if (this.maze[this.x][this.y+1] === 1) {
      this._savePrevState();
      this.y++;
    }
  }

  hasMoved() {
    return this.x != this.prevX || this.y != this.prevY;
  }
}

module.exports = Player;