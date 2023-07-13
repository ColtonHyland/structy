// shortest path
// Write a function, shortestPath, that takes in an array of edges for an undirected
// graph and two nodes (nodeA, nodeB). The function should return the length of the
// shortest path between A and B. Consider the length as the number of edges in the
// path, not the number of nodes. If there is no path between A and B, then return -1.

// const edges = [
//   ['w', 'x'],
//   ['x', 'y'],
//   ['z', 'y'],
//   ['z', 'v'],
//   ['w', 'v']
// ];

//shortestPath(edges, 'w', 'z'); // -> 2


//breadth frist traversal
// e = number edges
// Time: O(e)
// Space: O(e)

const shortestPath = (edges, nodeA, nodeB) => {
  const graph = createGraph(edges);
  const visited = new Set();
  const queue = [ [nodeA, 0] ];
  while (queue.length > 0) {
    const [ current, distance ] = queue.shift();
    if (current === nodeB) return distance;
    
    for (let neighbor of graph[current]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([neighbor, distance + 1]);
      }
    }
  }
  return -1;
};

const createGraph = (edges) => {
  const graph = {};
  for (let edge of edges) {
    const [ a, b ] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
};


module.exports = {
  shortestPath,
};
