import React from 'react';
import { Link } from 'react-router-dom';

function Landing() {
    return(
        <div style= {{height: "75vh"}} className="container valign-wrapper">
            <div className="row">
                <div className="col s12 center-align">
                    <h4>
                        Set Goals | Align Actions 
                    </h4>
                    <p className="flow-text grey-text text-darken-1">
                        Small steps that <b>Align</b> with your goals lead to <b>radical</b> change
                    </p>
                    <br/>
                    <div className="col s6">
                        <Link
                        to="/register"
                        style={{
                            width:"140px",
                            borderRadius: "3px",
                            letterSpacing: "1.5px"
                        }}
                        className="btn btn-large waves-effect waves-light hoverable blue accent-3">
                            Register
                        </Link>
                    </div>
                    <div className="col s6">
                        <Link
                        to="/Login"
                        style={{
                            width:"140px",
                            borderRadius: "3px",
                            letterSpacing: "1.5px"
                        }}
                        className="btn btn-large btn-flat waves-effect white black-text">
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing