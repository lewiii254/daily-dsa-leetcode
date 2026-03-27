# 🪟 Sliding Window

The sliding window pattern maintains a window of elements to avoid recomputing values for overlapping sub-problems.

---

## 🎯 When to Use

- Finding subarrays or substrings that satisfy some condition
- Problems asking for maximum/minimum/length of a subarray
- Problems involving contiguous elements

---

## 🔄 Two Types

### Fixed-Size Window
Window size k is constant. Slide one element at a time.
```
[a b c] d e f   → sum = a+b+c
 a [b c d] e f  → sum = prev - a + d
 a  b [c d e] f → sum = prev - b + e
```

### Variable-Size Window (Two Pointers)
Window expands and shrinks based on a condition.
```
Expand right pointer while condition is met.
Shrink left pointer when condition is violated.
```

---

## 📋 Templates

### Fixed-Size Template
```javascript
function fixedWindow(arr, k) {
  let windowSum = arr.slice(0, k).reduce((a, b) => a + b, 0);
  let maxSum = windowSum;

  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k]; // slide: add new, remove old
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum;
}
```

### Variable-Size Template
```javascript
function variableWindow(arr) {
  let left = 0, result = 0;

  for (let right = 0; right < arr.length; right++) {
    // Expand window: process arr[right]

    while (/* window is invalid */) {
      // Shrink window: remove arr[left]
      left++;
    }

    result = Math.max(result, right - left + 1);
  }
  return result;
}
```

---

## 🔁 Related Topics
- Two Pointers
- HashMaps (for character frequency windows)
- Arrays
