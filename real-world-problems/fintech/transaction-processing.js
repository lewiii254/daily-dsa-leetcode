/**
 * FINTECH: M-Pesa-style Transaction Processing
 */

class TransactionProcessor {
  constructor(dailyLimit = 150000) {
    this.dailyLimit = dailyLimit;
    this.dailyTotals = new Map(); // userId -> {date, total}
    this.transactions = [];
  }

  calculateFee(amount) {
    if (amount <= 100) return 0;
    if (amount <= 500) return 7;
    if (amount <= 1000) return 13;
    if (amount <= 5000) return 33;
    return 105;
  }

  isFraudulent(userId, amount, history) {
    // Flag if amount is > 3x the user's average transaction
    if (history.length < 3) return false;
    const avg = history.reduce((s, t) => s + t.amount, 0) / history.length;
    return amount > avg * 3;
  }

  process(userId, amount) {
    const today = new Date().toDateString();
    const record = this.dailyTotals.get(userId) || { date: today, total: 0 };
    if (record.date !== today) record.total = 0; // reset daily

    if (record.total + amount > this.dailyLimit)
      return { success: false, reason: 'Daily limit exceeded' };

    const userHistory = this.transactions.filter(t => t.userId === userId);
    if (this.isFraudulent(userId, amount, userHistory))
      return { success: false, reason: 'Flagged as fraudulent' };

    const fee = this.calculateFee(amount);
    record.total += amount;
    record.date = today;
    this.dailyTotals.set(userId, record);
    this.transactions.push({ userId, amount, fee, ts: Date.now() });
    return { success: true, fee, net: amount - fee };
  }
}

const processor = new TransactionProcessor();
console.log(processor.process('user1', 500));   // { success: true, fee: 7, net: 493 }
console.log(processor.process('user1', 1000));  // { success: true, fee: 13, net: 987 }
