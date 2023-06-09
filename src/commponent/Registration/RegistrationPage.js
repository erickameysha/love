import React from 'react';
import {Link} from "react-router-dom";
import SignUp from "../FormsComponent/SignUp";

const RegistrationPage = () => {
    return (
        <div>
            <h1>Register</h1>
            <SignUp/>
            <p>
                or Already have an account <Link to={'/login'}>Sign in</Link>
            </p>
        </div>
    );
};

export default RegistrationPage;