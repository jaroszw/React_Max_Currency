import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import React, { useState } from "react";

import ExpensesFilter from "./ExpensesFilter";

import "./Expense.css";

const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const [filteredItem, setFilteredItem] = useState(items);

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);

    const filtered = items.filter((item) => {
      return item.date.toString().includes(selectedYear);
    });

    setFilteredItem(filtered);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        filteredYear={filteredYear}
        onSelectYear={filterChangeHandler}
      />
      {filteredItem.map((expense) => {
        return <ExpenseItem key={expense.id} {...expense} />;
      })}
    </Card>
  );
};

export default Expenses;
