/**
 * GRAPH — Complete Implementation
 * Adjacency list representation with BFS, DFS, cycle detection, topo sort.
 */

class Graph {
  constructor(directed = false) {
    this.adjacencyList = new Map();
    this.directed = directed;
  }

  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(v1, v2) {
    this.addVertex(v1);
    this.addVertex(v2);
    this.adjacencyList.get(v1).push(v2);
    if (!this.directed) {
      this.adjacencyList.get(v2).push(v1); // undirected: both ways
    }
  }

  getNeighbors(vertex) {
    return this.adjacencyList.get(vertex) || [];
  }

  // ── BFS (Breadth-First Search) ───────────────────────────
  // Visits nodes level by level using a queue.
  // Time: O(V + E), Space: O(V)
  bfs(start) {
    const visited = new Set();
    const queue = [start];
    const result = [];

    visited.add(start);

    while (queue.length > 0) {
      const vertex = queue.shift();
      result.push(vertex);

      for (const neighbor of this.getNeighbors(vertex)) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }

    return result;
  }

  // ── DFS (Depth-First Search) — Iterative ─────────────────
  // Explores as deep as possible before backtracking.
  // Time: O(V + E), Space: O(V)
  dfs(start) {
    const visited = new Set();
    const stack = [start];
    const result = [];

    while (stack.length > 0) {
      const vertex = stack.pop();
      if (visited.has(vertex)) continue;

      visited.add(vertex);
      result.push(vertex);

      for (const neighbor of this.getNeighbors(vertex)) {
        if (!visited.has(neighbor)) {
          stack.push(neighbor);
        }
      }
    }

    return result;
  }

  // ── DFS Recursive ─────────────────────────────────────────
  dfsRecursive(start, visited = new Set(), result = []) {
    visited.add(start);
    result.push(start);

    for (const neighbor of this.getNeighbors(start)) {
      if (!visited.has(neighbor)) {
        this.dfsRecursive(neighbor, visited, result);
      }
    }

    return result;
  }

  // ── Has Path? ─────────────────────────────────────────────
  // Check if there's a path between src and dst using BFS.
  hasPath(src, dst) {
    const visited = new Set();
    const queue = [src];
    visited.add(src);

    while (queue.length > 0) {
      const curr = queue.shift();
      if (curr === dst) return true;

      for (const neighbor of this.getNeighbors(curr)) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }

    return false;
  }

  // ── Cycle Detection (for undirected graph) ────────────────
  // Uses DFS with parent tracking.
  // Time: O(V + E), Space: O(V)
  hasCycle() {
    const visited = new Set();

    const dfsCheck = (vertex, parent) => {
      visited.add(vertex);
      for (const neighbor of this.getNeighbors(vertex)) {
        if (!visited.has(neighbor)) {
          if (dfsCheck(neighbor, vertex)) return true;
        } else if (neighbor !== parent) {
          return true; // found a back edge — cycle detected!
        }
      }
      return false;
    };

    for (const vertex of this.adjacencyList.keys()) {
      if (!visited.has(vertex)) {
        if (dfsCheck(vertex, null)) return true;
      }
    }

    return false;
  }

  // ── Topological Sort (for DAGs only) ─────────────────────
  // Returns vertices in order where all dependencies come before dependents.
  // Time: O(V + E), Space: O(V)
  topologicalSort() {
    const visited = new Set();
    const stack = [];

    const dfs = vertex => {
      visited.add(vertex);
      for (const neighbor of this.getNeighbors(vertex)) {
        if (!visited.has(neighbor)) dfs(neighbor);
      }
      stack.push(vertex); // add AFTER exploring all descendants
    };

    for (const vertex of this.adjacencyList.keys()) {
      if (!visited.has(vertex)) dfs(vertex);
    }

    return stack.reverse(); // reverse gives topological order
  }

  // ── Connected Components ──────────────────────────────────
  countComponents() {
    const visited = new Set();
    let count = 0;

    for (const vertex of this.adjacencyList.keys()) {
      if (!visited.has(vertex)) {
        this.dfsRecursive(vertex, visited);
        count++;
      }
    }

    return count;
  }
}

// ============================================================
// TESTS
// ============================================================
console.log('=== Graph Tests ===\n');

// Undirected graph
const g = new Graph(false);
['A','B','C','D','E','F'].forEach(v => g.addVertex(v));
g.addEdge('A','B'); g.addEdge('A','C');
g.addEdge('B','D'); g.addEdge('C','E');
g.addEdge('D','E'); g.addEdge('D','F');

console.log('BFS from A:', g.bfs('A'));      // A B C D E F
console.log('DFS from A:', g.dfs('A'));      // A C E D B F
console.log('Has path A→F:', g.hasPath('A', 'F')); // true
console.log('Has path A→Z:', g.hasPath('A', 'Z')); // false
console.log('Has cycle:', g.hasCycle());     // true (A-B-D-E-C-A)
console.log('Components:', g.countComponents()); // 1

// Directed acyclic graph for topological sort
const dag = new Graph(true);
dag.addEdge('A', 'C'); dag.addEdge('B', 'C');
dag.addEdge('B', 'D'); dag.addEdge('C', 'E');
dag.addEdge('D', 'F'); dag.addEdge('E', 'F');
console.log('\nTopological sort:', dag.topologicalSort());
// e.g., [A, B, D, C, E, F]
