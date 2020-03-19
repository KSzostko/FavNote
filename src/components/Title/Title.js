import React from 'react';
import style from './Title.module.scss';

const Header = ({ children }) => (
    <h1 className={style.header}>
        {children}
    </h1>
);

export default Header;