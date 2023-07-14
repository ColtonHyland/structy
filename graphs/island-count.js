//  Write a function, islandCount, that takes in a grid containing Ws and Ls.
//  W represents water and L represents land. The function should return the
//  number of islands on the grid. An island is a vertically or horizontally
//  connected region of land.

// const grid = [
//   ['W', 'L', 'W', 'W', 'W'],
//   ['W', 'L', 'W', 'W', 'W'],
//   ['W', 'W', 'W', 'L', 'W'],
//   ['W', 'W', 'L', 'L', 'W'],
//   ['L', 'W', 'W', 'L', 'L'],
//   ['L', 'L', 'W', 'W', 'W'],
// ];

// islandCount(grid); // -> 3

// r = number of rows
// c = number of columns
// Time: O(rc)
// Space: O(rc)

const islandCount = (grid) => {
  let count = 0;
  const visited = new Set();
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (exploreGraph(grid, row, col, visited) === true) count++;
    }
  }
  
  return count;
};

const exploreGraph = (grid, row, col, visited) => {
  const rowInbounds = 0 <= row && row < grid.length;
  const colInbounds = 0 <= col && col < grid[0].length;
  if (!rowInbounds || !colInbounds) return false;
  
  if(grid[row][col] === 'W') return false;
  
  const pos = row + ',' + col;
  if (visited.has(pos)) return false;
  visited.add(pos);
  
  exploreGraph(grid, row - 1, col, visited);
  exploreGraph(grid, row + 1, col, visited);
  exploreGraph(grid, row, col - 1, visited);
  exploreGraph(grid, row, col + 1, visited);
  
  return true;
};

module.exports = {
  islandCount,
};