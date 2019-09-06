class Player {
  constructor(x, y, maze) {
    this.x = x;
    this.y = y;
    this.maze = maze;
  }

  moveUp() {
    if (this.maze[this.x][this.y-1] === 1) {
      this.y--;
    }
  }

  moveRight() {
    if (this.maze[this.x+1][this.y] === 1) {
      this.x++;
    }
  }

  moveLeft() {
    if (this.maze[this.x-1][this.y] === 1) {
      this.x--;
    }
  }

  moveDown() {
    if (this.maze[this.x][this.y+1] === 1) {
      this.y++;
    }
  }
}

module.exports = Player;