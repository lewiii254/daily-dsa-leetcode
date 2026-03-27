/**
 * MOCK TEST 2 — Solutions
 */

// P1: Climbing Stairs — O(n)
function climbStairs(n) {
  if (n <= 2) return n;
  let a = 1, b = 2;
  for (let i = 3; i <= n; i++) [a, b] = [b, a + b];
  return b;
}

// P2: Invert Binary Tree — O(n)
function invertTree(root) {
  if (!root) return null;
  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
  return root;
}

// P3: Longest Substring No Repeat — O(n)
function lengthOfLongestSubstring(s) {
  const set = new Set(); let lo = 0, max = 0;
  for (let hi = 0; hi < s.length; hi++) {
    while (set.has(s[hi])) { set.delete(s[lo++]); }
    set.add(s[hi]); max = Math.max(max, hi - lo + 1);
  }
  return max;
}

// P4: Coin Change — O(amount * coins)
function coinChange(coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity); dp[0] = 0;
  for (let i = 1; i <= amount; i++)
    for (const c of coins) if (c <= i) dp[i] = Math.min(dp[i], dp[i-c] + 1);
  return dp[amount] === Infinity ? -1 : dp[amount];
}

// P5: Number of Islands — O(m*n)
function numIslands(grid) {
  let count = 0;
  const dfs = (r, c) => {
    if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length || grid[r][c] !== '1') return;
    grid[r][c] = '0';
    [[-1,0],[1,0],[0,-1],[0,1]].forEach(([dr,dc]) => dfs(r+dr, c+dc));
  };
  for (let r = 0; r < grid.length; r++)
    for (let c = 0; c < grid[0].length; c++)
      if (grid[r][c] === '1') { dfs(r, c); count++; }
  return count;
}

console.log('P1 climbStairs(5):', climbStairs(5)); // 8
console.log('P3 longest "abcabcbb":', lengthOfLongestSubstring('abcabcbb')); // 3
console.log('P4 coinChange [1,5,6,9] 11:', coinChange([1,5,6,9], 11)); // 2
const grid = [['1','1','0','0'],['1','1','0','0'],['0','0','1','0'],['0','0','0','1']];
console.log('P5 numIslands:', numIslands(grid)); // 3
