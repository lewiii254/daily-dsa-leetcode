/**
 * BIT MANIPULATION EXAMPLES
 * Common bit manipulation tricks and classic interview problems.
 * All solutions run in O(1) or O(log n) time with O(1) space.
 */

// ============================================================
// PROBLEM 1: Single Number
// Every element appears exactly twice except one. Find the unique one.
// Input: [4,1,2,1,2]  →  Output: 4
//
// Key insight: a XOR a = 0 (pairs cancel), a XOR 0 = a (unique survives)
// XOR all elements: 4^1^2^1^2 = 4^(1^1)^(2^2) = 4^0^0 = 4
// Time: O(n), Space: O(1)
// ============================================================
function singleNumber(nums) {
  return nums.reduce((xor, num) => xor ^ num, 0);
}

// ============================================================
// PROBLEM 2: Count Set Bits (Hamming Weight / popcount)
// Count the number of '1' bits in an integer.
// Input: 11 (binary: 1011)  →  Output: 3
//
// Brian Kernighan's trick: n & (n-1) removes the lowest set bit.
// Time: O(k) where k = number of set bits, Space: O(1)
// ============================================================
function countSetBits(n) {
  let count = 0;
  while (n > 0) {
    n &= n - 1; // clears the lowest set bit
    count++;
  }
  return count;
}

// ============================================================
// PROBLEM 3: Is Power of Two?
// Input: 16  →  true (2^4)
// Input: 18  →  false
//
// Powers of 2 in binary: 1, 10, 100, 1000...
// Exactly one bit set, so n & (n-1) === 0.
// Time: O(1), Space: O(1)
// ============================================================
function isPowerOfTwo(n) {
  return n > 0 && (n & (n - 1)) === 0;
}

// ============================================================
// PROBLEM 4: Missing Number (0 to n range)
// Array contains n distinct numbers in range [0, n], one is missing.
// Input: [3,0,1]  →  Output: 2
//
// XOR approach: XOR all indices 0..n with all values.
// Paired numbers cancel; only the missing number remains.
// Time: O(n), Space: O(1)
// ============================================================
function missingNumber(nums) {
  let result = nums.length; // start with n (the last expected index)
  for (let i = 0; i < nums.length; i++) {
    result ^= i ^ nums[i]; // XOR with index and value
  }
  return result;
}

// ============================================================
// PROBLEM 5: Hamming Distance
// Count bit positions where two integers differ.
// Input: x=1 (001), y=4 (100)  →  Output: 2
//
// XOR gives a number whose set bits are exactly the differing positions.
// Time: O(1), Space: O(1)
// ============================================================
function hammingDistance(x, y) {
  return countSetBits(x ^ y);
}

// ============================================================
// PROBLEM 6: Reverse Bits of a 32-bit integer
// Input: 43261596 (00000010100101000001111010011100)
// Output: 964176192 (00111001011110000010100101000000)
// Time: O(1) — always 32 iterations, Space: O(1)
// ============================================================
function reverseBits(n) {
  let result = 0;
  for (let i = 0; i < 32; i++) {
    result = (result << 1) | (n & 1); // shift result left, add LSB of n
    n >>= 1; // move to next bit of n
  }
  return result >>> 0; // convert to unsigned 32-bit
}

// ============================================================
// PROBLEM 7: Get / Set / Clear / Toggle bit at position k
// ============================================================
function getBit(n, k)    { return (n >> k) & 1; }
function setBit(n, k)    { return n | (1 << k); }
function clearBit(n, k)  { return n & ~(1 << k); }
function toggleBit(n, k) { return n ^ (1 << k); }

// ============================================================
// PROBLEM 8: Swap Two Numbers Without Temp Variable
// ============================================================
function swapBits(a, b) {
  a ^= b; // a holds a XOR b
  b ^= a; // b = b XOR (a XOR b) = a
  a ^= b; // a = (a XOR b) XOR a = b
  return [a, b];
}

// ============================================================
// TESTS
// ============================================================
console.log('=== Bit Manipulation Tests ===\n');
console.log('Single Number [4,1,2,1,2]:', singleNumber([4, 1, 2, 1, 2])); // 4
console.log('Single Number [2,2,1]:', singleNumber([2, 2, 1]));           // 1

console.log('\nCount bits in 11 (1011):', countSetBits(11));  // 3
console.log('Count bits in 128 (10000000):', countSetBits(128)); // 1

console.log('\nIs 16 power of 2:', isPowerOfTwo(16)); // true
console.log('Is 18 power of 2:', isPowerOfTwo(18)); // false
console.log('Is 1 power of 2:', isPowerOfTwo(1));   // true

console.log('\nMissing number [3,0,1]:', missingNumber([3, 0, 1]));       // 2
console.log('Missing number [9,6,4,2,3,5,7,0,1]:', missingNumber([9,6,4,2,3,5,7,0,1])); // 8

console.log('\nHamming distance 1,4:', hammingDistance(1, 4)); // 2
console.log('Hamming distance 93,73:', hammingDistance(93, 73)); // 2

console.log('\nBit ops on n=12 (1100), k=1:');
console.log('  getBit:', getBit(12, 1));    // 0
console.log('  setBit:', setBit(12, 1));    // 14 (1110)
console.log('  clearBit:', clearBit(12, 3)); // 4 (0100)
console.log('  toggleBit:', toggleBit(12, 1)); // 14 (1110)

console.log('\nSwap (5, 9):', swapBits(5, 9)); // [9, 5]
