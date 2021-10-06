import React from 'react';
import {useDispatch} from "react-redux";
import  {useFormik} from "formik";
import * as Yup from 'yup';
import {tasksActions} from "../../redux/actions/tasksActions";


const ExpensesForm = () => {

    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            date: '',
            title: '',
            amount: ''
        },
        validationSchema: Yup.object({
            date: Yup.string()
                .required('Required'),
            title: Yup.string()
                .max(8, 'Максимум 8 символов')
                .required('Required'),
            amount: Yup.number().required('Required'),
        }),
        onSubmit: values => {
            dispatch(tasksActions(values))
        },
    });
    return (
        <div className='container'>

                <form onSubmit={formik.handleSubmit}>
                    <div className="grid grid-cols-3 justify-center">
                        <div>
                            <label htmlFor="date" className='label-date'>Дата</label>
                            <div className="block">
                                <i className='bx bx-calendar icons '></i>
                                <input type="date" className='date-input'
                                       name='date'
                                       onChange={formik.handleChange}
                                       value={formik.values.date}

                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="title" className='label-date'>Название</label>
                            <div className="block">
                                <i className='bx bxs-pencil icons'></i>
                                <input type="text" className='date-input'
                                       placeholder='Название'
                                       name='title'
                                       onChange={formik.handleChange}
                                       value={formik.values.title}


                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="amount" className='label-date'>Количество</label>
                            <div className="block">
                                <i className='bx bx-dollar icons'></i>
                                <input type="number" className='date-input'
                                       name='amount'
                                       onChange={formik.handleChange}
                                       value={formik.values.amount}
                                />
                            </div>
                        </div>
                    </div>
                    <button type="submit"
                            className="py-2 px-4 mt-10 btn-add  bg-gradient-to-r from-green-400 to-blue-500 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 ">
                        Добавить
                    </button>
                </form>


        </div>
    );
};

export default ExpensesForm;