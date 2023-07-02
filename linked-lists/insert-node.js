// Write a function, insertNode, that takes in the head of a linked list, a value, and an index.
// The function should insert a new node with the value into the list at the specified index.
// Consider the head of the linked list as index 0. The function should return the head of the
// resulting linked list.

// Do this in-place.

// You may assume that the input list is non-empty and the index is not greater than the length of the input list.

// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");

// a.next = b;
// b.next = c;
// c.next = d;

// a -> b -> c -> d

// insertNode(a, 'x', 2);
// a -> b -> x -> c -> d

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

//iterative soln
// const insertNode = (head, value, index) => {
//   let newNode = new Node(value);
//   let current = head;
//   let count = 0;
//   if(index === count) {
//     newNode.next = current;
//     return newNode;
//   }
//   while(count < index && count !== index - 1) {
//     current = current.next;
//     count++;
//   }
//   newNode.next = current.next;
//   current.next = newNode;
//   return head;
// };
// n = number of nodes
// Time: O(n)
// Space: O(1)

// recursive soln
// const insertNode = (head, value, index, count = 0) => {
//   if(index === 0) {
//     let newNode = new Node(value);
//     newNode.next = head;
//     return newNode;
//   }
//   if(count === index - 1) {
//     let next = head.next;
//     head.next = new Node(value);
//     head.next.next = next;
//     return head;
//   }
//   head.next = insertNode(head.next, value, index, count + 1);
//   return head;
// };
// n = number of nodes
// Time: O(n)
// Space: O(n)

module.exports = {
  insertNode,
};
