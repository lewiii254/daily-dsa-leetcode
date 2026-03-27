/**
 * BINARY SEARCH TREE — Complete Implementation
 * Includes: insert, search, delete, all traversals, height, isBalanced
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  // Insert — O(log n) average, O(n) worst
  insert(val) {
    this.root = this._insertRec(this.root, val);
  }

  _insertRec(node, val) {
    if (!node) return new TreeNode(val); // base: create new node
    if (val < node.val) node.left  = this._insertRec(node.left, val);
    else if (val > node.val) node.right = this._insertRec(node.right, val);
    return node; // val === node.val: no duplicates
  }

  // Search — O(log n) average
  search(val) {
    return this._searchRec(this.root, val);
  }

  _searchRec(node, val) {
    if (!node) return false;
    if (val === node.val) return true;
    return val < node.val
      ? this._searchRec(node.left, val)
      : this._searchRec(node.right, val);
  }

  // Delete — O(log n) average
  delete(val) {
    this.root = this._deleteRec(this.root, val);
  }

  _deleteRec(node, val) {
    if (!node) return null;

    if (val < node.val) {
      node.left = this._deleteRec(node.left, val);
    } else if (val > node.val) {
      node.right = this._deleteRec(node.right, val);
    } else {
      // Node found — 3 cases:
      if (!node.left) return node.right;  // case 1: no left child
      if (!node.right) return node.left;  // case 2: no right child

      // Case 3: two children — replace with inorder successor (min of right subtree)
      const minRight = this._findMin(node.right);
      node.val = minRight.val;
      node.right = this._deleteRec(node.right, minRight.val);
    }
    return node;
  }

  _findMin(node) {
    while (node.left) node = node.left;
    return node;
  }

  // ── TRAVERSALS ──────────────────────────────────────────

  // Inorder: Left → Root → Right — gives sorted output for BST
  inorder() {
    const result = [];
    const traverse = node => {
      if (!node) return;
      traverse(node.left);
      result.push(node.val);
      traverse(node.right);
    };
    traverse(this.root);
    return result;
  }

  // Preorder: Root → Left → Right — used to copy/serialize a tree
  preorder() {
    const result = [];
    const traverse = node => {
      if (!node) return;
      result.push(node.val);
      traverse(node.left);
      traverse(node.right);
    };
    traverse(this.root);
    return result;
  }

  // Postorder: Left → Right → Root — used to delete a tree
  postorder() {
    const result = [];
    const traverse = node => {
      if (!node) return;
      traverse(node.left);
      traverse(node.right);
      result.push(node.val);
    };
    traverse(this.root);
    return result;
  }

  // Level-order (BFS): level by level using a queue
  levelOrder() {
    if (!this.root) return [];
    const result = [];
    const queue = [this.root];

    while (queue.length > 0) {
      const levelSize = queue.length;
      const level = [];
      for (let i = 0; i < levelSize; i++) {
        const node = queue.shift();
        level.push(node.val);
        if (node.left)  queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
      result.push(level);
    }

    return result;
  }

  // Height of tree — O(n)
  height() {
    const getHeight = node => {
      if (!node) return 0;
      return 1 + Math.max(getHeight(node.left), getHeight(node.right));
    };
    return getHeight(this.root);
  }

  // Check if tree is balanced — O(n)
  isBalanced() {
    const checkBalance = node => {
      if (!node) return 0; // height 0 for null

      const leftH = checkBalance(node.left);
      if (leftH === -1) return -1; // left subtree unbalanced

      const rightH = checkBalance(node.right);
      if (rightH === -1) return -1; // right subtree unbalanced

      if (Math.abs(leftH - rightH) > 1) return -1; // current node unbalanced

      return 1 + Math.max(leftH, rightH); // return height
    };

    return checkBalance(this.root) !== -1;
  }

  // Lowest Common Ancestor — O(log n) for BST
  lca(val1, val2) {
    const findLCA = (node, v1, v2) => {
      if (!node) return null;
      // If both values are smaller, LCA is in left subtree
      if (v1 < node.val && v2 < node.val) return findLCA(node.left, v1, v2);
      // If both values are larger, LCA is in right subtree
      if (v1 > node.val && v2 > node.val) return findLCA(node.right, v1, v2);
      // Otherwise, current node is the LCA
      return node;
    };
    return findLCA(this.root, val1, val2);
  }
}

// ============================================================
// TESTS
// ============================================================
console.log('=== BST Tests ===\n');

const bst = new BST();
[8, 3, 10, 1, 6, 14, 4, 7, 13].forEach(v => bst.insert(v));

console.log('Inorder (sorted):', bst.inorder());   // [1,3,4,6,7,8,10,13,14]
console.log('Preorder:', bst.preorder());            // [8,3,1,6,4,7,10,14,13]
console.log('Postorder:', bst.postorder());          // [1,4,7,6,3,13,14,10,8]
console.log('Level order:', bst.levelOrder());       // [[8],[3,10],[1,6,14],[4,7,13]]
console.log('Height:', bst.height());                // 4
console.log('Is balanced:', bst.isBalanced());       // false (unbalanced after inserts)
console.log('Search 6:', bst.search(6));             // true
console.log('Search 5:', bst.search(5));             // false
console.log('LCA of 4 and 7:', bst.lca(4, 7).val);  // 6

bst.delete(3);
console.log('After deleting 3:', bst.inorder());    // [1,4,6,7,8,10,13,14]
