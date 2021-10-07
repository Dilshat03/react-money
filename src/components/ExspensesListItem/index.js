import React from "react";
import {useDispatch} from "react-redux";
import {removeFromCart} from "../../redux/actions/tasksActions";

const ExpensesListItem = ({el,idx}) => {
    const dispatch = useDispatch()

    return (
        <tr>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div>
                    <div className="ml-2">
                        <p className="text-gray-900 whitespace-no-wrap ">
                            {el.date}
                        </p>
                    </div>
                </div>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">
                    {el.title}
                </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">
                    {el.amount},00$
                </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <span
                                    className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                   <button type="button"
                                           onClick={() => dispatch(removeFromCart(idx))}
                                           className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    Удалить
                                    </button>
                                </span>
            </td>
        </tr>

    );
};

export default ExpensesListItem;