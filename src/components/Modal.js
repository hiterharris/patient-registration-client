import React from 'react';
import check from '../images/check.png';
import "../App.css";

const Modal = ({ message }) => {
    return (
            <div className='Modal'>
                <p>{message}</p>
                <img className='check' src={check} alt='check' />
            </div>

    );
};

export default Modal;
