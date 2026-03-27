/**
 * TOP LEETCODE PROBLEMS — Essential 5
 */

// LC 1: Two Sum — O(n)
function twoSum(nums, target) {
  const m = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (m.has(target - nums[i])) return [m.get(target - nums[i]), i];
    m.set(nums[i], i);
  }
}

// LC 121: Best Time to Buy/Sell Stock — O(n)
function maxProfit(prices) {
  let min = Infinity, profit = 0;
  for (const p of prices) { min = Math.min(min, p); profit = Math.max(profit, p - min); }
  return profit;
}

// LC 226: Invert Binary Tree — O(n)
function invertTree(root) {
  if (!root) return null;
  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
  return root;
}

// LC 206: Reverse Linked List — O(n)
function reverseList(head) {
  let prev = null, curr = head;
  while (curr) { [curr.next, prev, curr] = [prev, curr, curr.next]; }
  return prev;
}

// LC 104: Maximum Depth of Binary Tree — O(n)
function maxDepth(root) {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}

console.log('Two Sum [2,7,11,15] t=9:', twoSum([2,7,11,15], 9)); // [0,1]
console.log('Max Profit [7,1,5,3,6,4]:', maxProfit([7,1,5,3,6,4])); // 5
