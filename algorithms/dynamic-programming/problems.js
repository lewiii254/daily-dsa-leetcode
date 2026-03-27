/**
 * DYNAMIC PROGRAMMING PROBLEMS
 * Classic DP problems with multiple approaches showing the evolution
 * from naive recursion to optimized tabulation.
 */

// ============================================================
// PROBLEM 1: Climbing Stairs
// n steps, can climb 1 or 2 at a time. How many distinct ways?
// Input: n=3  →  Output: 3 (1+1+1, 1+2, 2+1)
//
// dp[i] = dp[i-1] + dp[i-2] — same as Fibonacci!
// Time: O(n), Space: O(1)
// ============================================================
function climbStairs(n) {
  if (n <= 2) return n;
  let prev = 1, curr = 2;
  for (let i = 3; i <= n; i++) {
    [prev, curr] = [curr, prev + curr];
  }
  return curr;
}

// ============================================================
// PROBLEM 2: Coin Change (Minimum Coins)
// Find minimum number of coins to make the amount.
// Input: coins=[1,5,11], amount=15  →  Output: 3 (5+5+5? No, 11+4? No, 5+5+5=15? Yes!)
// Actually: coins=[1,5,6,9], amount=11 → 2 (5+6)
//
// dp[i] = min coins to make amount i
// dp[0] = 0, dp[i] = min(dp[i - coin] + 1) for all coins
// Time: O(amount * coins), Space: O(amount)
// ============================================================
function coinChange(coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0; // base case: 0 coins needed for amount 0

  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (coin <= i && dp[i - coin] + 1 < dp[i]) {
        dp[i] = dp[i - coin] + 1;
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
}

// ============================================================
// PROBLEM 3: Longest Common Subsequence (LCS)
// Find the length of the longest common subsequence of two strings.
// Input: text1="abcde", text2="ace"  →  Output: 3 ("ace")
//
// dp[i][j] = LCS of text1[0..i-1] and text2[0..j-1]
// If chars match: dp[i][j] = 1 + dp[i-1][j-1]
// Else: dp[i][j] = max(dp[i-1][j], dp[i][j-1])
// Time: O(m*n), Space: O(m*n)
// ============================================================
function longestCommonSubsequence(text1, text2) {
  const m = text1.length, n = text2.length;
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1]; // characters match
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]); // take best
      }
    }
  }

  return dp[m][n];
}

// ============================================================
// PROBLEM 4: 0/1 Knapsack
// Items with weights and values, capacity W. Maximize value.
// Each item can be taken at most once (0 or 1 times).
// Time: O(n * W), Space: O(n * W)
// ============================================================
function knapsack(weights, values, capacity) {
  const n = weights.length;
  // dp[i][w] = max value using first i items with capacity w
  const dp = Array.from({ length: n + 1 }, () => new Array(capacity + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let w = 0; w <= capacity; w++) {
      // Option 1: don't take item i
      dp[i][w] = dp[i - 1][w];

      // Option 2: take item i (if it fits)
      if (weights[i - 1] <= w) {
        dp[i][w] = Math.max(dp[i][w], dp[i - 1][w - weights[i - 1]] + values[i - 1]);
      }
    }
  }

  return dp[n][capacity];
}

// ============================================================
// PROBLEM 5: Longest Increasing Subsequence (LIS)
// Input: [10,9,2,5,3,7,101,18]  →  Output: 4 ([2,3,7,101] or [2,5,7,101])
//
// dp[i] = length of LIS ending at index i
// dp[i] = max(dp[j] + 1) for all j < i where nums[j] < nums[i]
// Time: O(n²), Space: O(n)
// ============================================================
function lengthOfLIS(nums) {
  const n = nums.length;
  const dp = new Array(n).fill(1); // each element is a subsequence of length 1

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
}

// ============================================================
// PROBLEM 6: House Robber
// Can't rob adjacent houses. Maximize total stolen.
// Input: [2,7,9,3,1]  →  Output: 12 (rob houses 1, 3, 5: 2+9+1=12)
//
// dp[i] = max money robbing first i houses
// dp[i] = max(dp[i-1], dp[i-2] + nums[i])
// Time: O(n), Space: O(1)
// ============================================================
function rob(nums) {
  if (nums.length === 1) return nums[0];

  let prev2 = 0, prev1 = 0;

  for (const num of nums) {
    const curr = Math.max(prev1, prev2 + num);
    prev2 = prev1;
    prev1 = curr;
  }

  return prev1;
}

// ============================================================
// TESTS
// ============================================================
console.log('=== Dynamic Programming Tests ===\n');
console.log('Climbing Stairs n=3:', climbStairs(3));   // 3
console.log('Climbing Stairs n=5:', climbStairs(5));   // 8

console.log('\nCoin Change [1,5,6,9] amount=11:', coinChange([1,5,6,9], 11)); // 2 (5+6)
console.log('Coin Change [2] amount=3:', coinChange([2], 3));                 // -1

console.log('\nLCS "abcde","ace":', longestCommonSubsequence('abcde', 'ace')); // 3
console.log('LCS "abc","abc":', longestCommonSubsequence('abc', 'abc'));       // 3

const weights = [1, 3, 4, 5];
const values  = [1, 4, 5, 7];
console.log('\nKnapsack capacity=7:', knapsack(weights, values, 7)); // 9

console.log('\nLIS [10,9,2,5,3,7,101,18]:', lengthOfLIS([10,9,2,5,3,7,101,18])); // 4

console.log('\nHouse Robber [2,7,9,3,1]:', rob([2,7,9,3,1])); // 12
console.log('House Robber [1,2,3,1]:', rob([1,2,3,1]));       // 4
