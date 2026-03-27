# 📚 Stacks

A stack is a linear data structure that follows **LIFO** (Last In, First Out) principle.

---

## 🏗 Structure

```
TOP → [ 5 ]   ← push/pop here
      [ 3 ]
      [ 7 ]
      [ 1 ]
BOTTOM
```

---

## 📊 Operations Complexity

| Operation | Time |
|-----------|------|
| push (add to top) | O(1) |
| pop (remove from top) | O(1) |
| peek (view top) | O(1) |
| isEmpty | O(1) |
| search | O(n) |

---

## 🛠 Real-World Uses

| Use Case | How |
|----------|-----|
| **Undo/Redo** | Each action pushed; undo pops |
| **Browser back button** | Pages pushed; back pops |
| **Call stack** | Function calls tracked with stack |
| **Expression parsing** | Operators and operands managed |
| **Bracket matching** | Open brackets pushed, popped on close |
| **DFS** | Explicit stack replaces recursion |

---

## 🧩 Classic Stack Problems

| Problem | Key Insight |
|---------|------------|
| Valid Parentheses | Push open, pop on close |
| Min Stack | Pair each value with current minimum |
| Daily Temperatures | Monotonic stack pattern |
| Next Greater Element | Monotonic stack |
| Evaluate RPN | Pop operands, push result |

---

## 💡 Monotonic Stack Pattern

A stack where elements are kept in sorted order. Used for "next greater/smaller element" problems.

```
For each element:
  while stack not empty AND stack.top <= current:
    pop (found answer for popped element)
  push current
```

---

## 🔁 Related Topics
- Recursion (uses implicit call stack)
- DFS (can use explicit stack)
- Queues (opposite principle)
