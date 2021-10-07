import React from 'react';
import Header from "./components/Header";
import BalanceInfo from "./components/BalanceInfo";
import ExpensesForm from "./components/ExpensesForm";
import ExpensesList from "./components/ExpensesList";
import ModalWrapper from "./components/ModalWrapper";

const App = () => {
    return (
        <div>
            <ModalWrapper />
            <Header />
            <BalanceInfo />
            <ExpensesForm />
            <ExpensesList />
        </div>
    );
};

export default App;