import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../bll/store";
import {Redirect} from "react-router-dom";
import {Grid, TextField} from "@material-ui/core";
import React, {useCallback, useEffect, useMemo, useState} from "react";
import {fetchTodolistsTC, TodolistDomainType} from "../../bll/todolists-reducer";
import {ModalAddTodo} from "../utils/ModalAddTodo";
import AddIcon from '@material-ui/icons/Add';
import {ModalUpdateTodo} from "../utils/ModalUpdateTodo";
import SimpleSelect from "../utils/Sort";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";

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

export const TodolistsList = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const todolists = useSelector<AppRootStateType, Array<TodolistDomainType>>(state => state.todolists)
    const [showAddTodo, setShowAddTodo] = useState(false);
    const [showUpdateTodo, setShowUpdateTodo] = useState(false);
    const [currentTodo, setCurrentTodo] = useState("todoId");
    const [searchTerm, setSearchTerm] = useState("")

    const isLoggedIn = useSelector<AppRootStateType, boolean>(state =>
        state.login.isLogin)

    let filteredList = useMemo(() => {
        let filteredTodo: Array<TodolistDomainType> = [...todolists]
        filteredTodo = searchTerm ? filteredTodo.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase())) : filteredTodo
        return filteredTodo
    }, [todolists, searchTerm])

    useEffect(() => {
        dispatch(fetchTodolistsTC({}));
    }, [dispatch])

    const addTodoHandler = useCallback(() => {
        setShowAddTodo(true)
    }, [])
    const updateTodoHandler = useCallback((id: string) => {
        setCurrentTodo(id);
        setShowUpdateTodo(true)
    }, [])

    if (!isLoggedIn) {
        return <Redirect to={'/login'}/>
    }

    return <Grid container direction="column">
        <Grid container direction={"row"} justifyContent={"space-between"}>
            <FormControl variant="outlined" className={classes.formControl}>
                <TextField id="filled-basic"
                           label="Filled"
                           variant="filled"
                           onChange={(e) => setSearchTerm(e.target.value)}
                />

            </FormControl>
        </Grid>
        <SimpleSelect/>

        <Grid container spacing={1} direction="column">
            {filteredList.map(tl => {
                return <Grid container key={tl.id} style={{
                    backgroundColor: "grey",
                    borderRadius: 8, color: 'white', margin: 4, padding: 18, cursor: "pointer"
                }}
                             direction={"row"} justifyContent={"space-between"}
                             onClick={() => updateTodoHandler(tl.id)}
                >
                    <Grid item>{tl.name}</Grid>
                    <Grid item>Created at: {tl.published_at}</Grid>
                    <Grid
                        item>Completed: {tl.task.filter(f => f.isDone === true).length} Uncompleted: {tl.task.filter(f => f.isDone === false).length} All: {tl.task.length + 1}</Grid>
                </Grid>
            })}
        </Grid>
        <AddIcon style={{
            position: "sticky", bottom: 10, cursor: "pointer", borderRadius: 50, fontSize: 40,
            right: 10, backgroundColor: "white", color: 'orange', margin: 4, padding: 18
        }} onClick={() => addTodoHandler()}>
            Add</AddIcon>
        {showAddTodo &&
        <ModalAddTodo
            show={showAddTodo} setShow={setShowAddTodo}
        />}
        {showUpdateTodo &&
        <ModalUpdateTodo
            show={showUpdateTodo} setShow={setShowUpdateTodo} todolistID={currentTodo}
        />}

    </Grid>
}
