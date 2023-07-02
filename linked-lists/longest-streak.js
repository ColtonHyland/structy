// Write a function, longestStreak, that takes in the head of a linked list as an argument.
//The function should return the length of the longest consecutive streak of the same value within the list.

// const a = new Node(5);
// const b = new Node(5);
// const c = new Node(7);
// const d = new Node(7);
// const e = new Node(7);
// const f = new Node(6);

// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
// e.next = f;

// // 5 -> 5 -> 7 -> 7 -> 7 -> 6

// longestStreak(a); // 3

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }


// iterative soln
// const longestStreak = (head) => {
//   let maxStreak = 0;
//   let streak = 0;
//   let current = head;
//   let prevVal = null
  
//   while(current !== null) {
//     if(current.val === prevVal) {
//       streak++;
//     } else {
//       streak = 1;
//     }
//     if(streak > maxStreak) maxStreak = streak
//     prevVal = current.val;
//     current = current.next;
//   }
//   return maxStreak;
// };


module.exports = {
  longestStreak,
};
