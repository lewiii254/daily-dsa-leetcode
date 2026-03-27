/**
 * ANDELA-STYLE INTERVIEW PROBLEMS
 * Focus: Clean code, optimization, clear thinking
 */

// FizzBuzz (classic warmup) — write clean, extensible version
function fizzBuzz(n, rules = [[3,'Fizz'],[5,'Buzz']]) {
  return Array.from({ length: n }, (_, i) => {
    const word = rules.reduce((s, [d, w]) => (i+1) % d === 0 ? s + w : s, '');
    return word || String(i + 1);
  });
}

// Flatten nested array to any depth — O(n)
function flattenDeep(arr) {
  return arr.reduce((flat, item) =>
    flat.concat(Array.isArray(item) ? flattenDeep(item) : item), []);
}

// Deep clone an object (no circular refs)
function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') return obj;
  if (Array.isArray(obj)) return obj.map(deepClone);
  return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, deepClone(v)]));
}

// Memoize any function
function memoize(fn) {
  const cache = new Map();
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

console.log('=== Andela Tests ===');
console.log('FizzBuzz 1-15:', fizzBuzz(15).slice(0, 15));
console.log('Flatten [1,[2,[3,[4]]],5]:', flattenDeep([1,[2,[3,[4]]],5]));
const obj = { a: 1, b: { c: [2, 3] } };
const cloned = deepClone(obj);
cloned.b.c.push(99);
console.log('Deep clone original intact:', obj.b.c); // [2,3]
const memoFib = memoize(n => n <= 1 ? n : memoFib(n-1) + memoFib(n-2));
console.log('Memoized fib(10):', memoFib(10)); // 55
