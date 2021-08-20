import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
    const { onDeleteExpenseHandler, id } = props;

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
                <div
                    className="expense-item__close"
                    onClick={() => onDeleteExpenseHandler(id)}
                >
                    <div href="" className="close">
                        x
                    </div>
                </div>
            </div>
        </Card>
    );
}

export default ExpenseItem;
