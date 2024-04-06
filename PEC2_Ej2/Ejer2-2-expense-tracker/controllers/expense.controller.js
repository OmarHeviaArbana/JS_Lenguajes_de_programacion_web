
/**
 * @class Controller
 *
 * Links the user input and the view output.
 *
 * @param model
 * @param view
 */
 class ExpenseController {
  constructor(service, view) {
    this.service = service;
    this.view = view;

    this.view.bindAddExpense(this.handleAddExpense.bind(this));
    this.view.bindDeleteExpense(this.handleDeleteExpense.bind(this));
    this.addTransactionDOM();
  }

  addTransactionDOM() {
    const expenses = this.service.getAllExpenses();
    this.view.addTransactionDOM(expenses);
    this.updateValues();
  }

  handleAddExpense(text, amount) {
    this.service.addExpense(text, amount);
    this.addTransactionDOM();
    this.service._commit(this.service.transactions); 
  }
  handleDeleteExpense(expenseId) {
    this.service.removeTransaction(expenseId);
    this.service._commit(this.service.transactions); 
    this.addTransactionDOM();
  }

  updateValues() {
    const expenses = this.service.getAllExpenses();
    const amounts = expenses.map(transaction => transaction.amount);
  
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  
    const income = amounts
      .filter(item => item > 0)
      .reduce((acc, item) => (acc += item), 0)
      .toFixed(2);
  
    const expense = (
      amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
      -1
    ).toFixed(2);
    console.log(income, expense);
  
    this.view.updateValues(total, income, expense);
  }
}
