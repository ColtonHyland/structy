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

const createLinkedList = (values) => {
  // todo
};

module.exports = {
  createLinkedList,
};
