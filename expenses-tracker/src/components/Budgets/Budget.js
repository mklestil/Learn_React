import React from "react";
import "../sass/component/budget.scss";

const Budget = (props) => {
  let chartWidth = "0%";
 

  let total = 0;
  props.expenses.map((data) => {
    if(props.tag === data.tag){
      total += data.amount;
    }
  })

  chartWidth = total;

  return (
    <div className="budget">
      <h3>{props.title}</h3>
      <div className="budgetValues">
        <p>Ausgabe: </p>
        <p>Budget: {props.amount}</p>
      </div>
      <div className="chart-bar chart-bar--horizontal">
        <div className="chart-bar__inner">
          <div className="chart-bar__fill chart-bar__fill--horizontal" style={{ width: chartWidth }}></div>
        </div>
      </div>
    </div>
  );
};

export default Budget;
