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
        twitter: [],
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
        const { isFormVisible } = this.state;
        const contextElements = {
            openForm: this.openForm
        }

        return (
            <BrowserRouter>
                <AppContext.Provider value={contextElements}>
                    <Header />
                    <List />
                    {isFormVisible && <Form addItemFn={this.addItem} click={this.closeForm} />}
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
