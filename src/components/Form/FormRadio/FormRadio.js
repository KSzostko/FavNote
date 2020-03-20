import React from 'react'
import style from './FormRadio.module.scss';

const FormRadio = ({ children }) => (
    <label className={style.radio}>
        <input
            className={style.input}
            type="radio"
        />
        <div className={style.radioCheck}></div>
        {children}
    </label>
);

export default FormRadio;