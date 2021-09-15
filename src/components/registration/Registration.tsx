import {Grid} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import React from "react";
import {RegistrationForm} from "./RegisterForm";

export const Registration = () => {
    let history = useHistory();
    return (
        <Grid container justify="center" style={{backgroundColor: "rgb(45, 45, 45)", maxWidth: 890, marginTop: 200, padding: 10}}>
            <Grid item xs={4}>
                <button onClick={() => history.goBack()}>Back</button>
                <h2 style={{color: 'orange'}}>Create an new account:</h2>
                <RegistrationForm/>
            </Grid>
        </Grid>
    );

}


