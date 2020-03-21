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
        checked: types.twitter,
        title: '',
        link: '',
        image: '',
        description: '',
    }

    handleRadioChange = (e) => {
        this.setState({
            checked: e.target.id,
            title: '',
            link: '',
            image: '',
            description: '',
        });
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    addItem = (e) => {
        e.preventDefault();

        console.log(e.target);
    }

    render() {
        const { checked, title, link, image, description } = this.state;
        const { click } = this.props;

        return (
            <div className={style.wrapper}>
                <button onClick={click} className={style.closeButton}></button>
                <Title>Add new favourite Twitter account</Title>
                <form onSubmit={this.addItem} className={style.form}>
                    <div className={style.form__radioWrapper}>
                        <FormRadio
                            id={types.twitter}
                            checked={checked === types.twitter}
                            change={this.handleRadioChange}
                        >
                            Twitter
                        </FormRadio>
                        <FormRadio
                            id={types.article}
                            checked={checked === types.article}
                            change={this.handleRadioChange}
                        >
                            Article
                        </FormRadio>
                        <FormRadio
                            id={types.note}
                            checked={checked === types.note}
                            change={this.handleRadioChange}
                        >
                            Note
                        </FormRadio>
                    </div>
                    <p className={style.form__inputWrapper}>
                        <label className={style.form__label} htmlFor="title">
                            {checked === types.twitter ? 'Twitter Name' : 'Title'}
                        </label>
                        <input
                            name="title"
                            value={title}
                            onChange={this.handleInputChange}
                            className={style.form__input}
                            type="text"
                        />
                    </p>
                    {checked !== types.note
                        && (
                            <p className={style.form__inputWrapper}>
                                <label className={style.form__label} htmlFor="link">
                                    {checked === types.twitter ? 'Twitter Link' : 'Link'}
                                </label>
                                <input
                                    name="link"
                                    value={link}
                                    onChange={this.handleInputChange}
                                    className={style.form__input}
                                    type="text"
                                />
                            </p>
                        )}
                    {checked === types.twitter && (
                        <p className={style.form__inputWrapper}>
                            <label className={style.form__label} htmlFor="image">Image</label>
                            <input
                                name="image"
                                value={image}
                                onChange={this.handleInputChange}
                                className={style.form__input}
                                type="text"
                            />
                        </p>
                    )}
                    <p className={style.form__inputWrapper}>
                        <label className={style.form__label} htmlFor="description">Description</label>
                        <textarea
                            name="description"
                            value={description}
                            onChange={this.handleInputChange}
                            className={style.form__textarea}
                            rows="10"
                        ></textarea>
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