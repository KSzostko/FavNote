import React from 'react';
import style from './HeaderNav.module.scss';

const HeaderNav = () => (
    <nav>
        <ul className={style.list}>
            <li className={style.list__item}>
                <a className={style.list__link} href="/">twitters</a>
            </li>
            <li className={style.list__item}>
                <a className={style.list__link} href="/">articles</a>
            </li>
            <li className={style.list__item}>
                <a className={style.list__link} href="/">notes</a>
            </li>
        </ul>
    </nav>
);

export default HeaderNav;