# 🔙 Backtracking

Backtracking is a systematic way to try all possible solutions by building candidates incrementally and abandoning a candidate as soon as it's determined it cannot lead to a valid solution.

---

## 🧠 Mental Model: Decision Tree

Backtracking explores a **decision tree**:
- Each node represents a partial solution
- Each edge represents a choice
- Leaf nodes are complete solutions (or dead ends)
- **Pruning** = cutting off branches early

```
Generate all subsets of [1, 2, 3]:

              []
           /   |   \
         [1]  [2]  [3]
        /  \   \
     [1,2][1,3][2,3]
      |
   [1,2,3]
```

---

## 📋 General Template

```javascript
function backtrack(state, choices) {
  if (isComplete(state)) {
    addToResults(state);
    return;
  }

  for (const choice of choices) {
    if (isValid(choice, state)) {
      makeChoice(choice, state);      // explore
      backtrack(state, choices);      // recurse
      undoChoice(choice, state);      // backtrack (undo)
    }
  }
}
```

---

## 🔑 Key Problems

| Problem | Type |
|---------|------|
| Permutations | Generate all orderings |
| Subsets | Generate all combinations |
| N-Queens | Constraint satisfaction |
| Sudoku Solver | Constraint satisfaction |
| Word Search | Path finding |
| Combination Sum | Target sum with repetition |

---

## ⚡ Backtracking vs DP

| Aspect | Backtracking | Dynamic Programming |
|--------|-------------|---------------------|
| Goal | Find all solutions | Find optimal solution |
| Subproblems | Non-overlapping | Overlapping |
| Pruning | Yes | No (but memoization) |
| Time | Exponential typically | Polynomial typically |

---

## 🔁 Related Topics
- Recursion (backtracking IS recursion with undo)
- Dynamic Programming
- Graph DFS (DFS is backtracking on graphs)
