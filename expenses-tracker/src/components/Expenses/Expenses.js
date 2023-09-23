import "../sass/component/expense.scss";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "../ExpensesFilter/ExpenseFilter";
import React, { useState } from "react";

// State Selected Date
function Expenses(props) {
  const [selectedData, setSelectedData] = useState("");

  // Filter Expenses
  const filterExpensesArray = props.items.filter(expenses =>{
    return expenses.date.getFullYear().toString() === selectedData;
  })

  // Change Methode Selected Date and write into State
  const onSelectFilterData = (eventData) => {
    setSelectedData(eventData);
    console.log(selectedData);
  };



  return (
    <Card className="expenses">
      <ExpenseFilter filterData={onSelectFilterData} />
      {filterExpensesArray.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;