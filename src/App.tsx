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
import {RegisterForm} from "./components/registration/RegisterForm";
import {Redirect, Route, Switch} from "react-router-dom";
import {LoginForm} from "./components/login/LoginForm";
import {Login} from "./components/login/Login";

function App() {
  return (
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="end" color="inherit" aria-label="logout">
              <ExitToAppIcon onClick={()=>{}}/>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Container fixed>
          <Switch>
            {/*<Route exact path={'/'} render={()=><TodolistsList/> }/>*/}
            <Route path={'/login'} render={()=><Login/> }/>
            <Route path={'/register'} render={()=><RegisterForm/> }/>
            <Route path={ '/404' } render={ () => <h1>404: PAGE NOT FOUND</h1> }/>
            <Redirect from={'*'} to={'/404'}/>
          </Switch>
        </Container>
      </div>
  )
}

export default App;
