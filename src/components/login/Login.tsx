import React from 'react';
import {Grid} from "@material-ui/core";
import {NavLink, Redirect} from "react-router-dom";
import {LoginForm} from "./LoginForm";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../bll/store";

export const Login = () => {
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state =>
        state.login.isLogin)
    if(isLoggedIn) {
        return <Redirect to={'/'}/>
    }
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
