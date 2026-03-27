/**
 * FIBONACCI SEQUENCE
 * Find the nth Fibonacci number
 *
 * Sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...
 * F(n) = F(n-1) + F(n-2), with F(0)=0 and F(1)=1
 *
 * This file demonstrates three approaches with increasing efficiency.
 */

// ============================================================
// APPROACH 1: Naive Recursion — O(2^n) time, O(n) space
// ============================================================
// Problem: Computes the same subproblems repeatedly.
// fibNaive(6) calls fibNaive(4) TWICE, fibNaive(3) THREE times, etc.
function fibNaive(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibNaive(n - 1) + fibNaive(n - 2);
}

// ============================================================
// APPROACH 2: Memoization (Top-Down DP) — O(n) time, O(n) space
// ============================================================
// Cache computed results to avoid repeated work.
// Start from the top (n) and work down to base cases.
function fibMemo(n, memo = new Map()) {
  if (memo.has(n)) return memo.get(n);
  if (n === 0) return 0;
  if (n === 1) return 1;

  const result = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  memo.set(n, result);
  return result;
}

// ============================================================
// APPROACH 3: Iterative / Tabulation (Bottom-Up DP) — O(n) time, O(1) space
// ============================================================
// Build up from the base cases. Best for large n.
function fibIterative(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let prev = 0;
  let curr = 1;

  for (let i = 2; i <= n; i++) {
    const next = prev + curr;
    prev = curr;
    curr = next;
  }

  return curr;
}

// ============================================================
// APPROACH 4: Matrix Exponentiation — O(log n) time
// ============================================================
// Uses the identity: [[1,1],[1,0]]^n = [[F(n+1),F(n)],[F(n),F(n-1)]]
// Useful for computing extremely large Fibonacci numbers fast.
function matMul(A, B) {
  return [
    [A[0][0] * B[0][0] + A[0][1] * B[1][0], A[0][0] * B[0][1] + A[0][1] * B[1][1]],
    [A[1][0] * B[0][0] + A[1][1] * B[1][0], A[1][0] * B[0][1] + A[1][1] * B[1][1]],
  ];
}

function matPow(M, n) {
  if (n === 1) return M;
  if (n % 2 === 0) {
    const half = matPow(M, n / 2);
    return matMul(half, half);
  }
  return matMul(M, matPow(M, n - 1));
}

function fibMatrix(n) {
  if (n === 0) return 0;
  const M = [[1, 1], [1, 0]];
  return matPow(M, n)[0][1];
}

// ============================================================
// BONUS: Generate Fibonacci sequence up to n terms
// ============================================================
function fibSequence(n) {
  const seq = [0, 1];
  for (let i = 2; i < n; i++) {
    seq.push(seq[i - 1] + seq[i - 2]);
  }
  return seq.slice(0, n);
}

// ============================================================
// TESTS
// ============================================================
console.log('=== Fibonacci Tests ===');
console.log('F(0):', fibIterative(0));   // 0
console.log('F(1):', fibIterative(1));   // 1
console.log('F(6):', fibIterative(6));   // 8
console.log('F(10):', fibIterative(10)); // 55
console.log('F(20):', fibIterative(20)); // 6765

console.log('\nFirst 10 Fibonacci numbers:', fibSequence(10));
// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

console.log('\n=== Approach Comparison (F(35)) ===');

console.time('Naive');
fibNaive(35);
console.timeEnd('Naive'); // ~100ms

console.time('Memoized');
fibMemo(35);
console.timeEnd('Memoized'); // <1ms

console.time('Iterative');
fibIterative(35);
console.timeEnd('Iterative'); // <1ms

console.time('Matrix');
fibMatrix(35);
console.timeEnd('Matrix'); // <1ms

console.log('\n=== All approaches agree ===');
const n = 15;
console.log(`F(${n}) naive:     `, fibNaive(n));
console.log(`F(${n}) memo:      `, fibMemo(n));
console.log(`F(${n}) iterative: `, fibIterative(n));
console.log(`F(${n}) matrix:    `, fibMatrix(n));
