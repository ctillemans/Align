import React from 'react';
import {BrowserRouter} from 'react-router-dom';
// import './App.css';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import 'materialize-css/dist/css/materialize.min.css';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
         <div>
         <Navbar></Navbar>
          <Landing></Landing>
         </div>
       </BrowserRouter>
    </div>
  );
}

export default App;
