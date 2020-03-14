import React from 'react';
import Header from '../../Header/Header';
import Button from '../../Button/Button';
import style from './ListItem.module.scss';

const ListItem = ({ imageUrl }) => (
    <li className={style.wrapper}>
        <img className={style.image} src={imageUrl} alt="Dan Abramov" />
        <div className={style.content}>
            <Header>Dan Abramov</Header>
            <p className={style.content__description}>One of the React creators</p>
            <Button>visit twitter page</Button>
        </div>
    </li>
);

export default ListItem;