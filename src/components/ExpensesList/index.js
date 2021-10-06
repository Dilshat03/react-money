import React from 'react';
import {useSelector} from "react-redux";
import ExpensesListItem from "../ExspensesListItem";

const ExpensesList = () => {
    const {tasks} = useSelector(s=>s.task)
    return (
        <div>
            <div className="container mx-auto  max-w-4xl mt-10">
                <div className="py-8">
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <table className="min-w-full leading-normal text-center">
                                <thead>
                                <tr>
                                    <th scope="col"
                                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal">
                                        Дата
                                    </th>
                                    <th scope="col"
                                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal">
                                        Название траты
                                    </th>
                                    <th scope="col"
                                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal">
                                        Сколько потратили
                                    </th>
                                    <th scope="col"
                                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal">
                                        Удалить
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    tasks.map(el=>
                                    <ExpensesListItem el={el}/>
                                    )
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ExpensesList;