import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './HeaderNav.module.scss';

const HeaderNav = () => (
    <nav>
        <ul className={style.list}>
            <li className={style.list__item}>
                <NavLink
                    exact
                    to="/"
                    className={style.list__link}
                    activeClassName={style.list__linkActive}
                >
                    twitters
                </NavLink>
            </li>
            <li className={style.list__item}>
                <NavLink
                    to="/articles"
                    className={style.list__link}
                    activeClassName={style.list__linkActive}
                >
                    articles
                </NavLink>
            </li>
            <li className={style.list__item}>
                <NavLink
                    to="/notes"
                    className={style.list__link}
                    activeClassName={style.list__linkActive}
                >
                    notes
                </NavLink>
            </li>
        </ul>
    </nav>
);

export default HeaderNav;