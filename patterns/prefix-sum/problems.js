/**
 * PREFIX SUM PROBLEMS
 */

// Range Sum Query — O(1) per query after O(n) build
class NumArray {
  constructor(nums) {
    this.prefix = [0];
    for (const n of nums) this.prefix.push(this.prefix.at(-1) + n);
  }
  sumRange(l, r) { return this.prefix[r+1] - this.prefix[l]; }
}

// Subarray Sum Equals K — O(n)
function subarraySum(nums, k) {
  const map = new Map([[0, 1]]);
  let sum = 0, count = 0;
  for (const n of nums) {
    sum += n;
    count += map.get(sum - k) || 0;
    map.set(sum, (map.get(sum) || 0) + 1);
  }
  return count;
}

// Pivot Index — O(n)
function pivotIndex(nums) {
  const total = nums.reduce((a, b) => a + b, 0);
  let left = 0;
  for (let i = 0; i < nums.length; i++) {
    if (left === total - left - nums[i]) return i;
    left += nums[i];
  }
  return -1;
}

console.log('=== Prefix Sum Tests ===');
const na = new NumArray([1,2,3,4,5]);
console.log('sumRange(0,2):', na.sumRange(0,2)); // 6
console.log('Subarray sum [1,1,1] k=2:', subarraySum([1,1,1], 2)); // 2
console.log('Pivot index [1,7,3,6,5,6]:', pivotIndex([1,7,3,6,5,6])); // 3
