import "../sass/component/expenseItem.scss";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

import React from "react";

function ExpenseItem(props) {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
        </div>
        <div >
          <p className="expense-item__price">{props.amount} €</p>
          <p>{props.tag}</p>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
