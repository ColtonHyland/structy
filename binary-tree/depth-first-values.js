// Write a function, depthFirstValues, that takes in the root of a binary tree.
// The function should return an array containing all values of the tree in depth-first order.

// Hey. This is our first binary tree problem, so be extra sure to check out the approach video! -AZ

// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const f = new Node('f');

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

// depthFirstValues(a); 
//    -> ['a', 'b', 'd', 'e', 'c', 'f']
// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }
// n = number of nodes
// Time: O(n)
// Space: O(n)

// iterative soln
// const depthFirstValues = (root) => {
//   if (root === null) return [];
//   const result = [];
//   const stack = [ root ];
//   while(stack.length > 0) {
//     const current = stack.pop();
//     result.push(current.val);
//     if(current.right) stack.push(current.right);
//     if(current.left) stack.push(current.left);
//   }
//   return result;
// };
// n = number of nodes
// Time: O(n)
// Space: O(n)

// recursive soln
// const depthFirstValues = (root) => {
//   if(root === null) return [];
//   const leftValues = depthFirstValues(root.left);
//   const rightValues = depthFirstValues(root.right);
//   return [root.val, ...leftValues, ...rightValues];
// };

// module.exports = {
//   depthFirstValues,
// };
