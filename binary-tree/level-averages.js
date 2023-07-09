// Write a function, levelAverages, that takes in the root of a binary tree that contains number values.
// The function should return an array containing the average value of each level.

// const a = new Node(3);
// const b = new Node(11);
// const c = new Node(4);
// const d = new Node(4);
// const e = new Node(-2);
// const f = new Node(1);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

// levelAverages(a); // -> [ 3, 7.5, 1 ] 

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

//recursive soln
// const levelAverages = (root) => {
//   const avgs = [];
//   const levels = [];
//   levelAveragesHelper(root, levels, 0)
//   for (let level of levels) {
//     avgs.push(getAvg(level));
//   }
//   return avgs;
// };

// const levelAveragesHelper = (node, levels, level) => {
//   if(node === null) return;
//   if(levels.length === level) {
//     levels.push([ node.val ])
//   } else {
//     levels[level].push(node.val)
//   }
//   levelAveragesHelper(node.left, levels, level + 1);
//   levelAveragesHelper(node.right, levels, level + 1);
//   return levels;
// };

// const getAvg = (arr) => {
//   let sum = 0;
//   for(let num of arr) {
//     sum += num;
//   }
//   return sum / arr.length;
// };
// n = number of nodes
// Time: O(n)
// Space: O(n)

module.exports = {
  levelAverages,
};
