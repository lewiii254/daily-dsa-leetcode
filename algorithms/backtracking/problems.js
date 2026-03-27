/**
 * BACKTRACKING PROBLEMS
 * Classic backtracking patterns: permutations, subsets, constraint satisfaction.
 */

// ============================================================
// PROBLEM 1: Permutations
// Return all permutations of an array of distinct integers.
// Input: [1,2,3]  →  [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// Time: O(n!), Space: O(n)
// ============================================================
function permute(nums) {
  const result = [];

  function backtrack(current, remaining) {
    if (remaining.length === 0) {
      result.push([...current]); // found complete permutation
      return;
    }

    for (let i = 0; i < remaining.length; i++) {
      current.push(remaining[i]);
      // Remove chosen element from remaining
      backtrack(current, [...remaining.slice(0, i), ...remaining.slice(i + 1)]);
      current.pop(); // undo choice (backtrack)
    }
  }

  backtrack([], nums);
  return result;
}

// ============================================================
// PROBLEM 2: Subsets (Power Set)
// Return all possible subsets of an array.
// Input: [1,2,3]  →  [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// Time: O(2^n), Space: O(n)
// ============================================================
function subsets(nums) {
  const result = [];

  function backtrack(start, current) {
    result.push([...current]); // every partial state is a valid subset

    for (let i = start; i < nums.length; i++) {
      current.push(nums[i]);   // include nums[i]
      backtrack(i + 1, current);
      current.pop();           // exclude nums[i] (backtrack)
    }
  }

  backtrack(0, []);
  return result;
}

// ============================================================
// PROBLEM 3: Combination Sum
// Find all combinations that sum to target. Elements can be reused.
// Input: candidates=[2,3,6,7], target=7  →  [[2,2,3],[7]]
// Time: O(2^(target/min)), Space: O(target/min)
// ============================================================
function combinationSum(candidates, target) {
  const result = [];
  candidates.sort((a, b) => a - b); // sort for early pruning

  function backtrack(start, current, remaining) {
    if (remaining === 0) {
      result.push([...current]);
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      if (candidates[i] > remaining) break; // pruning: no point continuing

      current.push(candidates[i]);
      backtrack(i, current, remaining - candidates[i]); // i (not i+1) allows reuse
      current.pop();
    }
  }

  backtrack(0, [], target);
  return result;
}

// ============================================================
// PROBLEM 4: N-Queens
// Place N queens on N×N board so no two queens attack each other.
// Input: n=4  →  [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
// Time: O(n!), Space: O(n)
// ============================================================
function solveNQueens(n) {
  const result = [];
  const cols = new Set();    // occupied columns
  const diag1 = new Set();   // occupied \ diagonals (row - col)
  const diag2 = new Set();   // occupied / diagonals (row + col)
  const board = Array(n).fill(null).map(() => Array(n).fill('.'));

  function backtrack(row) {
    if (row === n) {
      result.push(board.map(r => r.join(''))); // found valid placement
      return;
    }

    for (let col = 0; col < n; col++) {
      if (cols.has(col) || diag1.has(row - col) || diag2.has(row + col)) continue;

      // Place queen
      board[row][col] = 'Q';
      cols.add(col);
      diag1.add(row - col);
      diag2.add(row + col);

      backtrack(row + 1);

      // Remove queen (backtrack)
      board[row][col] = '.';
      cols.delete(col);
      diag1.delete(row - col);
      diag2.delete(row + col);
    }
  }

  backtrack(0);
  return result;
}

// ============================================================
// PROBLEM 5: Word Search
// Given a board and word, find if word exists in the grid (connected cells).
// Input: board=[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word="ABCCED"
// Output: true
// Time: O(m*n*4^L) where L=word length, Space: O(L)
// ============================================================
function wordSearch(board, word) {
  const rows = board.length, cols = board[0].length;

  function dfs(r, c, idx) {
    if (idx === word.length) return true; // found entire word
    if (r < 0 || r >= rows || c < 0 || c >= cols) return false;
    if (board[r][c] !== word[idx]) return false;

    const temp = board[r][c];
    board[r][c] = '#'; // mark as visited

    const found = dfs(r+1, c, idx+1) || dfs(r-1, c, idx+1) ||
                  dfs(r, c+1, idx+1) || dfs(r, c-1, idx+1);

    board[r][c] = temp; // restore (backtrack)
    return found;
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (dfs(r, c, 0)) return true;
    }
  }

  return false;
}

// ============================================================
// TESTS
// ============================================================
console.log('=== Backtracking Tests ===\n');
console.log('Permutations of [1,2,3]:');
console.log(permute([1,2,3])); // 6 permutations

console.log('\nSubsets of [1,2,3]:');
console.log(subsets([1,2,3])); // 8 subsets (2^3)

console.log('\nCombination Sum [2,3,6,7] target=7:');
console.log(combinationSum([2,3,6,7], 7)); // [[2,2,3],[7]]

console.log('\nN-Queens n=4:');
const queens = solveNQueens(4);
console.log(`Found ${queens.length} solutions`); // 2
queens.forEach(q => console.log(q));

const board = [['A','B','C','E'],['S','F','C','S'],['A','D','E','E']];
console.log('\nWord Search "ABCCED":', wordSearch(board, 'ABCCED')); // true
console.log('Word Search "SEE":', wordSearch([['A','B','C','E'],['S','F','C','S'],['A','D','E','E']], 'SEE')); // true
console.log('Word Search "ABCB":', wordSearch([['A','B','C','E'],['S','F','C','S'],['A','D','E','E']], 'ABCB')); // false
