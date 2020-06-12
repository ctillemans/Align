import React from 'react';
import { Link } from 'react-router-dom';
import M from 'materialize-css';

function Navbar(){

    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.sidenav');
         M.Sidenav.init(elems);
      });
    let loggedIn = false;

    return (
        
    <div>
        <nav>
            <div className="nav-wrapper  red accent-2 ">
            <Link to="/" className="brand-logo">Align</Link>
            <Link to="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
            <ul className="right hide-on-med-and-down">
                <li><Link to="/">Dashboard</Link></li>
                <li> 
                    {loggedIn && <Link to="/">Logout</Link> }
                    {!loggedIn && <Link to="/login">Login</Link>}
                </li>
            </ul>
            </div>
        </nav>
    
        <ul className="sidenav" id="mobile-demo">
            <li><Link to="/">Dashboard</Link></li>
            <li> 
                {loggedIn && <Link to="/">Logout</Link> }
                {!loggedIn && <Link to="/">Login</Link>}
            </li>
        </ul>
    </div>
    )
}

export default Navbar