// Write a function, treeIncludes, that takes in the root of a binary tree and a target value.
// The function should return a boolean indicating whether or not the value is contained in the tree.

// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");
// const e = new Node("e");
// const f = new Node("f");

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

// treeIncludes(a, "e"); // -> true

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// depth-first iterative soln
// const treeIncludes = (root, target) => {
//   if(root === null) return false;
//   const stack = [ root ];
//   while(stack.length > 0) {
//     const current = stack.pop();
//     if(current.val === target) return true;
//     if(current.left !== null) stack.push(current.left);
//     if(current.right !== null) stack.push(current.right);
//   }
//   return false;
// };
// n = number of nodes
// Time: O(n)
// Space: O(n)
// Note: this solution should really be considered O(n^2) runtime because the JavaScript shift() methods runs in O(n).
//  JavaScript does not have a native queue data structure that is maximally efficient.

// depth first recursive soln
// const treeIncludes = (root, target) => {
//   if(root === null) return false;
//   if(root.val === target) return true;
//   return treeIncludes(root.left, target) || treeIncludes(root.right, target); 
// };
// n = number of nodes
// Time: O(n)
// Space: O(n)

// module.exports = {
//   treeIncludes,
// };
