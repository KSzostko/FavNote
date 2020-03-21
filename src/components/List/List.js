import React from 'react';
import ListItem from './ListItem/ListItem';
import style from './List.module.scss';

const tempData = [
    {
        id: 1,
        name: 'Dan Abramov',
        twitterLink: 'https://twitter.com/dan_abramov',
        description: 'One of the React creators',
        imageUrl: 'https://pbs.twimg.com/profile_images/1166344766210150401/amRnWzl-_400x400.jpg',
    },
    {
        id: 2,
        name: 'Dan Abramov',
        twitterLink: 'https://twitter.com/dan_abramov',
        description: 'One of the React creators',
        imageUrl: 'https://pbs.twimg.com/profile_images/1166344766210150401/amRnWzl-_400x400.jpg',
    },
    {
        id: 3,
        name: 'Dan Abramov',
        twitterLink: 'https://twitter.com/dan_abramov',
        description: 'One of the React creators',
        imageUrl: 'https://pbs.twimg.com/profile_images/1166344766210150401/amRnWzl-_400x400.jpg',
    },
    {
        id: 4,
        name: 'Dan Abramov',
        twitterLink: 'https://twitter.com/dan_abramov',
        description: 'One of the React creators',
        imageUrl: 'https://pbs.twimg.com/profile_images/1166344766210150401/amRnWzl-_400x400.jpg',
    },
]

const List = () => (
    <ul className={style.list}>
        {tempData.map(({ id, name, twitterLink, description, imageUrl }) => (
            <ListItem
                name={name}
                href={twitterLink}
                imageUrl={imageUrl}
                description={description}
                key={id}
            />
        ))}
    </ul>
);

export default List