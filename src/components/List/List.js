import React from 'react';
import AppContext from '../../context';
import ListItem from './ListItem/ListItem';
import style from './List.module.scss';

const List = ({ type }) => (
    <AppContext.Consumer>
        {(context) => {
            return (
                <ul className={style.list}>
                    {context[type].length === 0
                        && <h1 className={style.noItems}>There's nothing yet here, please add some items!</h1>}
                    {context[type].map(({ title, link, image, description }) => (
                        <ListItem
                            type={type}
                            name={title}
                            href={link}
                            imageUrl={image}
                            description={description}
                            key={title}
                        />
                    ))}
                </ul>
            );

        }}
    </AppContext.Consumer>
);

export default List;