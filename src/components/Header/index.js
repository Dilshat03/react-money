import React from 'react';
import './style.css'
import {useDispatch, useSelector} from "react-redux";
import {resetAll} from "../../redux/actions/tasksActions";


const Header = () => {
    const user= useSelector(s=>s.user.name)

   const dispatch = useDispatch()

    return (
        <header className='header'>
            <div className="container">
                <div className="header-wrapper">
                    <div className="link-logo">
                        {
                            user ?  <p>{user.name} <span>money</span></p> :  'User_money'
                        }
                    </div>
                    <ul className='menu-list'>

                        <button type="button"
                                onClick={() => dispatch(resetAll())}
                                className="py-2 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Сбросить все
                        </button>

                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;