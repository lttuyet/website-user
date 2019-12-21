import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginContainer from '../containers/Login.container';
import HomePageContainer from '../containers/HomePage.container';
import RegisterContainer from '../containers/Register.container';
import InforContainer from '../containers/Infor.container';
import ListTutors from './ListTutors';
import DetailsTutor from './DetailsTutor/index';
import ActivatedCodeContainer from '../containers/ActivatedCode.container';
import ForgetPasswordContainer from '../containers/ForgetPassword.container';
import VerifyCodeContainer from '../containers/VerifyCode.container';
import EmailForgetPasswordContainer from '../containers/EmailForgetPassword.container';

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
                <Route path="/infor">
                    <InforContainer />
                </Route>
                <Route path="/listtutors">
                    <ListTutors />
                </Route>
                <Route path="/activated">
                    <ActivatedCodeContainer />
                </Route>
                <Route path="/verify">
                    <VerifyCodeContainer />
                </Route>
                <Route path="/email-forget-password">
                    <EmailForgetPasswordContainer />
                </Route>
                <Route path="/forget-password">
                    <ForgetPasswordContainer />
                </Route>
                <Route path="/detailstutor&id=:id" component={DetailsTutor} />
                <Route path="/">
                    <HomePageContainer />
                </Route>
            </Switch>
        </Router>
    </Provider>
);



export default Root;

