/**
 * CODILITY: Frog Jump
 * A frog at position X wants to reach Y, jumping fixed distance D.
 * Return minimum number of jumps. If unreachable, return -1.
 * Time: O(1), Space: O(1)
 */
function frogJump(X, Y, D) {
  if (X >= Y) return 0;
  return Math.ceil((Y - X) / D);
}
console.log(frogJump(10, 85, 30)); // 3
console.log(frogJump(10, 10, 5));  // 0
