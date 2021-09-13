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
            <Route path={'/registration'} render={()=><Registration/> }/>
            <Route path={ '/404' } render={ () => <h1>404: PAGE NOT FOUND</h1> }/>
            <Redirect from={'*'} to={'/404'}/>
          </Switch>
        </Container>
      </div>
  )
}

export default App;
