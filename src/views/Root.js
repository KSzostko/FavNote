import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AppContext from '../context';
import NotesView from './NotesView';
import ArticlesView from './ArticlesView';
import TwittersView from './TwittersView';
import Form from '../components/Form/Form';
import Header from '../components/Header/Header';

class Root extends Component {
    state = {
        isFormVisible: false,
        twitter: [
            {
                title: 'Dan Abramov',
                link: 'https://twitter.com/dan_abramov',
                image: 'https://pbs.twimg.com/profile_images/1166344766210150401/amRnWzl-_400x400.jpg',
                description: 'One of the React creators',
            },
            {
                title: 'Dan Abramov',
                link: 'https://twitter.com/dan_abramov',
                image: 'https://pbs.twimg.com/profile_images/1166344766210150401/amRnWzl-_400x400.jpg',
                description: 'One of the React creators',
            },
            {
                title: 'Dan Abramov',
                link: 'https://twitter.com/dan_abramov',
                image: 'https://pbs.twimg.com/profile_images/1166344766210150401/amRnWzl-_400x400.jpg',
                description: 'One of the React creators',
            },
            {
                title: 'Dan Abramov',
                link: 'https://twitter.com/dan_abramov',
                image: 'https://pbs.twimg.com/profile_images/1166344766210150401/amRnWzl-_400x400.jpg',
                description: 'One of the React creators',
            },
        ],
        article: [],
        note: []
    }

    openForm = () => (
        this.setState({
            isFormVisible: true
        })
    );

    closeForm = () => (
        this.setState({
            isFormVisible: false
        })
    );

    addItem = (e, newItem) => {
        e.preventDefault();
        console.log(newItem.checked);

        this.setState(prevState => ({
            [newItem.checked]: [
                ...prevState[newItem.checked],
                newItem,
            ]
        }));

        this.closeForm();
    }

    render() {
        const { isFormVisible, twitter, article, note } = this.state;
        const contextElements = {
            openForm: this.openForm,
            twitter,
            article,
            note,
        };

        return (
            <BrowserRouter>
                <AppContext.Provider value={contextElements}>
                    <Header />
                    {isFormVisible && <Form addItemFn={this.addItem} click={this.closeForm} />}
                    <Switch>
                        <Route exact path={process.env.PUBLIC_URL + "/"} component={TwittersView} />
                        <Route path={process.env.PUBLIC_URL + "/articles"} component={ArticlesView} />
                        <Route path={process.env.PUBLIC_URL + "/notes"} component={NotesView} />
                    </Switch>
                </AppContext.Provider>
            </BrowserRouter>
        );
    }
}

export default Root;
