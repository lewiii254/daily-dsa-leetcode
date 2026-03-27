# 🔍 Binary Search as a Pattern

Binary search applies to any **monotone decision function** — not just sorted arrays.

## Template: "Find minimum valid value"
```javascript
let lo = minPossible, hi = maxPossible;
while (lo < hi) {
  const mid = lo + Math.floor((hi - lo) / 2);
  if (canDo(mid)) hi = mid;
  else lo = mid + 1;
}
return lo;
```

## Classic Applications
- Koko eating bananas (minimize max)
- Capacity to ship packages
- Search insert position
