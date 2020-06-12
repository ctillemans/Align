import React from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

function Register(){
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [password2, setPassword2] = React.useState('');

    const handleSubmit =(e) => {
        e.preventDefault();

        const newUser = {
            name,
            email,
            password,
            password2
        }
        Axios.post('http://localhost:5000/users/register', newUser).then( res => {
            console.log(res);
        })
        console.log(newUser);
        } 

    return (
        <div className="container"style={{paddingTop:"20px"}}>
            <div className="row">
                <div className="col s8 offset-s2">
                    <Link to="/">
                        <i className="material-icons left">keyboard_backspace</i>
                        Back to home
                    </Link>
                    <div className="col s12"> 
                    <h4><b>Register</b> below </h4>
                    <p className="grey-text text-darken-1">
                        Already have an account?
                        <Link to="/login">Login</Link>
                    </p>
                    </div>
                    <form noValidate onSubmit={handleSubmit}>
                        <div className="input-field col s12">
                            <input
                            type="text"
                            id="name"
                            onChange={e => setName(e.target.value)}
                            />
                            <label htmlFor="name">
                                <i className="material-icons left">person</i>
                                Name
                            </label>
                        </div>
                        <div className="input-field col s12">
                            <input 
                                onChange={e=>setEmail(e.target.value)}
                                id="email"
                                type="email"
                            />
                            <label htmlFor="email">
                                <i className="material-icons left">email</i>
                                Email</label>
                        </div>
                        <div className="input-field col s12">
                            <input 
                            type="password"
                            id="password1"
                            onChange={e=>setPassword(e.target.value)}
                            />
                            <label htmlFor="password1">
                                <i className="material-icons left">security</i>
                                Password
                            </label>
                        </div>
                        <div className="input-field col s12">
                            <input 
                            type="password"
                            id="password2"
                            onChange={e=>setPassword2(e.target.value)}
                            />
                            <label htmlFor="password2">
                                Confirm Password
                            </label>
                        </div>

                        <div className="col s12 ">
                            <button 
                            style={{
                                width:"150px",
                                borderRadius:"3px",
                                letterSpacing:"1.5px",
                                marginTop:"1rem"
                            }}
                            className="btn btn-large waves-effect waves-light hoverable blue accent-3">Signup</button>
                        </div>
                    </form>
                </div>
            </div>
            
        </div>
        
    )
}

export default Register

