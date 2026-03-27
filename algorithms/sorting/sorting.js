/**
 * SORTING ALGORITHMS
 * Five classic sorting algorithms with comments explaining each step.
 * All operate on arrays of numbers.
 */

// ============================================================
// 1. BUBBLE SORT — O(n²) time, O(1) space
// Repeatedly swaps adjacent elements if they're in the wrong order.
// Named because smaller elements "bubble" to the top.
// ============================================================
function bubbleSort(arr) {
  const a = [...arr]; // copy to avoid mutating input
  const n = a.length;

  for (let i = 0; i < n - 1; i++) {
    let swapped = false;

    // After each pass, the largest unsorted element is at a[n-1-i]
    for (let j = 0; j < n - 1 - i; j++) {
      if (a[j] > a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
        swapped = true;
      }
    }

    // Optimization: if no swaps in a pass, array is sorted
    if (!swapped) break;
  }

  return a;
}

// ============================================================
// 2. SELECTION SORT — O(n²) time, O(1) space
// Finds minimum in unsorted portion and swaps to front.
// Always O(n²) — no early exit optimization.
// ============================================================
function selectionSort(arr) {
  const a = [...arr];
  const n = a.length;

  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;

    // Find index of minimum in a[i+1..n-1]
    for (let j = i + 1; j < n; j++) {
      if (a[j] < a[minIdx]) minIdx = j;
    }

    // Swap minimum with current position
    if (minIdx !== i) [a[i], a[minIdx]] = [a[minIdx], a[i]];
  }

  return a;
}

// ============================================================
// 3. INSERTION SORT — O(n²) worst, O(n) best, O(1) space
// Builds sorted array one element at a time.
// Great for small arrays and nearly-sorted data.
// ============================================================
function insertionSort(arr) {
  const a = [...arr];

  for (let i = 1; i < a.length; i++) {
    const key = a[i]; // element to insert into sorted portion
    let j = i - 1;

    // Shift elements right until we find the correct position
    while (j >= 0 && a[j] > key) {
      a[j + 1] = a[j];
      j--;
    }

    a[j + 1] = key; // insert key into correct position
  }

  return a;
}

// ============================================================
// 4. MERGE SORT — O(n log n) all cases, O(n) space
// Divide: split array in half recursively.
// Conquer: sort each half.
// Combine: merge sorted halves.
// Stable and reliable — used in many standard libraries.
// ============================================================
function mergeSort(arr) {
  if (arr.length <= 1) return arr; // base case

  const mid = Math.floor(arr.length / 2);
  const left  = mergeSort(arr.slice(0, mid));  // sort left half
  const right = mergeSort(arr.slice(mid));      // sort right half

  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let i = 0, j = 0;

  // Compare elements from both halves and take the smaller one
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }

  // Append any remaining elements
  return result.concat(left.slice(i)).concat(right.slice(j));
}

// ============================================================
// 5. QUICK SORT — O(n log n) average, O(n²) worst, O(log n) space
// Pick a pivot, partition so smaller elements go left, larger right.
// Then recursively sort both partitions.
// In practice, often faster than merge sort due to cache efficiency.
// ============================================================
function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    const pivotIdx = partition(arr, low, high);
    quickSort(arr, low, pivotIdx - 1);      // sort left partition
    quickSort(arr, pivotIdx + 1, high);     // sort right partition
  }
  return arr;
}

function partition(arr, low, high) {
  // Use last element as pivot (Lomuto scheme)
  const pivot = arr[high];
  let i = low - 1; // index of smaller element

  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]]; // swap smaller element to front
    }
  }

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; // place pivot in correct position
  return i + 1;
}

// ============================================================
// TESTS
// ============================================================
const testArr = [64, 34, 25, 12, 22, 11, 90];
const expected = [11, 12, 22, 25, 34, 64, 90];

console.log('=== Sorting Algorithm Tests ===\n');
console.log('Input:', testArr);
console.log('Bubble Sort:   ', bubbleSort(testArr));
console.log('Selection Sort:', selectionSort(testArr));
console.log('Insertion Sort:', insertionSort(testArr));
console.log('Merge Sort:    ', mergeSort(testArr));
const qs = [...testArr];
console.log('Quick Sort:    ', quickSort(qs));

console.log('\n=== Performance Test (n=10000) ===');
const large = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 10000));

console.time('Merge Sort');
mergeSort(large);
console.timeEnd('Merge Sort');

console.time('Quick Sort');
quickSort([...large]);
console.timeEnd('Quick Sort');

console.time('Built-in Sort');
[...large].sort((a, b) => a - b);
console.timeEnd('Built-in Sort');
