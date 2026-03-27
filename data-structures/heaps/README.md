# 🏔 Heaps

A heap is a complete binary tree that satisfies the heap property. It's the data structure behind priority queues.

---

## 🔑 Heap Property

- **Min-Heap:** Parent ≤ children (root is the minimum element)
- **Max-Heap:** Parent ≥ children (root is the maximum element)

```
Min-Heap:          Max-Heap:
      1                  9
    /   \              /   \
   3     2            7     8
  / \   /            / \   /
 5   4 6            3   4 6
```

---

## 🔢 Array Representation

A complete binary tree is stored as an array:
```
For index i:
  Left child  = 2i + 1
  Right child = 2i + 2
  Parent      = Math.floor((i - 1) / 2)

Array: [1, 3, 2, 5, 4, 6]
         0  1  2  3  4  5
```

---

## 📊 Operations Complexity

| Operation | Time |
|-----------|------|
| Insert (push) | O(log n) |
| Extract min/max | O(log n) |
| Peek min/max | O(1) |
| Build heap | O(n) |
| Heap sort | O(n log n) |

---

## 🛠 Common Uses

| Use Case | Type |
|----------|------|
| Priority queue (OS scheduling) | Min/Max Heap |
| Dijkstra's algorithm | Min Heap |
| K largest/smallest elements | Max/Min Heap |
| Median of data stream | Min + Max Heap |
| Heap sort | Max Heap |

---

## ⚡ Key Insight: K-th Largest/Smallest

- **K smallest:** Use a **max-heap** of size K. If new element < max, replace.
- **K largest:** Use a **min-heap** of size K. If new element > min, replace.
- Complexity: O(n log k) vs O(n log n) for full sort

---

## 🔁 Related Topics
- Priority Queue
- Dijkstra's algorithm
- Sorting algorithms (Heap Sort)
- Median of Data Stream problem
