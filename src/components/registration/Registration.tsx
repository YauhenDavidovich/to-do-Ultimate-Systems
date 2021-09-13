import {Grid} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import React from "react";
import {RegistrationForm} from "./RegisterForm";

export const Registration = () => {
    let history = useHistory();
    return (
        <Grid container justify="center">
            <Grid item xs={4}>
                <button onClick={() => history.goBack()}>Back</button>
                <RegistrationForm/>
            </Grid>
        </Grid>
    );

}


