import React from 'react';
import AppContext from '../../context';
import ListItem from './ListItem/ListItem';
import style from './List.module.scss';

const List = ({ type }) => (
    <AppContext.Consumer>
        {(context) => {
            return (
                <ul className={style.list}>
                    {console.log(context)}
                    {context[type].map(({ title, link, image, description }) => (
                        <ListItem
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