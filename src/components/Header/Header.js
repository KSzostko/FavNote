import React from 'react';
import style from './Header.module.scss';
import logo from '../../assets/img/logo.svg';

const Header = () => (
    <div className={style.wrapper}>
        <img src={logo} alt="Fav Note" />
    </div>
);

export default Header;