import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AppContext from '../context';
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

    render() {
        const { isFormVisible } = this.state;
        const contextElements = {
            openForm: this.openForm
        }

        return (
            <BrowserRouter>
                <AppContext.Provider value={contextElements}>
                    <Header />
                    <List />
                    {isFormVisible && <Form click={this.closeForm} />}
                    <Switch>
                        <Route exact path="/" component={TwittersView} />
                        <Route path="/articles" component={ArticlesView} />
                        <Route path="/notes" component={NotesView} />
                    </Switch>
                </AppContext.Provider>
            </BrowserRouter>
        );
    }
}

export default Root;
