# 📦 Arrays

Arrays are the most fundamental data structure — an ordered collection of elements stored in contiguous memory.

---

## 🔑 Key Properties

| Operation | Time Complexity |
|-----------|----------------|
| Access by index | O(1) |
| Search (unsorted) | O(n) |
| Search (sorted) | O(log n) |
| Insert at end | O(1) amortized |
| Insert at position | O(n) |
| Delete | O(n) |

---

## 🧩 Problems in This Section

### Problem 1: Two Sum
Given an array and target, find two indices that add up to the target.

### Problem 2: Maximum Subarray (Kadane's Algorithm)
Find the contiguous subarray with the largest sum.

### Problem 3: Best Time to Buy and Sell Stock
Find maximum profit from one buy-sell transaction.

### Problem 4: Contains Duplicate
Check if array has any duplicate values.

### Problem 5: Product of Array Except Self
Return array where each element is product of all others (no division).

---

## 💡 Key Patterns for Arrays

1. **Two Pointers** — Traverse from both ends simultaneously
2. **Sliding Window** — Fixed or variable window over a subarray
3. **Prefix Sum** — Precompute cumulative sums for range queries
4. **HashMap** — Frequency counting, complement lookup, index storage

---

## 📊 JavaScript Array Methods Complexity

| Method | Complexity | Notes |
|--------|-----------|-------|
| push / pop | O(1) | End operations |
| shift / unshift | O(n) | Front requires shifting |
| splice | O(n) | Mid insertion/deletion |
| indexOf / includes | O(n) | Linear scan |
| sort | O(n log n) | Timsort in V8 |
| slice | O(k) | k = slice length |

---

## 🔁 Related Topics
- Two Pointers pattern
- Sliding Window pattern
- Prefix Sum pattern
