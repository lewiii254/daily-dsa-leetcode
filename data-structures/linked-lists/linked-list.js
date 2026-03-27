/**
 * SINGLY LINKED LIST — Complete Implementation
 * Includes all standard operations plus classic interview problems.
 */

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Append to end — O(n)
  append(val) {
    const node = new ListNode(val);
    if (!this.head) {
      this.head = node;
    } else {
      let curr = this.head;
      while (curr.next) curr = curr.next;
      curr.next = node;
    }
    this.size++;
  }

  // Prepend to front — O(1)
  prepend(val) {
    const node = new ListNode(val);
    node.next = this.head;
    this.head = node;
    this.size++;
  }

  // Delete first occurrence of val — O(n)
  delete(val) {
    if (!this.head) return;
    if (this.head.val === val) {
      this.head = this.head.next;
      this.size--;
      return;
    }
    let curr = this.head;
    while (curr.next) {
      if (curr.next.val === val) {
        curr.next = curr.next.next;
        this.size--;
        return;
      }
      curr = curr.next;
    }
  }

  // Search for a value — O(n)
  search(val) {
    let curr = this.head;
    let index = 0;
    while (curr) {
      if (curr.val === val) return index;
      curr = curr.next;
      index++;
    }
    return -1;
  }

  // Convert to array for easy display — O(n)
  toArray() {
    const result = [];
    let curr = this.head;
    while (curr) {
      result.push(curr.val);
      curr = curr.next;
    }
    return result;
  }

  print() {
    console.log(this.toArray().join(' → ') + ' → null');
  }
}

// ============================================================
// ALGORITHM 1: Reverse a Linked List (iterative)
// Input: 1 → 2 → 3 → 4 → 5
// Output: 5 → 4 → 3 → 2 → 1
// Time: O(n), Space: O(1)
// ============================================================
function reverseList(head) {
  let prev = null;
  let curr = head;

  while (curr) {
    const nextTemp = curr.next; // save next
    curr.next = prev;           // reverse pointer
    prev = curr;                // advance prev
    curr = nextTemp;            // advance curr
  }

  return prev; // new head
}

// ============================================================
// ALGORITHM 2: Detect Cycle (Floyd's Two-Pointer Algorithm)
// Time: O(n), Space: O(1)
// ============================================================
function hasCycle(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;       // moves 1 step
    fast = fast.next.next; // moves 2 steps

    if (slow === fast) return true; // they met inside a cycle
  }

  return false; // fast reached null — no cycle
}

// ============================================================
// ALGORITHM 3: Find Middle Node
// If even length, return the second middle node.
// Time: O(n), Space: O(1)
// ============================================================
function findMiddle(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow; // slow is at the middle
}

// ============================================================
// ALGORITHM 4: Merge Two Sorted Lists
// Input: 1→2→4, 1→3→4  →  Output: 1→1→2→3→4→4
// Time: O(m + n), Space: O(1)
// ============================================================
function mergeSortedLists(l1, l2) {
  const dummy = new ListNode(0); // sentinel node simplifies edge cases
  let curr = dummy;

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }

  curr.next = l1 || l2; // attach remaining nodes
  return dummy.next;
}

// ============================================================
// ALGORITHM 5: Remove Nth Node From End
// Input: 1→2→3→4→5, n=2  →  Output: 1→2→3→5
// Two-pointer trick: advance fast by n steps first.
// Time: O(n), Space: O(1)
// ============================================================
function removeNthFromEnd(head, n) {
  const dummy = new ListNode(0);
  dummy.next = head;
  let fast = dummy;
  let slow = dummy;

  // Move fast n+1 steps ahead
  for (let i = 0; i <= n; i++) fast = fast.next;

  // Move both until fast reaches end
  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }

  // slow.next is the node to remove
  slow.next = slow.next.next;
  return dummy.next;
}

// ============================================================
// TESTS
// ============================================================
console.log('=== Linked List Tests ===\n');

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.print(); // 1 → 2 → 3 → 4 → 5 → null

list.prepend(0);
list.print(); // 0 → 1 → 2 → 3 → 4 → 5 → null

list.delete(3);
list.print(); // 0 → 1 → 2 → 4 → 5 → null

console.log('Search for 4:', list.search(4)); // 3
console.log('Search for 9:', list.search(9)); // -1

// Test reverse
const buildList = vals => {
  const dummy = new ListNode(0);
  let curr = dummy;
  for (const v of vals) { curr.next = new ListNode(v); curr = curr.next; }
  return dummy.next;
};

const toArray = head => {
  const arr = [];
  let curr = head;
  while (curr) { arr.push(curr.val); curr = curr.next; }
  return arr;
};

console.log('\nReverse [1,2,3,4,5]:', toArray(reverseList(buildList([1,2,3,4,5]))));
// [5,4,3,2,1]

const mid = findMiddle(buildList([1,2,3,4,5]));
console.log('Middle of [1,2,3,4,5]:', mid.val); // 3

const merged = mergeSortedLists(buildList([1,2,4]), buildList([1,3,4]));
console.log('Merged sorted lists:', toArray(merged)); // [1,1,2,3,4,4]

console.log('Remove 2nd from end [1,2,3,4,5]:', toArray(removeNthFromEnd(buildList([1,2,3,4,5]), 2)));
// [1,2,3,5]
