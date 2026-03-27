/**
 * BINARY SEARCH — Standard and Variant Implementations
 * Binary search template and common variations.
 */

// ============================================================
// TEMPLATE 1: Standard Binary Search
// Returns index of target, or -1 if not found.
// Input: [1,3,5,7,9], target=7  →  Output: 3
// Time: O(log n), Space: O(1)
// ============================================================
function binarySearch(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2); // avoids overflow

    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) left = mid + 1;  // target in right half
    else right = mid - 1;                           // target in left half
  }

  return -1; // not found
}

// ============================================================
// TEMPLATE 2: Find Leftmost (First) Occurrence
// Returns the leftmost index where target occurs.
// Input: [1,2,2,2,3], target=2  →  Output: 1
// Time: O(log n), Space: O(1)
// ============================================================
function searchLeft(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let result = -1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === target) {
      result = mid;      // record and keep searching left
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;
}

// ============================================================
// TEMPLATE 3: Find Rightmost (Last) Occurrence
// Returns the rightmost index where target occurs.
// Input: [1,2,2,2,3], target=2  →  Output: 3
// Time: O(log n), Space: O(1)
// ============================================================
function searchRight(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let result = -1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === target) {
      result = mid;      // record and keep searching right
      left = mid + 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;
}

// ============================================================
// PROBLEM 1: Search in Rotated Sorted Array
// Array was sorted, then rotated at some pivot.
// Input: [4,5,6,7,0,1,2], target=0  →  Output: 4
// Time: O(log n), Space: O(1)
// ============================================================
function searchRotated(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === target) return mid;

    // Determine which half is sorted
    if (nums[left] <= nums[mid]) {
      // Left half is sorted
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1; // target is in sorted left half
      } else {
        left = mid + 1;  // target is in right half
      }
    } else {
      // Right half is sorted
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;  // target is in sorted right half
      } else {
        right = mid - 1; // target is in left half
      }
    }
  }

  return -1;
}

// ============================================================
// PROBLEM 2: Find Peak Element
// A peak is greater than its neighbors. Return any peak index.
// Input: [1,2,3,1]  →  Output: 2 (arr[2]=3 is a peak)
// Time: O(log n), Space: O(1)
// ============================================================
function findPeakElement(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] > nums[mid + 1]) {
      right = mid;       // peak is in left half (including mid)
    } else {
      left = mid + 1;    // peak is in right half
    }
  }

  return left; // left === right at peak
}

// ============================================================
// PROBLEM 3: Find Square Root (integer part)
// Input: 8  →  Output: 2 (floor(sqrt(8)) = 2)
// Time: O(log n), Space: O(1)
// ============================================================
function mySqrt(x) {
  if (x < 2) return x;

  let left = 1;
  let right = Math.floor(x / 2);
  let result = 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (mid * mid === x) return mid;
    else if (mid * mid < x) {
      result = mid;      // mid is a valid candidate (floor)
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;
}

// ============================================================
// TESTS
// ============================================================
console.log('=== Binary Search Tests ===\n');
console.log('Search 7 in [1,3,5,7,9]:', binarySearch([1,3,5,7,9], 7)); // 3
console.log('Search 6 in [1,3,5,7,9]:', binarySearch([1,3,5,7,9], 6)); // -1

console.log('\nLeftmost 2 in [1,2,2,2,3]:', searchLeft([1,2,2,2,3], 2));  // 1
console.log('Rightmost 2 in [1,2,2,2,3]:', searchRight([1,2,2,2,3], 2)); // 3

console.log('\nSearch rotated [4,5,6,7,0,1,2] target=0:', searchRotated([4,5,6,7,0,1,2], 0)); // 4
console.log('Search rotated [4,5,6,7,0,1,2] target=3:', searchRotated([4,5,6,7,0,1,2], 3)); // -1

console.log('\nPeak element in [1,2,3,1]:', findPeakElement([1,2,3,1])); // 2
console.log('Peak element in [1,2,1,3,5,6,4]:', findPeakElement([1,2,1,3,5,6,4])); // 5

console.log('\nSqrt(8):', mySqrt(8));   // 2
console.log('Sqrt(4):', mySqrt(4));    // 2
console.log('Sqrt(16):', mySqrt(16));  // 4
