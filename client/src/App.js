import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import './App.css';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/register';
import PageNotFound from './components/misc/PageNotFound';
import 'materialize-css/dist/css/materialize.min.css';

function App() {
  return (
    <div className="App">
       <Router>
         <Navbar></Navbar>
         <Switch>
            <Route exact path='/' component={Landing}/>
            <Route path="/register" component={Register}/>
            <Route component={PageNotFound}/>
         </Switch>
       </Router>
    </div>
  );
}

export default App;
