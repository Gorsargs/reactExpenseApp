import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
    const { filteredItems, onDeleteExpenseHandler } = props;

    let expenseContent = <p>No expenses found</p>;

    if (filteredItems.length > 0) {
        expenseContent = filteredItems.map((value) => (
            <ExpenseItem
                key={value.id}
                id={value.id}
                title={value.title}
                date={value.date}
                amount={value.amount}
                onDeleteExpenseHandler={onDeleteExpenseHandler}
            />
        ));
    }
    return expenseContent;
};

export default ExpensesList;
