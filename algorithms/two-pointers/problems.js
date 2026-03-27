/**
 * TWO POINTERS PROBLEMS
 * Classic problems solved efficiently with two-pointer technique.
 */

// ============================================================
// PROBLEM 1: Two Sum II (Sorted Input)
// Input is sorted. Find two numbers summing to target.
// Input: [2,7,11,15], target=9  →  [1,2] (1-indexed)
// Time: O(n), Space: O(1)
// ============================================================
function twoSumSorted(numbers, target) {
  let left = 0, right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) return [left + 1, right + 1]; // 1-indexed
    else if (sum < target) left++;
    else right--;
  }

  return [];
}

// ============================================================
// PROBLEM 2: Three Sum
// Find all unique triplets that sum to zero.
// Input: [-1,0,1,2,-1,-4]  →  [[-1,-1,2],[-1,0,1]]
// Time: O(n²), Space: O(1)
// ============================================================
function threeSum(nums) {
  nums.sort((a, b) => a - b); // sort first!
  const result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    // Skip duplicates for i
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    if (nums[i] > 0) break; // optimisation: if positive, can't sum to 0

    let left = i + 1, right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        // Skip duplicates
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++; right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}

// ============================================================
// PROBLEM 3: Container With Most Water
// Maximize water between vertical lines.
// Input: [1,8,6,2,5,4,8,3,7]  →  Output: 49
// Time: O(n), Space: O(1)
// ============================================================
function maxArea(height) {
  let left = 0, right = height.length - 1;
  let maxWater = 0;

  while (left < right) {
    const water = Math.min(height[left], height[right]) * (right - left);
    maxWater = Math.max(maxWater, water);

    // Move the shorter line inward (greedy)
    if (height[left] < height[right]) left++;
    else right--;
  }

  return maxWater;
}

// ============================================================
// PROBLEM 4: Remove Duplicates from Sorted Array
// Remove in-place, return new length. Don't use extra space.
// Input: [1,1,2]  →  Output: 2, array=[1,2,_]
// Time: O(n), Space: O(1)
// ============================================================
function removeDuplicates(nums) {
  if (nums.length === 0) return 0;

  let slow = 0; // slow pointer: last position of unique element

  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow]) {
      slow++;
      nums[slow] = nums[fast]; // place next unique element
    }
  }

  return slow + 1; // length of array without duplicates
}

// ============================================================
// PROBLEM 5: Valid Palindrome
// Consider only alphanumeric characters, ignore case.
// Input: "A man, a plan, a canal: Panama"  →  true
// Time: O(n), Space: O(1)
// ============================================================
function isPalindrome(s) {
  const isAlphaNum = c => /[a-z0-9]/.test(c);
  let left = 0, right = s.length - 1;

  while (left < right) {
    while (left < right && !isAlphaNum(s[left].toLowerCase()))  left++;
    while (left < right && !isAlphaNum(s[right].toLowerCase())) right--;

    if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;
    left++; right--;
  }

  return true;
}

// ============================================================
// TESTS
// ============================================================
console.log('=== Two Pointers Tests ===\n');
console.log('Two Sum Sorted [2,7,11,15] t=9:', twoSumSorted([2,7,11,15], 9)); // [1,2]

console.log('\nThree Sum [-1,0,1,2,-1,-4]:');
console.log(threeSum([-1,0,1,2,-1,-4])); // [[-1,-1,2],[-1,0,1]]

console.log('\nMax Water [1,8,6,2,5,4,8,3,7]:', maxArea([1,8,6,2,5,4,8,3,7])); // 49

const dupArr = [1,1,2,3,3,4];
console.log('\nRemove Duplicates [1,1,2,3,3,4]:', removeDuplicates(dupArr)); // 4

console.log('\nPalindrome "A man, a plan, a canal: Panama":', isPalindrome('A man, a plan, a canal: Panama')); // true
console.log('Palindrome "race a car":', isPalindrome('race a car')); // false
