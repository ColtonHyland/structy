// Write a function, bottomRightValue, that takes in the root of a binary tree.
//  The function should return the right-most value in the bottom-most level of the tree.

// You may assume that the input tree is non-empty.

// const a = new Node(3);
// const b = new Node(11);
// const c = new Node(10);
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
//   11     10
//  / \      \
// 4   -2     1

// bottomRightValue(a); // -> 1

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// iterative soln
const bottomRightValue = (root) => {
  const queue = [ root ]
  let deepest = root;
  while(queue.length > 0) {
    deepest = queue.shift();
    if(deepest.left !== null) queue.push(deepest.left);
    if(deepest.right !== null) queue.push(deepest.right);
  }
  return deepest.val;
};

// n = number of nodes
// Time: O(n)
// Space: O(n)
// Note: this solution should really be considered O(n^2) runtime because the JavaScript shift() methods runs in O(n).
// JavaScript does not have a native queue data structure that is maximally efficient.

module.exports = {
  bottomRightValue,
};