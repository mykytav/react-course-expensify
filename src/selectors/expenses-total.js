export default expenses =>
  expenses
    .map(expense => expense.amount)
    .reduce((prev, next) => prev + next, 0);
