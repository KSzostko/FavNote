import React from 'react';
import PropTypes from 'prop-types';
import style from './Title.module.scss';

const Header = ({ children }) => (
    <h1 className={style.header}>
        {children}
    </h1>
);

Header.propTypes = {
    children: PropTypes.string.isRequired
};

export default Header;