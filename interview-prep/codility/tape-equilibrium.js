/**
 * CODILITY: Tape Equilibrium
 * Minimize absolute difference between two parts of a tape split at position P.
 * Time: O(n), Space: O(1)
 */
function tapeEquilibrium(A) {
  const total = A.reduce((a, b) => a + b, 0);
  let left = 0, minDiff = Infinity;
  for (let i = 0; i < A.length - 1; i++) {
    left += A[i];
    minDiff = Math.min(minDiff, Math.abs(2 * left - total));
  }
  return minDiff;
}
console.log(tapeEquilibrium([3,1,2,4,3])); // 1
