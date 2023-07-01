// Write a function, isUnivalueList, that takes in the head of a linked list as an argument.
// The function should return a boolean indicating whether or not the linked list contains
// exactly one unique value.
// You may assume that the input list is non-empty.

// const a = new Node(7);
// const b = new Node(7);
// const c = new Node(7);

// a.next = b;
// b.next = c;

// 7 -> 7 -> 7

// isUnivalueList(a); // true

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// n = number of nodes
// Time: O(n)
// Space: O(1)

// iterative 
// const isUnivalueList = (head) => {
//   let curr = head;
//   while(head !== null) {
//     if(head.val !== curr.val) return false;
//     curr = curr.next;
//   }
//   return true;
// };

// n = number of nodes
// Time: O(n)
// Space: O(n)

// recursive
// const isUnivalueList = (head) => {
//   let next = head.next;
//   if(head.next === null) return true
//   if(head.val !== next.val) return false
//   return isUnivalueList(next);
// };

module.exports = {
  isUnivalueList,
};
