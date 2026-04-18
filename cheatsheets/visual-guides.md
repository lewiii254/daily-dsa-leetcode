# 🖼 Visual Guides for Core Concepts

## Stack (LIFO)

```
push(1)   push(2)   push(3)

Top -> [3]
       [2]
       [1]

pop() returns 3 first
```

## Queue (FIFO)

```
enqueue(1), enqueue(2), enqueue(3)

Front -> [1] [2] [3] <- Rear

dequeue() returns 1 first
```

## Tree Traversals (DFS + BFS)

```
        1
      /   \
     2     3
    / \   / \
   4  5  6  7

Preorder  : 1 2 4 5 3 6 7
Inorder   : 4 2 5 1 6 3 7
Postorder : 4 5 2 6 7 3 1
Level-order(BFS): 1 2 3 4 5 6 7
```

## Sliding Window Movement

```
Array: [a, b, c, d, e]
Window size = 3

[a b c] d e
 a [b c d] e
 a b [c d e]
```

## Pattern Templates (Pseudo-code + When to Use)

### Two Pointers
When: sorted arrays, pair/triplet sum, opposite-end comparisons.
```
l = 0, r = n - 1
while l < r:
  evaluate(arr[l], arr[r])
  move l or r based on condition
```

### Sliding Window
When: contiguous subarray/substring optimization.
```
l = 0
for r in range(n):
  include arr[r]
  while window invalid:
    remove arr[l]
    l += 1
  update answer
```

### Binary Search on Answer
When: monotonic feasibility over numeric search space.
```
lo, hi = minPossible, maxPossible
while lo < hi:
  mid = (lo + hi) // 2
  if feasible(mid): hi = mid
  else: lo = mid + 1
return lo
```
