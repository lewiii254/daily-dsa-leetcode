/**
 * ARRAY PROBLEMS
 * Classic interview questions on arrays with detailed explanations.
 * All solutions use ES6 JavaScript.
 */

// ============================================================
// PROBLEM 1: Two Sum
// Given array nums and target, return indices of two numbers that sum to target.
// Input: nums = [2,7,11,15], target = 9  →  Output: [0,1]
//
// Intuition: Use a HashMap. For each x, check if (target - x) was seen before.
// Time: O(n), Space: O(n)
// ============================================================
function twoSum(nums, target) {
  const seen = new Map(); // maps value → index

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (seen.has(complement)) {
      return [seen.get(complement), i];
    }
    seen.set(nums[i], i);
  }

  return []; // no solution
}

// ============================================================
// PROBLEM 2: Maximum Subarray (Kadane's Algorithm)
// Find the contiguous subarray with the largest sum.
// Input: [-2,1,-3,4,-1,2,1,-5,4]  →  Output: 6 (subarray [4,-1,2,1])
//
// Intuition: At each index, either extend the current subarray or start fresh.
// currentSum = max(nums[i], currentSum + nums[i])
// Time: O(n), Space: O(1)
// ============================================================
function maxSubArray(nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

// ============================================================
// PROBLEM 3: Best Time to Buy and Sell Stock
// Maximize profit from one buy-sell transaction.
// Input: [7,1,5,3,6,4]  →  Output: 5 (buy at 1, sell at 6)
//
// Intuition: Track minimum price seen so far. Profit = price - minPrice.
// Time: O(n), Space: O(1)
// ============================================================
function maxProfit(prices) {
  let minPrice = Infinity;
  let maxProfitVal = 0;

  for (const price of prices) {
    if (price < minPrice) {
      minPrice = price;
    } else if (price - minPrice > maxProfitVal) {
      maxProfitVal = price - minPrice;
    }
  }

  return maxProfitVal;
}

// ============================================================
// PROBLEM 4: Contains Duplicate
// Return true if any value appears at least twice.
// Input: [1,2,3,1]  →  Output: true
// Time: O(n), Space: O(n)
// ============================================================
function containsDuplicate(nums) {
  const seen = new Set();
  for (const num of nums) {
    if (seen.has(num)) return true;
    seen.add(num);
  }
  return false;
}

// ============================================================
// PROBLEM 5: Product of Array Except Self
// answer[i] = product of all nums except nums[i]. No division allowed.
// Input: [1,2,3,4]  →  Output: [24,12,8,6]
//
// Intuition: Left pass builds prefix products. Right pass multiplies suffix products.
// Time: O(n), Space: O(1) extra (output array doesn't count)
// ============================================================
function productExceptSelf(nums) {
  const n = nums.length;
  const result = new Array(n).fill(1);

  // Left pass: result[i] = product of all elements to the left of i
  let leftProduct = 1;
  for (let i = 0; i < n; i++) {
    result[i] = leftProduct;
    leftProduct *= nums[i];
  }

  // Right pass: multiply each position by product of elements to the right
  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= rightProduct;
    rightProduct *= nums[i];
  }

  return result;
}

// ============================================================
// PROBLEM 6: Rotate Array
// Rotate array to the right by k steps.
// Input: [1,2,3,4,5,6,7], k=3  →  Output: [5,6,7,1,2,3,4]
//
// Intuition: Reverse the whole array, then reverse first k, then reverse rest.
// Time: O(n), Space: O(1)
// ============================================================
function rotate(nums, k) {
  k = k % nums.length; // handle k > n
  const reverse = (arr, start, end) => {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  };
  reverse(nums, 0, nums.length - 1); // reverse all
  reverse(nums, 0, k - 1);           // reverse first k
  reverse(nums, k, nums.length - 1); // reverse remaining
  return nums;
}

// ============================================================
// TESTS
// ============================================================
console.log('=== Array Problem Tests ===\n');
console.log('Two Sum [2,7,11,15] target=9:', twoSum([2, 7, 11, 15], 9));          // [0,1]
console.log('Two Sum [3,2,4] target=6:', twoSum([3, 2, 4], 6));                   // [1,2]
console.log('Max Subarray [-2,1,-3,4,-1,2,1,-5,4]:', maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // 6
console.log('Max Profit [7,1,5,3,6,4]:', maxProfit([7, 1, 5, 3, 6, 4]));         // 5
console.log('Max Profit [7,6,4,3,1]:', maxProfit([7, 6, 4, 3, 1]));              // 0
console.log('Contains Duplicate [1,2,3,1]:', containsDuplicate([1, 2, 3, 1]));   // true
console.log('Contains Duplicate [1,2,3,4]:', containsDuplicate([1, 2, 3, 4]));   // false
console.log('Product Except Self [1,2,3,4]:', productExceptSelf([1, 2, 3, 4]));  // [24,12,8,6]
console.log('Rotate [1,2,3,4,5,6,7] k=3:', rotate([1,2,3,4,5,6,7], 3));         // [5,6,7,1,2,3,4]
