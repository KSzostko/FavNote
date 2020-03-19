import React from 'react';
import style from './Button.module.scss';

const Button = ({ children, secondary }) => {
    const buttonClass = secondary ? style.secondary : style.primary;

    return (
        <button className={buttonClass}>
            {children}
        </button>
    );
};

export default Button;