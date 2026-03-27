# ⏱ Time & Space Complexity

Understanding how to measure algorithm efficiency is the foundation of DSA mastery.

---

## 📐 Big-O Notation

Big-O describes the **worst-case performance** of an algorithm as input size grows.

### The Golden Rule
> "How does the runtime grow as n → ∞?"

---

## 📊 Complexity Hierarchy (Best to Worst)

| Notation | Name | Example |
|----------|------|---------|
| O(1) | Constant | Array index access |
| O(log n) | Logarithmic | Binary search |
| O(n) | Linear | Single loop |
| O(n log n) | Log-linear | Merge sort |
| O(n²) | Quadratic | Nested loops |
| O(2ⁿ) | Exponential | Recursive fibonacci |
| O(n!) | Factorial | Permutations |

---

## 🔍 Examples

### O(1) — Constant Time
```javascript
function getFirst(arr) {
  return arr[0]; // Always one operation regardless of array size
}
```

### O(n) — Linear Time
```javascript
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) { // n iterations
    if (arr[i] > max) max = arr[i];
  }
  return max;
}
```

### O(n²) — Quadratic Time
```javascript
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {       // n
    for (let j = 0; j < arr.length - 1; j++) { // n
      if (arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
      }
    }
  }
  return arr;
}
```

### O(log n) — Logarithmic Time
```javascript
function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2); // halves search space each time
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}
```

---

## 🧮 Rules for Calculating Big-O

### Rule 1: Drop Constants
```
O(2n) → O(n)
O(100) → O(1)
```

### Rule 2: Drop Non-Dominant Terms
```
O(n² + n) → O(n²)
O(n + log n) → O(n)
```

### Rule 3: Different Inputs = Different Variables
```javascript
// This is O(a + b), NOT O(n²)
function twoLoops(arrA, arrB) {
  for (let x of arrA) console.log(x); // O(a)
  for (let y of arrB) console.log(y); // O(b)
}
```

---

## 💾 Space Complexity

Space complexity measures **extra memory** used by an algorithm.

```javascript
// O(1) space — no extra data structures
function sumArray(arr) {
  let sum = 0;
  for (let num of arr) sum += num;
  return sum;
}

// O(n) space — creates new array
function doubleArray(arr) {
  return arr.map(x => x * 2); // new array of size n
}
```

---

## 🎯 Practice Questions

1. What is the time complexity of accessing an element in a HashMap?
2. Why is merge sort O(n log n)?
3. A function has two nested loops over the same array. What's its complexity?

**Answers:**
1. O(1) average case
2. It divides (log n times) and merges (n work each time)
3. O(n²)

---

## 📈 Visualization

```
n=1000:
O(1)      →         1 operation
O(log n)  →        10 operations
O(n)      →     1,000 operations
O(n log n)→    10,000 operations
O(n²)     → 1,000,000 operations
O(2ⁿ)     →  Too many to count!
```

---

## 🔗 Related Topics
- Recursion (affects space complexity via call stack)
- Dynamic Programming (optimizes exponential to polynomial)
- Data Structures (each has its own complexity profile)
