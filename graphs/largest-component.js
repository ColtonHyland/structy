// Write a function, largestComponent, that takes in the adjacency list of an undirected graph.
//  The function should return the size of the largest connected component in the graph.

// largestComponent({
//   0: ['8', '1', '5'],
//   1: ['0'],
//   5: ['0', '8'],
//   8: ['0', '5'],
//   2: ['3', '4'],
//   3: ['2', '4'],
//   4: ['3', '2']
// }); // -> 4


// recursive depth first
// n = number of nodes
// e = number edges
// Time: O(e)
// Space: O(n)

const largestComponent = (graph) => {
  let largestSize = 0;
  const visited = new Set();
  for (let node in graph) {
    const componentSize = exploreGraph(graph, node, visited);
    if (componentSize > largestSize) largestSize = componentSize;
  }
  return largestSize;
};

const exploreGraph = (graph, src, visited) => {
  if (visited.has(src)) return 0;
  visited.add(src);
  let size = 1
  for (let neighbor of graph[src]) {
    size += exploreGraph(graph, neighbor, visited);
  }
  return size;
};

module.exports = {
  largestComponent,
};
