import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
    const { items, onfilterbyYear, onDeleteExpenseHandler } = props;
    const [filteredYear, setFilteredYear] = useState("2020");

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };
    const filteredItems = items.filter((item) => {
        if (filteredYear === "All") {
            return true;
        }
        return item.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                    onfilterbyYear={onfilterbyYear}
                />
                <ExpensesList
                    filteredItems={filteredItems}
                    onDeleteExpenseHandler={onDeleteExpenseHandler}
                />
            </Card>
        </div>
    );
};

export default Expenses;
