/**
 * GREEDY ALGORITHM PROBLEMS
 * Problems where making the locally optimal choice leads to the global optimum.
 */

// ============================================================
// PROBLEM 1: Jump Game
// Can you reach the last index?
// Input: [2,3,1,1,4]  →  true (0→1→4)
// Input: [3,2,1,0,4]  →  false (stuck at index 3)
//
// Greedy: Track the farthest index reachable at each step.
// Time: O(n), Space: O(1)
// ============================================================
function canJump(nums) {
  let maxReach = 0; // farthest index we can reach

  for (let i = 0; i < nums.length; i++) {
    if (i > maxReach) return false;          // can't reach this index
    maxReach = Math.max(maxReach, i + nums[i]); // update farthest reach
  }

  return true;
}

// ============================================================
// PROBLEM 2: Jump Game II (Minimum Jumps)
// Find minimum number of jumps to reach the last index.
// Input: [2,3,1,1,4]  →  2 (0→1→4)
//
// Greedy: At each "boundary", jump to the farthest reachable position.
// Time: O(n), Space: O(1)
// ============================================================
function jump(nums) {
  let jumps = 0;
  let currentEnd = 0;  // end of current jump's reach
  let farthest = 0;    // farthest we can reach

  for (let i = 0; i < nums.length - 1; i++) {
    farthest = Math.max(farthest, i + nums[i]);

    if (i === currentEnd) { // reached the boundary — must jump
      jumps++;
      currentEnd = farthest;
    }
  }

  return jumps;
}

// ============================================================
// PROBLEM 3: Activity Selection Problem
// Given activities with start/end times, select maximum non-overlapping activities.
// Input: [[1,4],[3,5],[0,6],[5,7],[3,8],[5,9],[6,10],[8,11],[8,12],[2,13],[12,14]]
// Output: 4 activities
//
// Greedy: Always pick the activity with the earliest end time.
// Time: O(n log n) for sort, O(n) after, Space: O(1)
// ============================================================
function activitySelection(activities) {
  // Sort by end time
  activities.sort((a, b) => a[1] - b[1]);

  const selected = [activities[0]];
  let lastEnd = activities[0][1];

  for (let i = 1; i < activities.length; i++) {
    if (activities[i][0] >= lastEnd) { // start time >= last end time
      selected.push(activities[i]);
      lastEnd = activities[i][1];
    }
  }

  return selected;
}

// ============================================================
// PROBLEM 4: Assign Cookies (Greedy)
// Greedily assign smallest sufficient cookie to smallest greed child.
// Input: g=[1,2,3], s=[1,1]  →  Output: 1
// Time: O(n log n + m log m), Space: O(1)
// ============================================================
function findContentChildren(g, s) {
  g.sort((a, b) => a - b); // sort greed factors
  s.sort((a, b) => a - b); // sort cookie sizes

  let child = 0, cookie = 0;

  while (child < g.length && cookie < s.length) {
    if (s[cookie] >= g[child]) child++; // cookie satisfies this child
    cookie++; // try next cookie regardless
  }

  return child; // number of satisfied children
}

// ============================================================
// PROBLEM 5: Minimum Number of Arrows to Burst Balloons
// Balloons span [start, end]. Arrow at x bursts all balloons covering x.
// Input: [[10,16],[2,8],[1,6],[7,12]]  →  Output: 2
//
// Greedy: Sort by end. Shoot at first balloon's end to burst all overlapping.
// Time: O(n log n), Space: O(1)
// ============================================================
function findMinArrowShots(points) {
  if (points.length === 0) return 0;

  points.sort((a, b) => a[1] - b[1]); // sort by end coordinate

  let arrows = 1;
  let arrowPos = points[0][1]; // shoot at end of first balloon

  for (let i = 1; i < points.length; i++) {
    if (points[i][0] > arrowPos) { // balloon starts after current arrow
      arrows++;
      arrowPos = points[i][1]; // shoot at end of this balloon
    }
  }

  return arrows;
}

// ============================================================
// TESTS
// ============================================================
console.log('=== Greedy Algorithm Tests ===\n');
console.log('Can Jump [2,3,1,1,4]:', canJump([2,3,1,1,4]));  // true
console.log('Can Jump [3,2,1,0,4]:', canJump([3,2,1,0,4]));  // false

console.log('\nMin Jumps [2,3,1,1,4]:', jump([2,3,1,1,4]));  // 2
console.log('Min Jumps [2,3,0,1,4]:', jump([2,3,0,1,4]));   // 2

const activities = [[1,4],[3,5],[0,6],[5,7],[3,9],[5,9],[6,10],[8,11]];
console.log('\nActivity Selection count:', activitySelection(activities).length);

console.log('\nCookies g=[1,2,3] s=[1,1]:', findContentChildren([1,2,3], [1,1])); // 1
console.log('Cookies g=[1,2] s=[1,2,3]:', findContentChildren([1,2], [1,2,3])); // 2

console.log('\nMin Arrows [[10,16],[2,8],[1,6],[7,12]]:', findMinArrowShots([[10,16],[2,8],[1,6],[7,12]])); // 2
