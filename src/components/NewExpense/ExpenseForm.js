import React, { useState } from "react";

import "./ExpenseForm.css";
// import NewExpense from "./NewExpense";
let id = 4;

const ExpenseForm = (props) => {
    const addExpenseData = props.onExpenseHandler;
    // const [enteredTitle, setEnteredtitle ] = useState('');
    // const [enteredAmount, setEnteredAmount ] = useState('');
    // const [enteredDate, setEnteredDate ] = useState('');
    const [userInput, setUserInput] = useState({
        enteredTitle: "",
        enteredAmount: "",
        enteredDate: "",
    });

    const titleChangeHandler = (event) => {
        // setEnteredtitle(event.target.value)
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredTitle: event.target.value,
            };
        });
    };

    const amountChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredAmount: event.target.value,
            };
        });
    };

    const dateChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredDate: event.target.value,
            };
        });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const newData = {
            title: userInput.enteredTitle,
            date: new Date(userInput.enteredDate),
            amount: userInput.enteredAmount,
            id: `e${++id}`,
        };
        addExpenseData(newData);
        setUserInput((prevState) => {
            return {
                enteredAmount: "",
                enteredDate: "",
                enteredTitle: "",
            };
        });
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        type="text"
                        value={userInput.enteredTitle}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        value={userInput.enteredAmount}
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        min="2019-01-01"
                        step="2022-12-31"
                        value={userInput.enteredDate}
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
