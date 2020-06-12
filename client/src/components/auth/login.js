import React from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';


function Login() {
const [email, setEmail] = React.useState('');
const [password, setPassword] = React.useState('');

const handleSubmit = e => {
    e.preventDefault();
    Axios.post('http://localhost:5000/users/login', {
        email,
        password
    }).then(response => console.log(response))
    .catch(err => console.log(err));
    console.log(e);

}

    return(
        <div className="container" style={{paddingTop:"20px"}}>
            <div className="row">
                <div className="col s8 offset-s2 login-body">
                    <Link to="/">
                        <i className="material-icons left">keyboard_backspace</i> Back to home
                    </Link>
                
                    <div className="col s12">
                        <h4><b>Login</b> below</h4>
                        <p className="grey-text text-darken-1">Don't have an account? <Link to="/register">Register here</Link></p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="col s12 input-field ">
                            <input
                            type="email"
                            id="email"
                            onChange={e => setEmail(e.target.value)}/>
                            <label htmlFor="email">
                                <i className="material-icons left">email</i>
                                Email
                                </label>
                        </div>
                        <div className="input-field col s12">
                            <input 
                            type="password"
                            id="password"
                            onChange={e =>setPassword(e.target.value)}/>
                            <label htmlFor="password">
                                <i className="material-icons left">security</i>
                                password
                            </label>
                        </div>
                        <div className="col s12">
                            <button
                            className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                            style={{
                                borderRadius:"3px",
                                letterSpacing:"1.5px"
                            }}>
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )

}

export default Login 