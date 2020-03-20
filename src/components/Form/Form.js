import React from 'react';
import Title from '../Title/Title';
import Button from '../Button/Button';
import FormRadio from './FormRadio/FormRadio';
import style from './Form.module.scss';

const Form = () => (
    <div className={style.wrapper}>
        <button className={style.closeButton}></button>
        <Title>Add new favourite Twitter account</Title>
        <form className={style.form}>
            <div className={style.form__radioWrapper}>
                <FormRadio>Twitter</FormRadio>
                <FormRadio>Article</FormRadio>
                <FormRadio>Note</FormRadio>
            </div>
            <p className={style.form__inputWrapper}>
                <label className={style.form__label} htmlFor="title">Twitter Name</label>
                <input className={style.form__input} type="text" />
            </p>
            <p className={style.form__inputWrapper}>
                <label className={style.form__label} htmlFor="link">Twitter Link</label>
                <input className={style.form__input} type="text" />
            </p>
            <p className={style.form__inputWrapper}>
                <label className={style.form__label} htmlFor="image">Image</label>
                <input className={style.form__input} type="text" />
            </p>
            <p className={style.form__inputWrapper}>
                <label className={style.form__label} htmlFor="description">Description</label>
                <textarea className={style.form__textarea} name="description" rows="10"></textarea>
            </p>
            <Button>add new item</Button>
        </form>
    </div>
);

export default Form;