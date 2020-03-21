import React from 'react';
import PropTypes from 'prop-types';
import Title from '../../Title/Title';
import Button from '../../Button/Button';
import style from './ListItem.module.scss';

const genericPhoto = 'https://idisl.info/wp-content/uploads/2015/07/generic-avatar.png';

const ListItem = ({ type, name, imageUrl, description, href }) => (
    <li className={style.wrapper}>
        {type === "twitter"
            && <img className={style.image} src={imageUrl === '' ? genericPhoto : imageUrl} alt={name} />}
        <div className={style.content}>
            <Title>{name}</Title>
            <p className={style.content__description}>{description}</p>
            <Button href={href}>visit twitter page</Button>
        </div>
    </li>
);

ListItem.propTypes = {
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    href: PropTypes.string,
};

export default ListItem;