# 🚶 Queues

A queue is a linear data structure that follows **FIFO** (First In, First Out) principle.

---

## 🏗 Structure

```
FRONT → [1][2][3][4][5] ← BACK
         ↑ dequeue        ↑ enqueue
```

---

## 📊 Operations Complexity

| Operation | Time |
|-----------|------|
| enqueue (add to back) | O(1) |
| dequeue (remove from front) | O(1) with proper impl |
| peek/front | O(1) |
| isEmpty | O(1) |
| search | O(n) |

> ⚠️ Using `Array.shift()` in JavaScript is O(n) because it shifts all elements. Use a pointer-based or linked-list-based queue for O(1) dequeue.

---

## 🛠 Real-World Uses

| Use Case | Description |
|----------|-------------|
| **BFS** | Process nodes level by level |
| **Task scheduling** | OS process queues |
| **Print queue** | First document in, first printed |
| **Rate limiting** | Sliding window of requests |
| **Event loop** | JavaScript's callback queue |
| **Breadth-first search** | Graph/tree traversal |

---

## 🔄 Queue Variants

| Type | Description |
|------|-------------|
| Simple Queue | Basic FIFO |
| Circular Queue | Fixed size, wraps around |
| Priority Queue | Dequeues highest priority first |
| Deque (Double-ended) | Insert/remove from both ends |

---

## 🔗 BFS Connection

BFS (Breadth-First Search) uses a queue to explore nodes level by level:
```
Queue: [root]
Process root → add children → Queue: [child1, child2]
Process child1 → add grandchildren → Queue: [child2, gc1, gc2]
...
```

---

## 🔁 Related Topics
- BFS (graphs and trees)
- Sliding Window pattern
- Priority Queue / Heaps
