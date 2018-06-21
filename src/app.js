/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
} from './actions/filters';
import expensesReducer from './reducers/expenses';
import filtersReducer from './reducers/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

const waterBill = store.dispatch(
  addExpense({ description: 'water', amount: 4500, createdAt: 1001 })
);
const gasBill = store.dispatch(
  addExpense({ description: 'gas', createdAt: 1000, amount: 500000 })
);
const rentBill = store.dispatch(
  addExpense({ description: 'Rent', amount: 109500, createdAt: 1002 })
);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
