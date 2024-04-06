/**
 * @class Service
 *
 * Manages the data of the application.
 */

class ExpenseService {
  constructor() {
    const localStorageTransactions = JSON.parse(
      localStorage.getItem('transactions')
    );
    
    this.transactions =
      localStorage.getItem('transactions') !== null ? localStorageTransactions : [];
  }

  _commit(transactions) {
    this.updateLocalStorage(transactions)
  }

  addExpense(text, amount) {
    const expense = { text, amount };
    this.transactions.push(new Transaction(expense));
  }

  removeTransaction(id) {
    this.transactions = this.transactions.filter(transaction => transaction.id !== id);
  }

  getAllExpenses() {
    return this.transactions;
  }

  updateLocalStorage(transactions) {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }
}
