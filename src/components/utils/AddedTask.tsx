import Grid from "@material-ui/core/Grid";
import {Checkbox, TextField} from "@material-ui/core";
import React from "react";

type AddTaskPropsType = {
    checked: boolean
    value: string
}


export const AddedTask = (props: AddTaskPropsType) => <Grid>
    <Checkbox
        checked={props.checked}
        inputProps={{'aria-label': 'controlled'}}
    />
    <TextField id="filled-basic"
               label="Task"
               variant="filled"
               value={props.value}
    />
</Grid>
