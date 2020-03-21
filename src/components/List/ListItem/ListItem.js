import React from 'react';
import PropTypes from 'prop-types';
import Title from '../../Title/Title';
import Button from '../../Button/Button';
import style from './ListItem.module.scss';

const ListItem = ({ name, imageUrl, description }) => (
    <li className={style.wrapper}>
        <img className={style.image} src={imageUrl} alt="Dan Abramov" />
        <div className={style.content}>
            <Title>{name}</Title>
            <p className={style.content__description}>{description}</p>
            <Button>visit twitter page</Button>
        </div>
    </li>
);

ListItem.propTypes = {
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default ListItem;