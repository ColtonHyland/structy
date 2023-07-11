// Write a function, hasPath, that takes in an object representing the adjacency list of a
// directed acyclic graph and two nodes (src, dst). The function should return a boolean
// indicating whether or not there exists a directed path between the source and destination nodes.

// Hey. This is our first graph problem, so you should be liberal with watching the Approach and Walkthrough. Be productive, not stubborn. -AZ

// const graph = {
//   f: ['g', 'i'],
//   g: ['h'],
//   h: [],
//   i: ['g', 'k'],
//   j: ['i'],
//   k: []
// };

// hasPath(graph, 'f', 'k'); // true

// recursive
// const hasPath = (graph, src, dst) => {
//   if (src === dst) return true;
//   for (let neighbor of graph[src]) {
//     if (hasPath(graph, neighbor, dst) === true) return true
//   }
//   return false;
// };

// // depth first iterative soln
// const hasPath = (graph, src, dst) => {
//   const stack = [ src ];
//   while(stack.length > 0) {
//     const current = stack.pop();
//     for (let neighbor of graph[current]) {
//       if (neighbor === dst) return true;
//       stack.push(neighbor);
//     }
//   }
//   return false;
// };
// n = number of nodes
// e = number edges
// Time: O(e)
// Space: O(n)

// breadth first
// const hasPath = (graph, src, dst) => {
//   const queue = [src];

//   while (queue.length) {
//     const current = queue.shift();
//     if (current === dst) return true;

//     for (let neighbor of graph[current]) {
//       queue.push(neighbor);
//     }
//   }

//   return false;
// };
// n = number of nodes
// e = number edges
// Time: O(e)
// Space: O(n)

module.exports = {
  hasPath,
};
module.exports = {
  hasPath,
};
