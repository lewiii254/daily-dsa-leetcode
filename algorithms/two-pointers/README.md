# 👆👆 Two Pointers

The two pointers pattern uses two indices moving through a data structure to solve problems in O(n) instead of O(n²).

---

## 🎯 When to Use

- Sorted arrays
- Finding pairs/triplets that meet a condition
- Palindrome checking
- Removing duplicates in-place
- Partitioning arrays

---

## 🔄 Two Variants

### Opposite Ends (Converging)
Both pointers start at opposite ends and move toward each other.
```
[1, 2, 3, 4, 5]
 L              R
 → L moves right when sum < target
 → R moves left when sum > target
```

### Same Direction (Fast/Slow or Sliding Window)
Both start at beginning; one moves faster.
```
[1, 2, 2, 3, 4]
 S
 F
```

---

## 📋 Template

```javascript
function twoPointers(arr) {
  let left = 0, right = arr.length - 1;

  while (left < right) {
    if (condition(arr[left], arr[right])) {
      // found answer
    } else if (needBigger) {
      left++;
    } else {
      right--;
    }
  }
}
```

---

## 🔁 Related Topics
- Sliding Window (special case)
- Fast-Slow Pointers
- Binary Search (sorted array traversal)
