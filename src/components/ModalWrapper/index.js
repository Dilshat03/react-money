import React from 'react';
import Modal from 'react-modal';
import {useDispatch, useSelector} from "react-redux";
import {useFormik} from "formik";
import * as Yup from 'yup';
import {newUserName, userActions} from "../../redux/actions/userActions";


const ModalWrapper = () => {
    const customStyles = {
        content: {
            top: '30%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            name:''
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(2, 'Короткое имя')
                .required('Required'),
        }),
        onSubmit: (values) => {
            dispatch(userActions(values))
        },
    });

    const {modalIsOpen} = useSelector(s=>s.user)


    return (
        <div>
            <div className="bg-black-modal">
                <Modal
                    isOpen={modalIsOpen}
                    style={customStyles}
                >
                    <div className='text-4xl'>Привет бизнесмен!</div>
                    <div className='text-base mt-2'>Как я могу тебя величать?</div>
                    <form className='form-width' onSubmit={formik.handleSubmit}>
                        <label htmlFor="name" className='label-name'>Ваше имя</label>
                        <input type="text" id='name' className='block input-name'

                               onChange={formik.handleChange}
                               value={formik.values.name}
                        />

                        <button className='btn-more' type='submit' onClick={onsubmit}>Далее</button>
                    </form>
                </Modal>
            </div>
        </div>
    );
};

export default ModalWrapper;