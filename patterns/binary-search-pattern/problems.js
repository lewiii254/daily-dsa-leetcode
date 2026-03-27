/**
 * BINARY SEARCH PATTERN PROBLEMS
 */

// Search Insert Position — O(log n)
function searchInsert(nums, target) {
  let lo = 0, hi = nums.length;
  while (lo < hi) {
    const mid = lo + ((hi - lo) >> 1);
    if (nums[mid] < target) lo = mid + 1; else hi = mid;
  }
  return lo;
}

// Koko Eating Bananas — O(n log m)
function minEatingSpeed(piles, h) {
  let lo = 1, hi = Math.max(...piles);
  while (lo < hi) {
    const mid = lo + ((hi - lo) >> 1);
    const hours = piles.reduce((s, p) => s + Math.ceil(p / mid), 0);
    if (hours <= h) hi = mid; else lo = mid + 1;
  }
  return lo;
}

// Capacity to Ship Packages — O(n log sum)
function shipWithinDays(weights, days) {
  let lo = Math.max(...weights), hi = weights.reduce((a, b) => a + b, 0);
  while (lo < hi) {
    const mid = lo + ((hi - lo) >> 1);
    let d = 1, curr = 0;
    for (const w of weights) { if (curr + w > mid) { d++; curr = 0; } curr += w; }
    if (d <= days) hi = mid; else lo = mid + 1;
  }
  return lo;
}

console.log('=== Binary Search Pattern Tests ===');
console.log('Insert pos [1,3,5,6] t=5:', searchInsert([1,3,5,6], 5)); // 2
console.log('Koko [3,6,7,11] h=8:', minEatingSpeed([3,6,7,11], 8));   // 4
console.log('Ship [1,2,3,4,5,6,7,8,9,10] days=5:', shipWithinDays([1,2,3,4,5,6,7,8,9,10], 5)); // 15
