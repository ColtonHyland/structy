// longest path
// Write a function, longestPath, that takes in an adjacency list for a directed acyclic graph.
// The function should return the length of the longest path within the graph.
// A path may start and end at any two nodes. The length of a path is considered the number
// of edges in the path, not the number of nodes.

// const graph = {
//   a: ['c', 'b'],
//   b: ['c'],
//   c: []
// };

// longestPath(graph); // -> 2

// e = # edges
// n = # nodes
// Time: O(e)
// Space: O(n)
const longestPath = (graph) => {
  const distance = {};
  for (let node in graph) {
    if (graph[node].length === 0) {
      distance[node] = 0;
    }
  }
  
  for (let node in graph) {
    traverseDistance(graph, node, distance)
  }
  
  return Math.max(...Object.values(distance));
};

const traverseDistance = (graph, node, distance) => {
  if (node in distance) return distance[node];
  
  let maxLength = 0;
  for (let neighbor of graph[node]) {
    const attempt = traverseDistance(graph, neighbor, distance);
    if (attempt > maxLength) maxLength = attempt;
  }
  
  distance[node] = maxLength + 1;
  return distance[node];
};

module.exports = {
  longestPath,
};
