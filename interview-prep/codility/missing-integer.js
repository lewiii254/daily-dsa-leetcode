/**
 * CODILITY: Missing Integer
 * Find the smallest positive integer not present in array.
 * Time: O(n), Space: O(n)
 */
function missingInteger(A) {
  const set = new Set(A);
  let i = 1;
  while (set.has(i)) i++;
  return i;
}
console.log(missingInteger([1,3,6,4,1,2])); // 5
console.log(missingInteger([1,2,3]));        // 4
console.log(missingInteger([-1,-3]));        // 1
