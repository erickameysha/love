import React from 'react';
import Form from '../../src/commponent/formes/Form'
import LoginPage from "./LoginPage";
import {Link} from "react-router-dom";
import SignUp from "../commponent/formes/SignUp";
import Joi from 'joi'
import {Box, Button} from "@mui/material";
import {joiResolver, useForm} from "@mantine/form";
import {Group, TextInput} from "@mantine/core";

const schema = Joi.object({
    name: Joi.string().min(2).message('Name should have at least 2 letters'),
    email: Joi.string()
        .email({tlds: {allow: false}})
        .message('Invalid email'),
    age: Joi.number().min(18).message('You must be at least 18 to create an account'),
});
const RegistrationPage = () => {

    return (

        <div style={{
            maxWidth: '1120px',
            margin: '0 auto'
        }}>
            <h1>     Registration</h1>
            <SignUp/>
            or <Link to={'/login'}>Login</Link>
        </div>
    );
};

export default RegistrationPage;