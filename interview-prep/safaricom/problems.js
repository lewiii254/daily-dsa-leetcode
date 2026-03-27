/**
 * SAFARICOM-STYLE INTERVIEW PROBLEMS
 */

// Rotate array left by k positions — O(n)
function rotateLeft(arr, k) {
  k = k % arr.length;
  return [...arr.slice(k), ...arr.slice(0, k)];
}

// Parse phone number to standard format (+254...)
function parseKenyanPhone(phone) {
  const digits = phone.replace(/\D/g, '');
  if (digits.startsWith('254')) return '+' + digits;
  if (digits.startsWith('0')) return '+254' + digits.slice(1);
  if (digits.length === 9) return '+254' + digits;
  return null;
}

// Simple rate limiter — max N requests per minute
class RateLimiter {
  constructor(maxRequests, windowMs) {
    this.max = maxRequests;
    this.window = windowMs;
    this.requests = new Map(); // userId -> timestamps[]
  }
  isAllowed(userId) {
    const now = Date.now();
    const times = (this.requests.get(userId) || []).filter(t => now - t < this.window);
    if (times.length >= this.max) return false;
    times.push(now);
    this.requests.set(userId, times);
    return true;
  }
}

// M-Pesa fee calculator (simplified tiered structure)
function calculateMpesaFee(amount) {
  if (amount <= 100) return 0;
  if (amount <= 500) return 7;
  if (amount <= 1000) return 13;
  if (amount <= 2500) return 23;
  if (amount <= 5000) return 33;
  if (amount <= 10000) return 53;
  return 105;
}

console.log('=== Safaricom Tests ===');
console.log('Rotate [1,2,3,4,5] k=2:', rotateLeft([1,2,3,4,5], 2)); // [3,4,5,1,2]
console.log('Phone "0712345678":', parseKenyanPhone('0712345678'));   // +254712345678
console.log('Phone "254712345678":', parseKenyanPhone('254712345678')); // +254712345678
console.log('M-Pesa fee 1000:', calculateMpesaFee(1000)); // 13
