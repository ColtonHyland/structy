// Write a function, createLinkedList, that takes in an array of values as an argument.
// The function should create a linked list containing each element of the array as the
// values of the nodes. The function should return the head of the linked list.

// createLinkedList(["h", "e", "y"]);
// // h -> e -> y

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// iterative soln
// const createLinkedList = (values) => {
//   let head = new Node(null);
//   let tail = head;
//   for(let value of values) {
//     tail.next = new Node(value);
//     tail = tail.next;
//   }
//   return head.next;
// };

module.exports = {
  createLinkedList,
};
