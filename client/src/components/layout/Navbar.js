import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import M from 'materialize-css';

function Navbar(){

    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems);
      });
    let loggedIn = false;

    return (
        
    <div>
        <nav>
            <div class="nav-wrapper">
            <Link to="/" class="brand-logo">Align</Link>
            <Link to="/" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></Link>
            <ul class="right hide-on-med-and-down">
                <li><Link to="/">Dashboard</Link></li>
                <li> 
                    {loggedIn && <Link to="/">Logout</Link> }
                    {!loggedIn && <Link to="/">Login</Link>}
                </li>
            </ul>
            </div>
        </nav>
    
        <ul class="sidenav" id="mobile-demo">
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