//Write a function, reverseList, that takes in the head of a linked list as an argument.
//The function should reverse the order of the nodes in the linked list in-place and
//return the new head of the reversed linked list.
// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");
// const e = new Node("e");
// const f = new Node("f");

// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
// e.next = f;

// // a -> b -> c -> d -> e -> f

// reverseList(a); // f -> e -> d -> c -> b -> a

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

//iterative solution
// const reverseList = (head) => {
//   let prev = null;
//   let curr = head;
//   while(curr !== null) {
//     let next = curr.next;
//     curr.next = prev;
//     prev = curr;
//     curr = next;
//   }
//   return prev;
// };

//recursive soln
// const reverseList = (head, prev = null) => {
//   if (head === null) return prev;
//   let next = head.next;
//   head.next = prev;
//   return reverseList (next, head);
// };

module.exports = {
  reverseList,
};
