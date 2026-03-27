# 🗺 HashMaps (Hash Tables)

A HashMap stores key-value pairs with O(1) average-case access using a hash function.

---

## 🔑 How It Works

```
Key → Hash Function → Index → Value
"name" → hash("name") → 42 → "Alice"
```

1. Hash function converts key to an array index
2. Value stored at that index
3. Collisions handled by chaining or open addressing

---

## 📊 Complexity

| Operation | Average | Worst (all collisions) |
|-----------|---------|----------------------|
| Insert | O(1) | O(n) |
| Search | O(1) | O(n) |
| Delete | O(1) | O(n) |
| Space | O(n) | O(n) |

---

## 🛠 When to Use HashMaps

✅ Frequency counting (character/word counts)
✅ Caching/memoization
✅ Two Sum style "complement lookup"
✅ Detecting duplicates
✅ Group items by category (Group Anagrams)
✅ Implement adjacency list for graphs

---

## 💡 Common Patterns

### Frequency Counter
```javascript
const freq = new Map();
for (const item of arr) {
  freq.set(item, (freq.get(item) || 0) + 1);
}
```

### Complement Lookup (Two Sum)
```javascript
const seen = new Map();
for (const [i, num] of arr.entries()) {
  if (seen.has(target - num)) return [seen.get(target - num), i];
  seen.set(num, i);
}
```

---

## 🔁 Related Topics
- Arrays (often combined)
- Sorting (GroupAnagrams uses sort as key)
- Sliding Window (frequency map in window)
