import React, {useEffect} from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {useDispatch} from "react-redux";
import {fetchTodolistsTC} from "../../bll/todolists-reducer";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
            backgroundColor: "white"
        },
        selectEmpty: {
            marginTop: theme.spacing(2)

        }
    }),
);

export const Sort = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [sort, setSort] = React.useState('');

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setSort(event.target.value as string);
    };
    useEffect(() => {
        dispatch(fetchTodolistsTC({_sort: sort}));
    }, [sort])

    return (
        <div>

            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Sort</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={sort}
                    onChange={handleChange}
                    label="Sort by"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={'name'}>Name</MenuItem>
                    <MenuItem value={'created_at'}>Date</MenuItem>
                </Select>
            </FormControl>

        </div>
    );
}
