# 💰 Greedy Algorithms

A greedy algorithm makes the locally optimal choice at each step, hoping to find the global optimum.

---

## 🤔 When Does Greedy Work?

Greedy works when the problem has:
1. **Greedy choice property** — A global optimum can be reached by making locally optimal choices
2. **Optimal substructure** — Optimal solution contains optimal solutions to subproblems

---

## ✅ Greedy Works For

| Problem | Greedy Strategy |
|---------|----------------|
| Activity Selection | Pick activity with earliest end time |
| Fractional Knapsack | Pick highest value/weight ratio first |
| Minimum Spanning Tree | Kruskal's / Prim's |
| Huffman Coding | Always merge two lowest frequency nodes |
| Dijkstra's (no negative weights) | Always process closest node |
| Jump Game | Track farthest reachable index |

---

## ❌ When Greedy FAILS

Classic counterexample — Coin Change:
- Coins: [1, 3, 4], Amount: 6
- Greedy picks 4 first → 4+1+1 = 3 coins
- Optimal: 3+3 = 2 coins ✅

Greedy fails when local choices don't lead to global optimum → use **Dynamic Programming**.

---

## 🔁 Related Topics
- Dynamic Programming (alternative when greedy fails)
- Graph algorithms (Dijkstra, Kruskal, Prim)
