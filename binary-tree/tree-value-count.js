// Write a function, treeValueCount, that takes in the root of a binary tree and a target value.
// The function should return the number of times that the target occurs in the tree.

// const a = new Node(12);
// const b = new Node(6);
// const c = new Node(6);
// const d = new Node(4);
// const e = new Node(6);
// const f = new Node(12);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

//      12
//    /   \
//   6     6
//  / \     \
// 4   6     12

// treeValueCount(a,  6); // -> 3

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// recursive soln
// const treeValueCount = (root, target) => {
//   if(root === null) return 0;
//   const count = root.val === target ? 1 : 0;
//   return count + treeValueCount(root.left, target) + treeValueCount(root.right, target)
// };
//n = number of nodes
// Time: O(n)
// Space: O(n)

// iterative soln
// const treeValueCount = (root, target) => {
//   let count = 0;
//   if(root === null) return count;
//   const stack = [ root ];
//   while(stack.length !== 0) {
//     const current = stack.pop();
//     if(current.val === target) count++;
//     if(current.right !== null) stack.push(current.right);
//     if(current.left !== null) stack.push(current.left);
//   }
//   return count;
// };
//n = number of nodes
// Time: O(n)
// // Space: O(n)

// module.exports = {
//   treeValueCount,
// };
