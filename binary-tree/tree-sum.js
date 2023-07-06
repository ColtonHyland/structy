// Write a function, treeSum, that takes in the root of a binary tree that contains number values.
// The function should return the total sum of all values in the tree.

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

// treeSum(a); // -> 21

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// // iterative soln
// const treeSum = (root) => {
//   if(root === null) return 0;
//   let sum = 0;
//   const stack = [ root ]
//   while(stack.length > 0) {
//     const current = stack.pop();
//     sum += current.val;
//     if(current.right !== null) stack.push(current.right);
//     if(current.left !== null) stack.push(current.left);
//   }
//   return sum;
// }
// n = number of nodes
// Time: O(n)
// Space: O(n)
// Note: this solution should really be considered O(n^2) runtime because the JavaScript shift() methods runs in O(n).
// JavaScript does not have a native queue data structure that is maximally efficient.

// recursive soln
// const treeSum = (root) => {
//   if(root === null) return 0;
//   return root.val + treeSum(root.left) + treeSum(root.right);
// };
// n = number of nodes
// Time: O(n)
// Space: O(n)

module.exports = {
  treeSum,
};