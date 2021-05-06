import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import React from "react";

import "./Expense.css";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.items.map((expense) => {
        return <ExpenseItem key={expense.id} {...expense} />;
      })}
    </Card>
  );
};

export default Expenses;
