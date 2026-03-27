/**
 * HACKERRANK PROBLEMS
 */

// Sales by Match — count pairs of identical socks
function sockMerchant(n, ar) {
  const freq = new Map();
  for (const s of ar) freq.set(s, (freq.get(s) || 0) + 1);
  let pairs = 0;
  for (const count of freq.values()) pairs += Math.floor(count / 2);
  return pairs;
}

// Counting Valleys — count complete valley traversals
function countingValleys(steps, path) {
  let level = 0, valleys = 0;
  for (const step of path) {
    const prev = level;
    level += step === 'U' ? 1 : -1;
    if (prev < 0 && level === 0) valleys++;
  }
  return valleys;
}

// Jumping on Clouds — min jumps to reach end (skip thunderclouds=1)
function jumpingOnClouds(c) {
  let jumps = 0, i = 0;
  while (i < c.length - 1) {
    if (i + 2 < c.length && c[i + 2] === 0) i += 2;
    else i += 1;
    jumps++;
  }
  return jumps;
}

console.log('=== HackerRank Tests ===');
console.log('Sock pairs [10,20,20,10,10,30,50,10,20]:', sockMerchant(9, [10,20,20,10,10,30,50,10,20])); // 3
console.log('Valleys "UDDDUDUU":', countingValleys(8, 'UDDDUDUU')); // 1
console.log('Jumping clouds [0,0,1,0,0,1,0]:', jumpingOnClouds([0,0,1,0,0,1,0])); // 4
