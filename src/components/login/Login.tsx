import React from 'react';
import {Grid} from "@material-ui/core";
import {NavLink, Redirect} from "react-router-dom";
import {LoginForm} from "./LoginForm";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../bll/store";

export const Login = () => {
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state =>
        state.login.isLogin)
    if (isLoggedIn) {
        return <Redirect to={'/'}/>
    }
    return <Grid container justify="center" style={{backgroundColor: "rgb(45, 45, 45)", maxWidth: 890, marginTop: 200}}>
        <Grid item xs={4}>
            <h2 style={{color: 'orange'}}>Login</h2>
            <LoginForm/>
            <div>
                <span>or</span>
                <NavLink to={"/registration"} style={{color: 'orange', textDecoration: "none"}}><h3>create an
                    account</h3></NavLink>
            </div>
        </Grid>
    </Grid>
}
