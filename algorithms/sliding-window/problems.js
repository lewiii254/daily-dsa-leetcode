/**
 * SLIDING WINDOW PROBLEMS
 * Fixed and variable size window patterns.
 */

// ============================================================
// PROBLEM 1: Maximum Sum Subarray of Size K (Fixed Window)
// Input: arr=[2,1,5,1,3,2], k=3  →  Output: 9 (5+1+3)
// Time: O(n), Space: O(1)
// ============================================================
function maxSumSubarrayK(arr, k) {
  if (arr.length < k) return null;

  // Compute sum of first window
  let windowSum = arr.slice(0, k).reduce((a, b) => a + b, 0);
  let maxSum = windowSum;

  // Slide window: add new element on right, remove on left
  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

// ============================================================
// PROBLEM 2: Longest Substring Without Repeating Characters (Variable)
// Input: "abcabcbb"  →  Output: 3 ("abc")
// Input: "bbbbb"     →  Output: 1 ("b")
//
// Use a set to track characters in current window.
// Expand right; when duplicate found, shrink from left.
// Time: O(n), Space: O(k) where k = charset size
// ============================================================
function lengthOfLongestSubstring(s) {
  const inWindow = new Set();
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    // Shrink window until no duplicate
    while (inWindow.has(s[right])) {
      inWindow.delete(s[left]);
      left++;
    }

    inWindow.add(s[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

// ============================================================
// PROBLEM 3: Minimum Window Substring
// Find smallest window in s containing all chars of t.
// Input: s="ADOBECODEBANC", t="ABC"  →  Output: "BANC"
//
// Track character frequencies. Expand until all covered, then shrink.
// Time: O(|s| + |t|), Space: O(|s| + |t|)
// ============================================================
function minWindow(s, t) {
  if (s.length < t.length) return '';

  const need = new Map();
  for (const c of t) need.set(c, (need.get(c) || 0) + 1);

  let have = 0;
  const required = need.size;
  const window = new Map();

  let minLen = Infinity;
  let result = '';
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    const c = s[right];
    window.set(c, (window.get(c) || 0) + 1);

    // Check if we've met this character's requirement
    if (need.has(c) && window.get(c) === need.get(c)) have++;

    // Shrink window while all characters are covered
    while (have === required) {
      const windowLen = right - left + 1;
      if (windowLen < minLen) {
        minLen = windowLen;
        result = s.slice(left, right + 1);
      }

      // Remove left character from window
      const leftChar = s[left];
      window.set(leftChar, window.get(leftChar) - 1);
      if (need.has(leftChar) && window.get(leftChar) < need.get(leftChar)) have--;
      left++;
    }
  }

  return result;
}

// ============================================================
// PROBLEM 4: Longest Substring with K Distinct Characters
// Input: s="araaci", k=2  →  Output: 4 ("araa")
// Time: O(n), Space: O(k)
// ============================================================
function longestSubstringKDistinct(s, k) {
  const freq = new Map();
  let left = 0, maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    freq.set(s[right], (freq.get(s[right]) || 0) + 1);

    // Shrink window if more than k distinct characters
    while (freq.size > k) {
      const lc = s[left];
      freq.set(lc, freq.get(lc) - 1);
      if (freq.get(lc) === 0) freq.delete(lc);
      left++;
    }

    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

// ============================================================
// TESTS
// ============================================================
console.log('=== Sliding Window Tests ===\n');
console.log('Max Sum k=3 [2,1,5,1,3,2]:', maxSumSubarrayK([2,1,5,1,3,2], 3)); // 9

console.log('\nLongest no repeat:');
console.log('"abcabcbb":', lengthOfLongestSubstring('abcabcbb')); // 3
console.log('"bbbbb":', lengthOfLongestSubstring('bbbbb'));       // 1
console.log('"pwwkew":', lengthOfLongestSubstring('pwwkew'));     // 3

console.log('\nMin Window "ADOBECODEBANC" t="ABC":', minWindow('ADOBECODEBANC', 'ABC')); // BANC

console.log('\nLongest k=2 distinct "araaci":', longestSubstringKDistinct('araaci', 2)); // 4
