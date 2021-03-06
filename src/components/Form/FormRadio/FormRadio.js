import React from 'react';
import PropTypes from 'prop-types';
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

FormRadio.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    change: PropTypes.func.isRequired,
};

export default FormRadio;