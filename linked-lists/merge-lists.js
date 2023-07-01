// Write a function, mergeLists, that takes in the head of two sorted linked lists as arguments.
// The function should merge the two lists together into single sorted linked list. The function
// should return the head of the merged linked list.

// Do this in-place, by mutating the original Nodes.

// You may assume that both input lists are non-empty and contain increasing sorted numbers.

// const a = new Node(5);
// const b = new Node(7);
// const c = new Node(10);
// const d = new Node(12);
// const e = new Node(20);
// const f = new Node(28);
// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
// e.next = f;
// 5 -> 7 -> 10 -> 12 -> 20 -> 28

// const q = new Node(6);
// const r = new Node(8);
// const s = new Node(9);
// const t = new Node(25);
// q.next = r;
// r.next = s;
// s.next = t;
// 6 -> 8 -> 9 -> 25

// mergeLists(a, q);
// 5 -> 6 -> 7 -> 8 -> 9 -> 10 -> 12 -> 20 -> 25 -> 28

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// n = length of list 1
// m = length of list 2
// Time: O(min(n, m))
// Space: O(1)

// //iterative soln
// const mergeLists = (head1, head2) => {
//   let head = new Node(null);
//   let tail = head;
//   let curr1 = head1;
//   let curr2 = head2;
//   while(curr1 !== null && curr2 !== null) {
//     if(curr1.val < curr2.val) {
//       tail.next = curr1;
//       curr1 = curr1.next;
//     } else {
//       tail.next = curr2;
//       curr2 = curr2.next;
//     }
//     tail = tail.next;
//   }
//   if(curr1 === null) tail.next = curr2; 
//   if(curr2 === null) tail.next = curr1; 
//   return head.next;
// };

//n = length of list 1
// m = length of list 2
// Time: O(min(n, m))
// Space: O(min(n, m))

// recursive soln
// const mergeLists = (head1, head2) => {
//   if(head1 === null && head2 === null) return null;
//   if(head1 === null) return head2;
//   if(head2 === null) return head1;
//   if(head1.val < head2.val) {
//     head1.next = mergeLists(head1.next, head2);
//     return head1;
//   } else {
//     head2.next = mergeLists(head1, head2.next);
//     return head2;
//   }
// };

module.exports = {
  mergeLists,
};