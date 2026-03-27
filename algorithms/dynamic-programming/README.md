# 🧠 Dynamic Programming

Dynamic Programming (DP) solves problems by breaking them into overlapping subproblems and storing results to avoid recomputation.

---

## 🎯 When to Use DP

Ask yourself these questions:
1. Can the problem be broken into **subproblems**?
2. Do subproblems **overlap** (same subproblem computed multiple times)?
3. Does the problem have **optimal substructure** (optimal solution uses optimal subsolutions)?

If YES to all three → **DP is likely the right approach!**

---

## 🔄 Two DP Approaches

### Top-Down (Memoization)
- Start with the original problem
- Recursively solve subproblems
- Cache results in a memo table

```javascript
function dp(n, memo = {}) {
  if (n in memo) return memo[n];
  // base case
  // recursive case
  memo[n] = ...;
  return memo[n];
}
```

### Bottom-Up (Tabulation)
- Start with base cases
- Build up to the full solution iteratively
- Often more space-efficient

```javascript
const dp = new Array(n + 1).fill(0);
dp[0] = base_case;
for (let i = 1; i <= n; i++) {
  dp[i] = ...; // build from previous
}
```

---

## 📊 Classic DP Problems

| Problem | Type | Key Idea |
|---------|------|----------|
| Fibonacci | 1D DP | dp[i] = dp[i-1] + dp[i-2] |
| Climbing Stairs | 1D DP | Same as Fibonacci |
| Coin Change | 1D DP | dp[amount] = min(dp[amount - coin] + 1) |
| Knapsack 0/1 | 2D DP | Include or exclude each item |
| LCS | 2D DP | dp[i][j] based on match or mismatch |
| Edit Distance | 2D DP | Insert, delete, replace operations |

---

## 💡 Key Patterns

### Linear DP
`dp[i]` depends on `dp[i-1]` or `dp[i-k]`

### Interval DP
`dp[i][j]` represents the answer for subarray `[i..j]`

### Grid DP
`dp[i][j]` represents the answer at cell `(i,j)` in a 2D grid

### Bitmask DP
State includes a bitmask to represent subsets

---

## 🔁 Related Topics
- Recursion (top-down DP uses recursion)
- Greedy (sometimes greedy works when DP would be overkill)
- Divide and Conquer (DP vs D&C: DP has overlapping subproblems)
