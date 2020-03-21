import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from '../Title/Title';
import Button from '../Button/Button';
import FormRadio from './FormRadio/FormRadio';
import style from './Form.module.scss';

const types = {
    twitter: 'twitter',
    article: 'article',
    note: 'note'
};

class Form extends Component {
    state = {
        checked: types.twitter
    }

    handleChange = (e) => {
        this.setState({
            checked: e.target.id
        });
    }

    render() {
        const { checked } = this.state;
        const { click } = this.props;

        return (
            <div className={style.wrapper}>
                <button onClick={click} className={style.closeButton}></button>
                <Title>Add new favourite Twitter account</Title>
                <form className={style.form}>
                    <div className={style.form__radioWrapper}>
                        <FormRadio
                            id={types.twitter}
                            checked={checked === types.twitter}
                            change={this.handleChange}
                        >
                            Twitter
                        </FormRadio>
                        <FormRadio
                            id={types.article}
                            checked={checked === types.article}
                            change={this.handleChange}
                        >
                            Article
                        </FormRadio>
                        <FormRadio
                            id={types.note}
                            checked={checked === types.note}
                            change={this.handleChange}
                        >
                            Note
                        </FormRadio>
                    </div>
                    <p className={style.form__inputWrapper}>
                        <label className={style.form__label} htmlFor="title">
                            {checked === types.twitter ? 'Twitter Name' : 'Title'}
                        </label>
                        <input className={style.form__input} type="text" />
                    </p>
                    {checked !== types.note
                        && (
                            <p className={style.form__inputWrapper}>
                                <label className={style.form__label} htmlFor="link">
                                    {checked === types.twitter ? 'Twitter Link' : 'Link'}
                                </label>
                                <input className={style.form__input} type="text" />
                            </p>
                        )}
                    {checked === types.twitter && (
                        <p className={style.form__inputWrapper}>
                            <label className={style.form__label} htmlFor="image">Image</label>
                            <input className={style.form__input} type="text" />
                        </p>
                    )}
                    <p className={style.form__inputWrapper}>
                        <label className={style.form__label} htmlFor="description">Description</label>
                        <textarea className={style.form__textarea} name="description" rows="10"></textarea>
                    </p>
                    <Button>add new item</Button>
                </form>
            </div>
        );
    }
}

Form.propTypes = {
    click: PropTypes.func.isRequired,
};

export default Form;