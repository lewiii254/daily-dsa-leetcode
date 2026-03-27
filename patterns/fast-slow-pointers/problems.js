/**
 * FAST-SLOW POINTER PROBLEMS
 */

class ListNode { constructor(val) { this.val = val; this.next = null; } }

// Detect cycle — O(n) time, O(1) space
function hasCycle(head) {
  let slow = head, fast = head;
  while (fast && fast.next) {
    slow = slow.next; fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}

// Find middle of linked list — O(n)
function middleNode(head) {
  let slow = head, fast = head;
  while (fast && fast.next) { slow = slow.next; fast = fast.next.next; }
  return slow;
}

// Happy Number — O(log n)
function isHappy(n) {
  const sumSquares = n => String(n).split('').reduce((s, d) => s + d*d, 0);
  let slow = n, fast = sumSquares(n);
  while (fast !== 1 && slow !== fast) {
    slow = sumSquares(slow);
    fast = sumSquares(sumSquares(fast));
  }
  return fast === 1;
}

console.log('=== Fast-Slow Pointer Tests ===');
console.log('Happy number 19:', isHappy(19)); // true
console.log('Happy number 2:', isHappy(2));   // false
