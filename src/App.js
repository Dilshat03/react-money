import React from 'react';
import Header from "./components/Header";
import BalanceInfo from "./components/BalanceInfo";
import ExpensesForm from "./components/ExpensesForm";
import ExpensesList from "./components/ExpensesList";

const App = () => {
    return (
        <div>
            <Header />
            <BalanceInfo />
            <ExpensesForm />
            <ExpensesList />
        </div>
    );
};

export default App;