// Write a function, undirectedPath, that takes in an array of edges for an undirected graph
// and two nodes (nodeA, nodeB). The function should return a boolean indicating whether or
// not there exists a path between nodeA and nodeB.

const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = {};
  for (let edge of edges) {
    graph[edge[0]] = edge[1];
    graph[edge[1]] = edge[0];
  }
  console.log(graph)
};

module.exports = {
  undirectedPath,
};

const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];

undirectedPath(edges, 'j', 'm'); // -> true