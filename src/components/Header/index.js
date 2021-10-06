import React from 'react';
import './style.css'


const Header = () => {
    return (
        <header className='header'>
            <div className="container">
                <div className="header-wrapper">
                    <div className="link-logo">
                       <p>Dilshat</p>
                    </div>
                    <ul className='menu-list'>

                        <button type="button"
                                className="py-2 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Cбросить все
                        </button>

                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;