// Write a function, maxPathSum, that takes in the root of a binary tree that contains number values.
// The function should return the maximum sum of any root to leaf path within the tree.

// You may assume that the input tree is non-empty.

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

//      3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

// maxPathSum(a); // -> 18

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// recursive soln
// const maxPathSum = (root) => {
//   if(root === null) return -Infinity;
//   const maxChildPathSum = Math.max(maxPathSum(root.left), maxPathSum(root.right));
//   if(root.left === null && root.right === null) return root.val;
//   return maxChildPathSum + root.val;
// };
// n = number of nodes
// Time: O(n)
// Space: O(n)

// module.exports = {
//   maxPathSum,
// };
