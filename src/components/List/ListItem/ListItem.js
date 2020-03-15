import React from 'react';
import Header from '../../Header/Header';
import Button from '../../Button/Button';
import style from './ListItem.module.scss';

const ListItem = ({ name, imageUrl, description }) => (
    <li className={style.wrapper}>
        <img className={style.image} src={imageUrl} alt="Dan Abramov" />
        <div className={style.content}>
            <Header>{name}</Header>
            <p className={style.content__description}>{description}</p>
            <Button>visit twitter page</Button>
        </div>
    </li>
);

export default ListItem;