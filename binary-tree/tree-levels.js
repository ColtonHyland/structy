// Write a function, treeLevels, that takes in the root of a binary tree.
// The function should return a 2-Dimensional array where each subarray represents a level of the tree.

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

// treeLevels(a); // ->
// [
//   ['a'],
//   ['b', 'c'],
//   ['d', 'e', 'f']
// ]

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// depth first iterative soln
// const treeLevels = (root) => {
//   if(root === null) return [];
//   const levels = [];
//   const stack = [ {node: root, level: 0} ]
  
//   while(stack.length > 0) {
//     const { node, level } = stack.pop();
    
//     if(levels.length === level) {
//       levels.push([ node.val ]);
//     } else {
//       levels[level].push(node.val);
//     }
    
//     if(node.right !== null) stack.push({ 
//       node: node.right,
//       level: level + 1
//       });
//     if(node.left !== null) stack.push({
//       node: node.left,
//       level: level + 1
//       });
//   }
//   return levels;
// };

module.exports = {
  treeLevels,
};
