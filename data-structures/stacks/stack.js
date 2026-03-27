/**
 * STACK IMPLEMENTATION + CLASSIC PROBLEMS
 * Demonstrates the Stack data structure and key interview patterns.
 */

// ============================================================
// STACK CLASS
// ============================================================
class Stack {
  constructor() {
    this.items = [];
  }

  push(val) { this.items.push(val); }            // O(1)
  pop()     { return this.items.pop(); }          // O(1)
  peek()    { return this.items[this.items.length - 1]; } // O(1)
  isEmpty() { return this.items.length === 0; }   // O(1)
  size()    { return this.items.length; }         // O(1)
  print()   { console.log([...this.items].reverse().join('\n'), '\n---'); }
}

// ============================================================
// PROBLEM 1: Valid Parentheses
// Given a string of brackets, return true if they are balanced.
// Input: "()[]{}"  →  true
// Input: "([)]"    →  false
//
// Intuition: Push open brackets. On closing bracket, check if top matches.
// Time: O(n), Space: O(n)
// ============================================================
function isValid(s) {
  const stack = new Stack();
  const matching = { ')': '(', ']': '[', '}': '{' };
  const closing = new Set([')', ']', '}']);

  for (const char of s) {
    if (!closing.has(char)) {
      stack.push(char); // push open brackets
    } else {
      if (stack.isEmpty() || stack.peek() !== matching[char]) {
        return false; // no matching open bracket
      }
      stack.pop();
    }
  }

  return stack.isEmpty(); // all brackets matched
}

// ============================================================
// PROBLEM 2: Min Stack
// Design a stack that supports push, pop, top, and getMin in O(1).
//
// Intuition: Maintain a parallel "minStack" that tracks the minimum
// at every state. When main stack pops, minStack pops too.
// ============================================================
class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = []; // tracks minimum at every level
  }

  push(val) {
    this.stack.push(val);
    // Push the new min: either val itself or the previous min
    const currentMin = this.minStack.length === 0
      ? val
      : Math.min(val, this.minStack[this.minStack.length - 1]);
    this.minStack.push(currentMin);
  }

  pop() {
    this.stack.pop();
    this.minStack.pop(); // stay in sync
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.minStack[this.minStack.length - 1]; // O(1)!
  }
}

// ============================================================
// PROBLEM 3: Daily Temperatures
// Given temps array, return array where answer[i] = days until warmer temp.
// Input: [73,74,75,71,69,72,76,73]  →  [1,1,4,2,1,1,0,0]
//
// Intuition: Monotonic decreasing stack. When we find a warmer day,
// we resolve all pending colder days.
// Time: O(n), Space: O(n)
// ============================================================
function dailyTemperatures(temperatures) {
  const n = temperatures.length;
  const result = new Array(n).fill(0);
  const stack = []; // stores indices

  for (let i = 0; i < n; i++) {
    // Pop all days that are colder than today
    while (stack.length > 0 && temperatures[stack[stack.length - 1]] < temperatures[i]) {
      const prevIndex = stack.pop();
      result[prevIndex] = i - prevIndex; // days until warmer
    }
    stack.push(i);
  }

  return result; // remaining indices stay 0 (no warmer day)
}

// ============================================================
// PROBLEM 4: Evaluate Reverse Polish Notation
// Valid operators: +, -, *, /
// Input: ["2","1","+","3","*"]  →  Output: 9  ((2+1)*3)
//
// Intuition: Push numbers; on operator, pop two numbers and push result.
// Time: O(n), Space: O(n)
// ============================================================
function evalRPN(tokens) {
  const stack = new Stack();
  const ops = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => Math.trunc(a / b), // truncate toward zero
  };

  for (const token of tokens) {
    if (ops[token]) {
      const b = stack.pop(); // note: b is popped first
      const a = stack.pop();
      stack.push(ops[token](a, b));
    } else {
      stack.push(Number(token));
    }
  }

  return stack.pop();
}

// ============================================================
// TESTS
// ============================================================
console.log('=== Stack Tests ===\n');

const s = new Stack();
s.push(1); s.push(2); s.push(3);
console.log('Top:', s.peek());    // 3
console.log('Pop:', s.pop());     // 3
console.log('Size:', s.size());   // 2

console.log('\nValid Parentheses:');
console.log('"()[]{}":', isValid('()[]{}')); // true
console.log('"([)]":', isValid('([)]'));     // false
console.log('"([])":', isValid('([])')); // true
console.log('"{[]}":', isValid('{[]}'));     // true

console.log('\nMin Stack:');
const ms = new MinStack();
ms.push(-2); ms.push(0); ms.push(-3);
console.log('getMin:', ms.getMin()); // -3
ms.pop();
console.log('top:', ms.top());      // 0
console.log('getMin:', ms.getMin()); // -2

console.log('\nDaily Temperatures:');
console.log(dailyTemperatures([73,74,75,71,69,72,76,73])); // [1,1,4,2,1,1,0,0]

console.log('\nEvaluate RPN:');
console.log('["2","1","+","3","*"]:', evalRPN(['2','1','+','3','*'])); // 9
console.log('["4","13","5","/","+"]:', evalRPN(['4','13','5','/','+'])); // 6
