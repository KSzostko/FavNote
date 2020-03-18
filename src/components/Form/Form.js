import React from 'react';
import Header from '../Header/Header';
import Button from '../Button/Button';
import style from './Form.module.scss';

const Form = () => (
    <div className={style.wrapper}>
        <button className={style.closeButton}></button>
        <Header>Add new favourite Twitter account</Header>
        <form className={style.form}>
            <p>
                <label className={style.form__label} htmlFor="title">Twitter Name</label>
                <input className={style.form__input} type="text" />
            </p>
            <p>
                <label className={style.form__label} htmlFor="link">Twitter Link</label>
                <input className={style.form__input} type="text" />
            </p>
            <p>
                <label className={style.form__label} htmlFor="image">Image</label>
                <input className={style.form__input} type="text" />
            </p>
            <p>
                <label className={style.form__label} htmlFor="description">Description</label>
                <textarea className={style.form__textarea} name="description"></textarea>
            </p>
            <Button>add new item</Button>
        </form>
    </div>
);

export default Form;