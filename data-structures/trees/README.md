# 🌳 Trees

A tree is a hierarchical data structure with a root node and subtrees of children, forming a recursive structure.

---

## 🏗 Terminology

```
           1          ← root
         /   \
        2     3       ← internal nodes
       / \     \
      4   5     6     ← leaf nodes (no children)
```

- **Root:** Top node (no parent)
- **Leaf:** Node with no children
- **Height:** Longest path from root to leaf
- **Depth:** Distance from root to a node
- **Subtree:** Any node and its descendants

---

## 🌲 Binary Search Tree (BST) Properties

For every node:
- Left subtree values < node value
- Right subtree values > node value

```
      8
    /   \
   3     10
  / \      \
 1   6      14
    / \    /
   4   7  13
```

---

## 📊 BST Operations Complexity

| Operation | Average | Worst (unbalanced) |
|-----------|---------|-------------------|
| Search | O(log n) | O(n) |
| Insert | O(log n) | O(n) |
| Delete | O(log n) | O(n) |
| Min/Max | O(log n) | O(n) |

---

## 🔄 Tree Traversals

| Type | Order | Use Case |
|------|-------|----------|
| **Inorder** | Left → Root → Right | Sorted output from BST |
| **Preorder** | Root → Left → Right | Copy a tree, prefix expression |
| **Postorder** | Left → Right → Root | Delete a tree, postfix expression |
| **Level-order** | Level by level (BFS) | Shortest path, level processing |

---

## ⚖️ Balanced Trees

A tree is balanced if the height difference between left and right subtrees is ≤ 1 for every node.

- **Balanced BST:** O(log n) operations
- **AVL Tree:** Self-balancing BST
- **Red-Black Tree:** Used in Java TreeMap, C++ std::map

---

## 🔁 Related Topics
- Recursion (trees are naturally recursive)
- BFS/DFS (graph traversals apply to trees)
- Heaps (special complete binary trees)
- Dynamic Programming (tree DP)
