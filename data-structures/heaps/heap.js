/**
 * MIN-HEAP IMPLEMENTATION + HEAP PROBLEMS
 */

class MinHeap {
  constructor() {
    this.heap = [];
  }

  // ── Helper: Index calculations ────────────────────────────
  parent(i)     { return Math.floor((i - 1) / 2); }
  leftChild(i)  { return 2 * i + 1; }
  rightChild(i) { return 2 * i + 2; }

  // ── Swap two elements ─────────────────────────────────────
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  // ── Insert — O(log n) ─────────────────────────────────────
  insert(val) {
    this.heap.push(val);
    this._bubbleUp(this.heap.length - 1);
  }

  _bubbleUp(i) {
    while (i > 0 && this.heap[this.parent(i)] > this.heap[i]) {
      this.swap(i, this.parent(i));
      i = this.parent(i);
    }
  }

  // ── Extract Minimum — O(log n) ────────────────────────────
  extractMin() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop(); // move last element to root
    this._sinkDown(0);
    return min;
  }

  _sinkDown(i) {
    const n = this.heap.length;
    let smallest = i;
    const left  = this.leftChild(i);
    const right = this.rightChild(i);

    if (left  < n && this.heap[left]  < this.heap[smallest]) smallest = left;
    if (right < n && this.heap[right] < this.heap[smallest]) smallest = right;

    if (smallest !== i) {
      this.swap(i, smallest);
      this._sinkDown(smallest);
    }
  }

  // ── Peek minimum — O(1) ───────────────────────────────────
  peek()    { return this.heap[0]; }
  size()    { return this.heap.length; }
  isEmpty() { return this.heap.length === 0; }
}

// ============================================================
// PROBLEM 1: K Smallest Elements
// Return the k smallest elements from an array.
// Input: [3,2,1,5,6,4], k=2  →  Output: [1,2]
//
// Approach: Build min-heap from all elements, extract k times.
// Time: O(n + k log n), Space: O(n)
// ============================================================
function kSmallest(nums, k) {
  const heap = new MinHeap();
  for (const num of nums) heap.insert(num);

  const result = [];
  for (let i = 0; i < k; i++) {
    result.push(heap.extractMin());
  }
  return result;
}

// ============================================================
// PROBLEM 2: K Most Frequent Elements
// Input: [1,1,1,2,2,3], k=2  →  Output: [1,2]
//
// Count frequencies, then use a min-heap of size k.
// Time: O(n log k), Space: O(n)
// ============================================================
function topKFrequent(nums, k) {
  // Count frequencies
  const freq = new Map();
  for (const num of nums) freq.set(num, (freq.get(num) || 0) + 1);

  // Use min-heap of size k based on frequency
  // Store [frequency, value] pairs
  const heap = new MinHeap();

  for (const [num, count] of freq) {
    heap.insert([count, num]);
    if (heap.size() > k) heap.extractMin(); // remove least frequent
  }

  return heap.heap.map(([, num]) => num);
}

// ============================================================
// PROBLEM 3: Merge K Sorted Arrays
// Input: [[1,4,7],[2,5,8],[3,6,9]]  →  [1,2,3,4,5,6,7,8,9]
//
// Use min-heap with (value, arrayIndex, elementIndex).
// Time: O(n log k), Space: O(k)
// ============================================================
function mergeKSortedArrays(arrays) {
  // Simple approach using min-heap
  const heap = new MinHeap();
  const result = [];

  // Insert first element from each array with tracking info
  for (let i = 0; i < arrays.length; i++) {
    if (arrays[i].length > 0) {
      heap.insert([arrays[i][0], i, 0]); // [value, arrayIdx, elemIdx]
    }
  }

  while (!heap.isEmpty()) {
    const [val, arrIdx, elemIdx] = heap.extractMin();
    result.push(val);

    if (elemIdx + 1 < arrays[arrIdx].length) {
      heap.insert([arrays[arrIdx][elemIdx + 1], arrIdx, elemIdx + 1]);
    }
  }

  return result;
}

// ============================================================
// TESTS
// ============================================================
console.log('=== Heap Tests ===\n');

const h = new MinHeap();
[5, 3, 8, 1, 9, 2].forEach(v => h.insert(v));
console.log('Min (peek):', h.peek());          // 1
console.log('Extract min:', h.extractMin());   // 1
console.log('New min:', h.peek());             // 2

console.log('\nK Smallest [3,2,1,5,6,4] k=3:', kSmallest([3,2,1,5,6,4], 3)); // [1,2,3]
console.log('Top K Frequent [1,1,1,2,2,3] k=2:', topKFrequent([1,1,1,2,2,3], 2)); // [2,1] or [1,2]
console.log('Merge K sorted:', mergeKSortedArrays([[1,4,7],[2,5,8],[3,6,9]])); // [1,2,3,4,5,6,7,8,9]
