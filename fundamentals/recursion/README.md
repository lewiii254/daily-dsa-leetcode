# 🔄 Recursion

Recursion is when a function calls itself to solve smaller subproblems. Mastering recursion unlocks trees, graphs, dynamic programming, and backtracking.

---

## 🧠 The Three Laws of Recursion

1. **Base Case** — When to stop (prevents infinite loops)
2. **Recursive Case** — Calls itself with a smaller problem
3. **Progress** — Each call moves toward the base case

---

## 📦 Classic Example: Factorial

```javascript
function factorial(n) {
  // Base case
  if (n <= 1) return 1;
  
  // Recursive case: n! = n × (n-1)!
  return n * factorial(n - 1);
}

// Execution trace for factorial(4):
// factorial(4) = 4 × factorial(3)
//              = 4 × 3 × factorial(2)
//              = 4 × 3 × 2 × factorial(1)
//              = 4 × 3 × 2 × 1 = 24
```

---

## 🔁 Recursion vs Iteration

| Aspect | Recursion | Iteration |
|--------|-----------|-----------|
| Code | Often cleaner | More explicit |
| Memory | Uses call stack | Uses variables |
| Speed | Slightly slower | Usually faster |
| Use case | Trees, graphs, divide-conquer | Simple loops |

---

## 📚 Common Recursion Patterns

### 1. Linear Recursion
One recursive call per function call.
```javascript
function sumDown(n) {
  if (n === 0) return 0;
  return n + sumDown(n - 1);
}
```

### 2. Binary Recursion
Two recursive calls per function call (e.g., Fibonacci, tree traversal).
```javascript
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
```

### 3. Tail Recursion
Recursive call is the last operation (can be optimized by compilers).
```javascript
function factTail(n, acc = 1) {
  if (n <= 1) return acc;
  return factTail(n - 1, n * acc); // tail call — acc carries the result
}
```

### 4. Mutual Recursion
Two functions that call each other.
```javascript
function isEven(n) { return n === 0 ? true : isOdd(n - 1); }
function isOdd(n)  { return n === 0 ? false : isEven(n - 1); }
```

---

## 🧩 The Call Stack

Each recursive call creates a new **stack frame**:
```
factorial(4)
  └─ factorial(3)
       └─ factorial(2)
            └─ factorial(1) ← base case, starts unwinding
```

Max depth ≈ system stack limit (~10,000 calls in most environments).
Deep recursion → **Stack Overflow** error!

---

## 💡 Memoization Pattern

Avoid recomputing subproblems:
```javascript
function memoize(fn) {
  const cache = {};
  return function(n) {
    if (n in cache) return cache[n];
    return (cache[n] = fn(n));
  };
}
```

---

## ⚠️ Common Pitfalls

1. **Missing base case** → Stack overflow
2. **Not reducing the problem** → Infinite recursion
3. **Recomputing subproblems** → Use memoization!
4. **Mutating shared state** → Use immutable patterns

---

## 🚀 Practice Problems

1. Reverse a string using recursion
2. Check if a string is a palindrome
3. Find the sum of digits in a number
4. Flatten a nested array
5. Tower of Hanoi
6. Generate all permutations of a string
7. Binary search (recursive version)
