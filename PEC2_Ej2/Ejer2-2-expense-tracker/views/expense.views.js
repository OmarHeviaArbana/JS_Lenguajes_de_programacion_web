/**
 * @class View
 *
 * Visual representation of the model.
 */

 class ExpenseView {
  constructor() {
    this.balance = document.getElementById('balance');
    this.money_plus = document.getElementById('money-plus');
    this.money_minus = document.getElementById('money-minus');
    this.list = document.getElementById('list');
    this.form = document.getElementById('form');
    this.text = document.getElementById('text');
    this.amount = document.getElementById('amount');
  }

  addTransactionDOM(expenses) {
    this.list.innerHTML = '';

    expenses.forEach(transaction => {
      const sign = transaction.amount < 0 ? '-' : '+';
      const item = document.createElement('li');
      item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');

      item.innerHTML = `
        ${transaction.text} <span>${sign}${Math.abs(
        transaction.amount
      )}</span> <button class="delete-btn" data-id="${transaction.id}" onclick="removeTransaction(${transaction.id})">x</button>`;

      list.appendChild(item);
    });
  }

  bindAddExpense(handler) {
    this.form.addEventListener('submit', event => {
      event.preventDefault();
       const text = this.text.value.trim();
       const amount = parseFloat(this.amount.value.trim());
       if (text === '' || amount === '' || isNaN(amount)) {
        alert('Please add a text and amount');
      } else {
        handler(text, amount);
        this.resetInputs();
      }   
    });
  }

  bindDeleteExpense(handler) {
    this.list.addEventListener('click', event => {
      event.preventDefault();
       if (event.target.classList.contains('delete-btn')) { 
        const expenseId = parseInt(event.target.dataset.id);
       
        handler(expenseId);
       } 
    });
  }

  updateValues(total, income, expense) {
    this.balance.innerText = `$${total}`;
    this.money_plus.innerText = `$${income}`;
    this.money_minus.innerText = `$${expense}`;
  }

  resetInputs() {
    this.text.value = '';
    this.amount.value = '';
  }
}
