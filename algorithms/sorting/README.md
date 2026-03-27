# 🔢 Sorting Algorithms

Sorting is one of the most studied problems in computer science. Every developer should understand the trade-offs.

---

## 📊 Algorithm Comparison

| Algorithm | Best | Average | Worst | Space | Stable? |
|-----------|------|---------|-------|-------|---------|
| Bubble Sort | O(n) | O(n²) | O(n²) | O(1) | ✅ |
| Selection Sort | O(n²) | O(n²) | O(n²) | O(1) | ❌ |
| Insertion Sort | O(n) | O(n²) | O(n²) | O(1) | ✅ |
| Merge Sort | O(n log n) | O(n log n) | O(n log n) | O(n) | ✅ |
| Quick Sort | O(n log n) | O(n log n) | O(n²) | O(log n) | ❌ |
| Heap Sort | O(n log n) | O(n log n) | O(n log n) | O(1) | ❌ |

---

## 🎯 When to Use What?

| Scenario | Best Choice |
|----------|-------------|
| Small arrays (n < 20) | Insertion Sort |
| Nearly sorted data | Insertion Sort |
| General purpose | Merge Sort or Quick Sort |
| Memory limited | Heap Sort (O(1) space) |
| Stable sort needed | Merge Sort |
| Linked list sorting | Merge Sort |

---

## 🔑 Key Concepts

### Stable Sort
A sort is **stable** if equal elements maintain their relative order.
Important when sorting objects by multiple keys.

### In-Place Sort
Sorts without extra memory (O(1) space). Merge sort is NOT in-place.

### Divide and Conquer
Merge sort and quick sort split the problem, sort halves, combine.

---

## 📝 Interview Tips

- Know the complexity of JavaScript's built-in `.sort()` (Timsort, O(n log n))
- Always mention stability when discussing sorting
- Quick sort has O(n²) worst case — mention randomized pivot as fix
- For sorting objects: `arr.sort((a, b) => a.key - b.key)`

---

## 🔁 Related Topics
- Divide and Conquer
- Recursion
- Heaps (Heap Sort)
