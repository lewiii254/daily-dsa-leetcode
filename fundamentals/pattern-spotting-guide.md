# 🔎 Pattern Spotting Guide

Use prompt wording to quickly narrow the pattern.

## 1) Two Pointers

Look for:
- "sorted array"
- "pair/triplet"
- "in-place", "remove duplicates"

Usually means:
- Move two indices with condition-based updates.

## 2) Sliding Window

Look for:
- "longest/shortest substring/subarray"
- "contiguous"
- "at most / at least K"

Usually means:
- Expand right pointer, shrink left pointer when invalid.

## 3) HashMap / Frequency Counting

Look for:
- "count occurrences"
- "anagram", "duplicate", "frequency"
- "find complements"

Usually means:
- Store seen values/counts for O(1) lookup.

## 4) Binary Search

Look for:
- "sorted"
- "find first/last position"
- "minimum feasible", "maximum possible"

Usually means:
- Midpoint checks and shrinking search space.

## 5) Stack / Monotonic Stack

Look for:
- "next greater/smaller"
- "balanced parentheses"
- "process nearest element on left/right"

Usually means:
- Use stack to keep candidates and pop invalid ones.

## 6) BFS / DFS on Trees and Graphs

Look for:
- "shortest path in unweighted graph" (BFS)
- "all paths", "connected components" (DFS/BFS)
- "level order traversal" (BFS)

Usually means:
- BFS with queue for levels/shortest path
- DFS for deep exploration/backtracking

## 7) Dynamic Programming

Look for:
- "number of ways"
- "optimal substructure"
- "overlapping subproblems"

Usually means:
- Define state + transition + base case, memoize/tabulate.
