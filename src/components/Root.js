import React from 'react';
import { BrowserRouter as Router,
     Route,
     Switch 
    } from 'react-router-dom';

const Root = () => (
    <Router>
      
        <Switch>
        
           <Route path="/login">
               <div/>
           </Route>
           <Route path="/">
               <div/>
           </Route>
              
        </Switch>  
        
    </Router>
);



export default Root;

