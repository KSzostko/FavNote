import React from 'react';
import ListItem from './ListItem/ListItem';
import style from './List.module.scss';

const tempData = [
    {
        name: 'Dan Abramov',
        description: 'One of the React creators',
        imageUrl: 'https://pbs.twimg.com/profile_images/1166344766210150401/amRnWzl-_400x400.jpg',
    },
    {
        name: 'Dan Abramov',
        description: 'One of the React creators',
        imageUrl: 'https://pbs.twimg.com/profile_images/1166344766210150401/amRnWzl-_400x400.jpg',
    },
    {
        name: 'Dan Abramov',
        description: 'One of the React creators',
        imageUrl: 'https://pbs.twimg.com/profile_images/1166344766210150401/amRnWzl-_400x400.jpg',
    },
    {
        name: 'Dan Abramov',
        description: 'One of the React creators',
        imageUrl: 'https://pbs.twimg.com/profile_images/1166344766210150401/amRnWzl-_400x400.jpg',
    },
]

const List = () => (
    <ul className={style.list}>
        {tempData.map(({ name, description, imageUrl }) => (
            <ListItem
                name={name}
                imageUrl={imageUrl}
                description={description}
            />
        ))}
    </ul>
);

export default List