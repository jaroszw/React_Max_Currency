import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import React, { useState } from "react";

import ExpensesFilter from "./ExpensesFilter";

import "./Expense.css";

const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p>No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem key={expense.id} {...expense} />
    ));
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        filteredYear={filteredYear}
        onSelectYear={filterChangeHandler}
      />
      {expensesContent}
    </Card>
  );
};

export default Expenses;
