/**
 * MOCK TEST 1 — Solutions
 */

// P1: Two Sum — O(n)
function twoSum(nums, target) {
  const m = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (m.has(target - nums[i])) return [m.get(target - nums[i]), i];
    m.set(nums[i], i);
  }
}

// P2: Valid Parentheses — O(n)
function isValid(s) {
  const stack = [], map = {')':'(',']':'[','}':'{'};
  for (const c of s) {
    if ('([{'.includes(c)) stack.push(c);
    else if (stack.pop() !== map[c]) return false;
  }
  return stack.length === 0;
}

// P3: Maximum Subarray (Kadane's) — O(n)
function maxSubArray(nums) {
  let max = nums[0], curr = nums[0];
  for (let i = 1; i < nums.length; i++) {
    curr = Math.max(nums[i], curr + nums[i]);
    max = Math.max(max, curr);
  }
  return max;
}

// P4: Merge Two Sorted Lists — O(m+n)
function mergeTwoLists(l1, l2) {
  if (!l1) return l2; if (!l2) return l1;
  if (l1.val <= l2.val) { l1.next = mergeTwoLists(l1.next, l2); return l1; }
  l2.next = mergeTwoLists(l1, l2.next); return l2;
}

// P5: Binary Search — O(log n)
function binarySearch(nums, target) {
  let lo = 0, hi = nums.length - 1;
  while (lo <= hi) {
    const mid = lo + ((hi - lo) >> 1);
    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) lo = mid + 1;
    else hi = mid - 1;
  }
  return -1;
}

console.log('P1:', twoSum([2,7,11,15], 9));                    // [0,1]
console.log('P2:', isValid('({[]})'));                          // true
console.log('P3:', maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));     // 6
console.log('P5:', binarySearch([1,3,5,7,9,11], 7));           // 3
