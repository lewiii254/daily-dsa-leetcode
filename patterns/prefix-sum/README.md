# ➕ Prefix Sum

Precompute cumulative sums to answer range queries in O(1).

## How It Works
```javascript
prefix[0] = 0
prefix[i] = prefix[i-1] + nums[i-1]
sum(l, r) = prefix[r+1] - prefix[l]  // O(1)!
```

## When to Use
- Range sum queries (multiple)
- Subarray sum problems
- Finding pivot index
