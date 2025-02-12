import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

//Money formatter function
function moneyFormatter(num) {
  let p = num.toFixed(2).split(".");
  return (
    "₹ " +
    p[0]
      .split("")
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === "-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
      }, "") +
    "." +
    p[1]
  );
}

export const Transaction = ({ transaction }) => {
  const { updateCategory, deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}{" "}
      <span>
        {sign}
        {moneyFormatter(transaction.amount)}
      </span>
      <select
        value={transaction.category}
        onChange={(e) => updateCategory(transaction.id, e.target.value)}
      >
        <option value="food">Food</option>
        <option value="entertainment">Entertainment</option>
        <option value="transportation">Transportation</option>
        <option value="shopping">Shopping</option>
        <option value="other">Other</option>
      </select>
      <button
        onClick={() => deleteTransaction(transaction.id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};
