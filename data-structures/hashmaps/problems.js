/**
 * HASHMAP PROBLEMS
 * Classic interview questions showcasing different HashMap patterns.
 */

// ============================================================
// PROBLEM 1: Two Sum
// Already covered in arrays, shown here for pattern demonstration.
// Input: [2,7,11,15], target=9  →  [0,1]
// Time: O(n), Space: O(n)
// ============================================================
function twoSum(nums, target) {
  const seen = new Map();
  for (let i = 0; i < nums.length; i++) {
    const comp = target - nums[i];
    if (seen.has(comp)) return [seen.get(comp), i];
    seen.set(nums[i], i);
  }
  return [];
}

// ============================================================
// PROBLEM 2: Group Anagrams
// Group strings that are anagrams of each other.
// Input: ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
//
// Key insight: Anagrams have the same sorted characters.
// Use sorted string as HashMap key.
// Time: O(n * k log k) where k is max string length, Space: O(n*k)
// ============================================================
function groupAnagrams(strs) {
  const map = new Map();

  for (const str of strs) {
    const key = str.split('').sort().join(''); // sorted chars = canonical form
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(str);
  }

  return [...map.values()];
}

// ============================================================
// PROBLEM 3: Top K Frequent Elements
// Return k most frequent elements.
// Input: [1,1,1,2,2,3], k=2  →  [1,2]
//
// Approach: Count frequencies, then sort by frequency.
// Time: O(n log n), Space: O(n)
// ============================================================
function topKFrequent(nums, k) {
  const freq = new Map();
  for (const num of nums) freq.set(num, (freq.get(num) || 0) + 1);

  return [...freq.entries()]
    .sort((a, b) => b[1] - a[1]) // sort by frequency descending
    .slice(0, k)
    .map(([num]) => num);
}

// ============================================================
// PROBLEM 4: First Non-Repeating Character
// Input: "leetcode"  →  Output: 0 (index of 'l')
// Input: "aabb"      →  Output: -1
//
// Time: O(n), Space: O(1) — at most 26 characters
// ============================================================
function firstUniqChar(s) {
  const freq = new Map();

  // Count frequencies
  for (const char of s) freq.set(char, (freq.get(char) || 0) + 1);

  // Find first character with frequency 1
  for (let i = 0; i < s.length; i++) {
    if (freq.get(s[i]) === 1) return i;
  }

  return -1;
}

// ============================================================
// PROBLEM 5: Longest Consecutive Sequence
// Input: [100,4,200,1,3,2]  →  Output: 4 ([1,2,3,4])
//
// Approach: Put all numbers in a Set. For each number that
// is the START of a sequence (n-1 not in set), count how long.
// Time: O(n), Space: O(n)
// ============================================================
function longestConsecutive(nums) {
  const numSet = new Set(nums);
  let maxLen = 0;

  for (const num of numSet) {
    // Only start counting if num is the beginning of a sequence
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentLen = 1;

      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentLen++;
      }

      maxLen = Math.max(maxLen, currentLen);
    }
  }

  return maxLen;
}

// ============================================================
// PROBLEM 6: Subarray Sum Equals K
// Count subarrays whose sum equals k.
// Input: [1,1,1], k=2  →  Output: 2
//
// Approach: Prefix sum + HashMap. For each prefix[i], check how
// many previous prefix[j] satisfy prefix[i] - prefix[j] = k.
// Time: O(n), Space: O(n)
// ============================================================
function subarraySum(nums, k) {
  const prefixCounts = new Map([[0, 1]]); // prefix sum → count
  let prefixSum = 0;
  let count = 0;

  for (const num of nums) {
    prefixSum += num;
    count += prefixCounts.get(prefixSum - k) || 0; // check if complement exists
    prefixCounts.set(prefixSum, (prefixCounts.get(prefixSum) || 0) + 1);
  }

  return count;
}

// ============================================================
// TESTS
// ============================================================
console.log('=== HashMap Problem Tests ===\n');
console.log('Two Sum [2,7,11,15] t=9:', twoSum([2,7,11,15], 9)); // [0,1]
console.log('Group Anagrams:', groupAnagrams(['eat','tea','tan','ate','nat','bat']));
console.log('Top K Frequent [1,1,1,2,2,3] k=2:', topKFrequent([1,1,1,2,2,3], 2)); // [1,2]
console.log('First Unique "leetcode":', firstUniqChar('leetcode')); // 0
console.log('First Unique "aabb":', firstUniqChar('aabb'));         // -1
console.log('Longest Consecutive [100,4,200,1,3,2]:', longestConsecutive([100,4,200,1,3,2])); // 4
console.log('Subarray Sum [1,1,1] k=2:', subarraySum([1,1,1], 2)); // 2
