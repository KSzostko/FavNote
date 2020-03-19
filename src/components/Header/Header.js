import React from 'react';
import HeaderNav from './HeaderNav/HeaderNav';
import Button from '../Button/Button';
import style from './Header.module.scss';
import logo from '../../assets/img/logo.svg';

const Header = () => (
    <div className={style.wrapper}>
        <img src={logo} alt="Fav Note" />
        <HeaderNav />
        <Button secondary>new item</Button>
    </div>
);

export default Header;