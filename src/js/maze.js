class MazeGenerator {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.dWidth = 2 * width + 1
    this.dHeight = 2 * height + 1
  }

  generate() {
    const grid = this._initGrid();
    this._carvePassage(grid, 1, 1);
    return grid;
  }

  _initGrid() {
    let grid = []
    for (let i = 0; i < this.dHeight; i++) {
      grid[i] = [];
      for (let j = 0; j < this.dWidth; j++) {
        grid[i].push(0);
      }
    }
    return grid;
  }

  _findNeighbors(grid, row, col) {
    const neighbors = []
    if (row > 1 && grid[row - 2][col] === 0) {
      neighbors.push([row - 2, col])
    }
    if (row < this.dHeight - 2 && grid[row + 2][col] === 0) {
      neighbors.push([row + 2, col])
    }
    if (col > 1 && grid[row][col - 2] === 0) {
      neighbors.push([row, col - 2])
    }
    if (col < this.dWidth - 2 && grid[row][col + 2] === 0) {
      neighbors.push([row, col + 2])
    }
    return shuffle(neighbors)
  }

  _carvePassage(grid, startRow, startCol) {
    const tracks = [[startRow, startCol]]
    grid[startRow][startCol] = 1

    let neighbors;
    while (tracks.length > 0) {
      const [row, col] = tracks[tracks.length - 1]
      neighbors = this._findNeighbors(grid, row, col)
      if (neighbors.length === 0) {
        tracks.pop();
      } else {
        const [ nrow, ncol ] = neighbors[0]
        grid[nrow][ncol] = 1
        grid[intDivide((nrow + row), 2)][intDivide(ncol + col, 2)] = 1
        tracks.push([nrow, ncol])
      }
    }
  }
}

function intDivide(a, b) {
  return Math.floor(a/b);
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

module.exports = MazeGenerator;
