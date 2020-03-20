import React from 'react'
import style from './FormRadio.module.scss';

const FormRadio = ({ id, children, checked, change }) => (
    <label className={style.radio}>
        <input
            id={id}
            className={style.input}
            type="radio"
            checked={checked}
            onChange={change}
        />
        <div className={style.radioCheck}></div>
        {children}
    </label>
);

export default FormRadio;