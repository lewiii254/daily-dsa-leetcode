# ⚡ Bit Manipulation

Bit manipulation is the act of algorithmically manipulating bits or binary digits. It's ultra-fast, uses O(1) space, and is commonly tested in senior-level interviews.

---

## 🔢 Binary Representation

```
Decimal  Binary
  0      0000
  1      0001
  2      0010
  3      0011
  4      0100
  5      0101
  6      0110
  7      0111
  8      1000
```

---

## 🔧 Bitwise Operators

| Operator | Symbol | Description | Example | Result |
|----------|--------|-------------|---------|--------|
| AND | `&` | 1 if both bits are 1 | `5 & 3` = `101 & 011` | `001` = 1 |
| OR | `\|` | 1 if at least one bit is 1 | `5 \| 3` = `101 \| 011` | `111` = 7 |
| XOR | `^` | 1 if exactly one bit is 1 | `5 ^ 3` = `101 ^ 011` | `110` = 6 |
| NOT | `~` | Flips all bits | `~5` | `-6` |
| Left Shift | `<<` | Shifts bits left (multiply by 2) | `5 << 1` | `10` |
| Right Shift | `>>` | Shifts bits right (divide by 2) | `5 >> 1` | `2` |

---

## 🎯 Common Tricks

### Check if number is even/odd
```javascript
if (n & 1) console.log('odd');
else console.log('even');
```

### Multiply/Divide by powers of 2
```javascript
n << k  // n × 2^k  (faster than Math.pow)
n >> k  // n ÷ 2^k
```

### Check if power of 2
```javascript
// A power of 2 has exactly one set bit
// n=8 (1000), n-1=7 (0111), 8&7 = 0
function isPowerOfTwo(n) {
  return n > 0 && (n & (n - 1)) === 0;
}
```

### Get, Set, Clear, Toggle a bit at position k
```javascript
const getBit    = (n, k) => (n >> k) & 1;         // get bit k
const setBit    = (n, k) => n | (1 << k);          // set bit k to 1
const clearBit  = (n, k) => n & ~(1 << k);         // clear bit k to 0
const toggleBit = (n, k) => n ^ (1 << k);          // toggle bit k
```

### Count set bits (Brian Kernighan's Algorithm)
```javascript
function countBits(n) {
  let count = 0;
  while (n > 0) {
    n &= n - 1; // removes the lowest set bit each iteration
    count++;
  }
  return count;
}
// countBits(13) → 13=1101 → 3 set bits
```

### Swap two numbers without a temp variable
```javascript
a ^= b;
b ^= a;
a ^= b;
```

---

## 📝 Interview Problems

| Problem | Key Insight |
|---------|-------------|
| Single Number | XOR all — pairs cancel to 0 |
| Hamming Distance | XOR gives differing bits, then count |
| Power of Two | `n & (n-1) === 0` |
| Reverse Bits | Shift and OR iteratively |
| Missing Number | XOR indices with values |
| Subsets | Each number 0..2^n-1 represents a subset |

---

## ⚡ Why Bit Manipulation?

- **Speed:** Bitwise ops are single CPU instructions
- **Space:** O(1) solutions where O(n) otherwise
- **Elegance:** Complex problems in 1-2 lines

---

## 🔗 Related Topics
- Dynamic Programming (bitmask DP)
- Graphs (bitmask for visited states)
- Cryptography
