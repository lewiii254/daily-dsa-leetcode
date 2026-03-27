/**
 * QUEUE IMPLEMENTATIONS
 * 1. Simple Queue using JavaScript array (O(n) dequeue)
 * 2. Optimized Queue with head pointer (O(1) amortized)
 * 3. Circular Buffer (fixed size, O(1) all ops)
 * 4. BFS example using queue
 */

// ============================================================
// IMPLEMENTATION 1: Simple Queue (using array)
// ============================================================
class SimpleQueue {
  constructor() {
    this.items = [];
  }

  enqueue(val) { this.items.push(val); }       // O(1)
  dequeue()    { return this.items.shift(); }   // O(n) — shifts all elements!
  front()      { return this.items[0]; }        // O(1)
  isEmpty()    { return this.items.length === 0; }
  size()       { return this.items.length; }
}

// ============================================================
// IMPLEMENTATION 2: Optimized Queue with Pointer
// Avoids shifting by using an index pointer.
// Amortized O(1) for all operations.
// ============================================================
class Queue {
  constructor() {
    this.items = {};
    this.head = 0;
    this.tail = 0;
  }

  enqueue(val) {
    this.items[this.tail] = val;
    this.tail++;
  }

  dequeue() {
    if (this.isEmpty()) return null;
    const val = this.items[this.head];
    delete this.items[this.head]; // free memory
    this.head++;
    return val;
  }

  front()   { return this.items[this.head]; }
  isEmpty() { return this.head === this.tail; }
  size()    { return this.tail - this.head; }
}

// ============================================================
// IMPLEMENTATION 3: Circular Buffer (Fixed-size queue)
// Used in operating systems, ring buffers, audio streaming.
// ============================================================
class CircularQueue {
  constructor(capacity) {
    this.capacity = capacity;
    this.buffer = new Array(capacity).fill(null);
    this.head = 0;
    this.tail = 0;
    this.count = 0;
  }

  enqueue(val) {
    if (this.isFull()) throw new Error('Queue is full');
    this.buffer[this.tail] = val;
    this.tail = (this.tail + 1) % this.capacity; // wrap around
    this.count++;
  }

  dequeue() {
    if (this.isEmpty()) throw new Error('Queue is empty');
    const val = this.buffer[this.head];
    this.buffer[this.head] = null;
    this.head = (this.head + 1) % this.capacity; // wrap around
    this.count--;
    return val;
  }

  front()    { return this.buffer[this.head]; }
  isFull()   { return this.count === this.capacity; }
  isEmpty()  { return this.count === 0; }
  size()     { return this.count; }
}

// ============================================================
// BFS EXAMPLE: Level-order traversal of a binary tree
// ============================================================
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function levelOrder(root) {
  if (!root) return [];

  const result = [];
  const queue = new Queue();
  queue.enqueue(root);

  while (!queue.isEmpty()) {
    const levelSize = queue.size();
    const level = [];

    for (let i = 0; i < levelSize; i++) {
      const node = queue.dequeue();
      level.push(node.val);

      if (node.left)  queue.enqueue(node.left);
      if (node.right) queue.enqueue(node.right);
    }

    result.push(level);
  }

  return result;
}

// ============================================================
// TESTS
// ============================================================
console.log('=== Queue Tests ===\n');

const q = new Queue();
q.enqueue(1); q.enqueue(2); q.enqueue(3);
console.log('Front:', q.front());      // 1
console.log('Dequeue:', q.dequeue());  // 1
console.log('Size:', q.size());        // 2

console.log('\nCircular Queue (capacity 3):');
const cq = new CircularQueue(3);
cq.enqueue('a'); cq.enqueue('b'); cq.enqueue('c');
console.log('Front:', cq.front());     // a
console.log('Dequeue:', cq.dequeue()); // a
cq.enqueue('d');
console.log('Front after wrap:', cq.front()); // b

console.log('\nBFS Level Order:');
const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);
console.log(levelOrder(root)); // [[3],[9,20],[15,7]]
