/**
 * LOGISTICS: Delivery Optimization
 * Dijkstra's shortest path for delivery routing.
 */
function dijkstra(graph, start) {
  const dist = {}, visited = new Set();
  for (const node of Object.keys(graph)) dist[node] = Infinity;
  dist[start] = 0;
  const pq = [[0, start]]; // [distance, node]

  while (pq.length) {
    pq.sort((a, b) => a[0] - b[0]);
    const [d, u] = pq.shift();
    if (visited.has(u)) continue;
    visited.add(u);
    for (const [v, w] of graph[u] || []) {
      if (dist[u] + w < dist[v]) { dist[v] = dist[u] + w; pq.push([dist[v], v]); }
    }
  }
  return dist;
}

// Schedule packages by deadline (greedy — earliest deadline first)
function scheduleDeliveries(packages) {
  return [...packages].sort((a, b) => a.deadline - b.deadline);
}

const cityGraph = {
  Nairobi:  [['Thika', 45], ['Nakuru', 160]],
  Thika:    [['Nairobi', 45], ['Nyeri', 80]],
  Nakuru:   [['Nairobi', 160], ['Nyeri', 120]],
  Nyeri:    [['Thika', 80], ['Nakuru', 120]],
};
console.log('Shortest paths from Nairobi:', dijkstra(cityGraph, 'Nairobi'));

const pkgs = [{id:'A',deadline:3},{id:'B',deadline:1},{id:'C',deadline:2}];
console.log('Delivery order:', scheduleDeliveries(pkgs).map(p => p.id)); // B C A
