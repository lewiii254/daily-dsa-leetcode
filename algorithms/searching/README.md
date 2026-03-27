# 🔍 Searching Algorithms

---

## 📊 Algorithm Comparison

| Algorithm | Time | Space | Requires Sorted? |
|-----------|------|-------|-----------------|
| Linear Search | O(n) | O(1) | No |
| Binary Search | O(log n) | O(1) | Yes |
| Jump Search | O(√n) | O(1) | Yes |
| Interpolation Search | O(log log n) avg | O(1) | Yes + uniform distribution |

---

## 🎯 Binary Search

Binary search works by repeatedly halving the search space.

**Prerequisite:** Array must be sorted!

```
Search for 7 in [1, 3, 5, 7, 9, 11, 13]:
           left=0, right=6, mid=3 → arr[3]=7 ✅ Found!

Search for 6 in [1, 3, 5, 7, 9, 11, 13]:
  Step 1: left=0, right=6, mid=3 → arr[3]=7 > 6, right=2
  Step 2: left=0, right=2, mid=1 → arr[1]=3 < 6, left=2
  Step 3: left=2, right=2, mid=2 → arr[2]=5 < 6, left=3
  left > right → NOT FOUND (-1)
```

---

## ⚠️ Binary Search Traps

### Off-by-One Errors
The most common source of bugs:
- `left <= right` vs `left < right`
- `mid + 1` vs `mid` for left boundary
- `mid - 1` vs `mid` for right boundary

### Overflow Prevention
```javascript
// WRONG: (left + right) / 2 can overflow in languages with fixed integers
// RIGHT:
const mid = left + Math.floor((right - left) / 2);
```

---

## 🎯 Binary Search as a Pattern

Binary search applies beyond sorted arrays — wherever the search space is **monotonically** ordered:
- Finding the minimum valid value (answer is monotone)
- Searching in rotated arrays
- Finding peak elements

---

## 🔁 Related Topics
- Binary Search Pattern (patterns folder)
- Divide and Conquer
