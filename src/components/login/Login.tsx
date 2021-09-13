import React from 'react';
import {Grid} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import {LoginForm} from "./LoginForm";

export const Login = () => {
    return <Grid container justify="center">
        <Grid item xs={4}>
            <LoginForm/>
            <div >
                <span>or</span>
                <NavLink to={"/registration"}>create an account</NavLink>
            </div>
        </Grid>
    </Grid>
}
