// Write a function, leafList, that takes in the root of a binary tree and returns an array
// containing the values of all leaf nodes in left-to-right order.

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

// leafList(a); // -> [ 'd', 'e', 'f' ] 

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

//recursive soln
// const leafList = (root) => {
//   const leafs = [];
//   findLeafs(root, leafs);
//   return leafs;
// };

// const findLeafs = (node, leafs) => {
//   if (node === null) return;
//   if (node.left === null && node.right === null) leafs.push(node.val);
//   findLeafs(node.left, leafs);
//   findLeafs(node.right, leafs);
// };
// n = number of nodes
// Time: O(n)
// Space: O(n)

// depth first iterative soln
// const leafList = (root) => {
//   if (root === null) return [];
//   const leafs = [];
//   const stack = [ root ];
//   while (stack.length > 0) {
//     const node = stack.pop();
//     if (node.left === null && node.right === null) leafs.push(node.val);
//     if (node.right !== null) stack.push(node.right);
//     if (node.left !== null) stack.push(node.left);
//   }
//   return leafs;
// };
// n = number of nodes
// Time: O(n)
// Space: O(n)

module.exports = {
  leafList,
};
