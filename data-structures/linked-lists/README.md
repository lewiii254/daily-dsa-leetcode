# 🔗 Linked Lists

A linked list is a linear data structure where elements (nodes) are stored in non-contiguous memory, connected by pointers.

---

## 🏗 Structure

```
Head → [data|next] → [data|next] → [data|next] → null
         Node 1          Node 2          Node 3
```

Each **node** contains:
- `data` — the stored value
- `next` — pointer to the next node

---

## 📊 Operations Complexity

| Operation | Singly Linked | Array |
|-----------|--------------|-------|
| Prepend (insert at head) | O(1) ✅ | O(n) |
| Append (insert at tail) | O(n) or O(1) with tail ptr | O(1) amortized |
| Access by index | O(n) | O(1) |
| Search | O(n) | O(n) |
| Delete at head | O(1) ✅ | O(n) |
| Delete arbitrary | O(n) | O(n) |

---

## 🔀 Types of Linked Lists

### 1. Singly Linked List
Each node points to the next node only.
```
1 → 2 → 3 → 4 → null
```

### 2. Doubly Linked List
Each node has both `next` and `prev` pointers.
```
null ← 1 ↔ 2 ↔ 3 ↔ 4 → null
```

### 3. Circular Linked List
The last node points back to the head.
```
1 → 2 → 3 → 4 → (back to 1)
```

---

## ✅ When to Use Linked Lists

✅ Frequent insertions/deletions at the beginning  
✅ Unknown size at compile time  
✅ Implementing stacks and queues  
✅ When memory fragmentation is acceptable  

❌ **Avoid when:** You need random access by index  
❌ **Avoid when:** Cache performance is critical (arrays are cache-friendly)

---

## 🧩 Classic Interview Problems

| Problem | Key Technique |
|---------|--------------|
| Reverse a linked list | Pointer manipulation |
| Detect cycle | Floyd's two-pointer algorithm |
| Find middle node | Fast/slow pointer |
| Merge two sorted lists | Two pointers |
| Remove nth node from end | Two-pass or two-pointer |
| Palindrome linked list | Reverse second half |

---

## 🔁 Related Topics
- Fast-Slow Pointers pattern
- Two Pointers pattern
- Stack (can be implemented with linked list)
