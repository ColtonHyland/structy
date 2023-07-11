// Write a function, connectedComponentsCount, that takes in the adjacency list of an undirected graph.
// The function should return the number of connected components within the graph.

// connectedComponentsCount({
//   0: [8, 1, 5],
//   1: [0],
//   5: [0, 8],
//   8: [0, 5],
//   2: [3, 4],
//   3: [2, 4],
//   4: [3, 2]
// }); // -> 2

// n = number of nodes
// e = number edges
// Time: O(e)
// Space: O(n)

const connectedComponentsCount = (graph) => {
  let count = 0;
  const visited = new Set();
  
  for (let node in graph) {
    if (explore(Number(node), graph, visited) === true) count++;
  }
  
  return count;
};

const explore = (node, graph, visited) => {
  if (visited.has(node)) return false;
  visited.add(node);
  for (let neighbor of graph[node]) {
    explore(neighbor, graph, visited);
  }
  return true;
}

module.exports = {
  connectedComponentsCount,
};


module.exports = {
  connectedComponentsCount,
};
