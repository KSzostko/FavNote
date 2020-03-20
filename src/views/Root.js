import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotesView from './NotesView';
import ArticlesView from './ArticlesView';
import TwittersView from './TwittersView';
import List from '../components/List/List';
import Form from '../components/Form/Form';
import Header from '../components/Header/Header';

class Root extends Component {
    state = {
        isFormVisible: false,
    }

    render() {
        const { isFormVisible } = this.state;

        return (
            <BrowserRouter>
                <Header />
                <List />
                {isFormVisible && <Form />}
                <Switch>
                    <Route exact path="/" component={TwittersView} />
                    <Route path="/articles" component={ArticlesView} />
                    <Route path="/notes" component={NotesView} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Root;
