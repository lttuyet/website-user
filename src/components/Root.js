import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginContainer from '../containers/Login.container';
import HomePageContainer from '../containers/HomePage.container';
import RegisterContainer from '../containers/Register.container';

const Root = ({ store }) => (
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path="/login">
                    <LoginContainer />
                </Route>
                <Route path="/register">
                    <RegisterContainer />
                </Route>
                <Route path="/">
                    <HomePageContainer />
                </Route>
            </Switch>
        </Router>
    </Provider>
);



export default Root;

