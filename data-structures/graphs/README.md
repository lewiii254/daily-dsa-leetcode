# 🕸 Graphs

A graph is a non-linear data structure consisting of **vertices** (nodes) and **edges** (connections between nodes).

---

## 🔑 Terminology

- **Vertex (node):** A point in the graph
- **Edge:** A connection between two vertices
- **Directed graph (digraph):** Edges have direction (A → B ≠ B → A)
- **Undirected graph:** Edges are bidirectional (A — B = B — A)
- **Weighted graph:** Edges have associated costs/weights
- **Connected graph:** There's a path between every pair of vertices
- **Cycle:** A path that starts and ends at the same vertex
- **DAG:** Directed Acyclic Graph (no cycles, used in topological sort)

---

## 🏗 Representation

### Adjacency List (preferred)
```javascript
{
  A: ['B', 'C'],
  B: ['A', 'D'],
  C: ['A'],
  D: ['B']
}
```
Space: O(V + E) — efficient for sparse graphs

### Adjacency Matrix
```
  A B C D
A 0 1 1 0
B 1 0 0 1
C 1 0 0 0
D 0 1 0 0
```
Space: O(V²) — efficient for dense graphs, fast edge lookup O(1)

---

## 📊 Complexity Comparison

| Representation | Space | Add Edge | Check Edge | Neighbors |
|----------------|-------|----------|------------|-----------|
| Adjacency List | O(V+E) | O(1) | O(degree) | O(degree) |
| Adjacency Matrix | O(V²) | O(1) | O(1) | O(V) |

---

## 🔍 BFS vs DFS

| Aspect | BFS | DFS |
|--------|-----|-----|
| Data structure | Queue | Stack / Recursion |
| Use case | Shortest path (unweighted) | Cycle detection, topological sort |
| Memory | O(V) | O(V) |
| Complete? | Yes | Yes |

---

## 🔁 Related Topics
- Trees (special case of graphs — acyclic, connected)
- Dynamic Programming (DP on graphs)
- Dijkstra / shortest path algorithms
