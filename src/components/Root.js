import React from 'react';
import { BrowserRouter as Router,
     Route,
     Switch 
    } from 'react-router-dom';
import LoginContainer from '../containers/Login.container';
import HomePageContainer from '../containers/HomePage.container';
import RegisterContainer from '../containers/Register.container';

const Root = () => (
    <Router>
      
        <Switch>
        
           <Route path="/login">
               <LoginContainer/>
           </Route>
           <Route path="/register">
               <RegisterContainer/>
           </Route>
           <Route path="/">
               <HomePageContainer/>
           </Route>
              
        </Switch>  
        
    </Router>
);



export default Root;

