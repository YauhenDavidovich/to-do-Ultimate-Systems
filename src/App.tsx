import React from 'react';
import './App.css';
import {
    AppBar,
    Button,
    Container,
    IconButton,
    Toolbar,
    Typography
} from "@material-ui/core";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {Redirect, Route, Switch} from "react-router-dom";
import {Login} from "./components/login/Login";
import {Registration} from "./components/registration/Registration";
import {TodolistsList} from "./components/todolists/TodolistsList";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./bll/store";
import {logoutTC} from "./bll/login-reducer";



const App = () => {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state =>
        state.login.isLogin)
    const loggoutHendler = () => {
        dispatch(logoutTC())
    }



    return (
        <div className="App" style={{backgroundColor: "black", justifyContent: "center", alignItems: 'center'}}>
            <AppBar position="static">
                <Toolbar style={{backgroundColor: "black"}}>
                    {isLoggedIn && <IconButton style={{color: "orange", position: "absolute",top: 0, right: 4}} aria-label="logout">
                        <ExitToAppIcon onClick={loggoutHendler}/>
                    </IconButton>}

                </Toolbar>
            </AppBar>
            <Container style={{backgroundColor: "black",display:"flex", justifyContent: "center", alignItems: 'center'}}>
                <Switch>
                    <Route exact path={'/'} render={() => <TodolistsList/>}/>
                    <Route path={'/login'} render={() => <Login/>}/>
                    <Route path={'/registration'} render={() => <Registration/>}/>
                    <Route path={'/404'} render={() => <h1>404: PAGE NOT FOUND</h1>}/>
                    <Redirect from={'*'} to={'/404'}/>
                </Switch>
            </Container>
        </div>
    )
}

export default App;
