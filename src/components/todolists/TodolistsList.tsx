import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../bll/store";
import {Redirect} from "react-router-dom";
import {Grid} from "@material-ui/core";
import {useCallback, useEffect, useState} from "react";
import {fetchTodolistsTC, TodolistDomainType} from "../../bll/todolists-reducer";
import {ModalAddTodo} from "../utils/ModalAddTodo";
import AddIcon from '@material-ui/icons/Add';
import {ModalUpdateTodo} from "../utils/ModalUpdateTodo";

export const TodolistsList = () => {
    const dispatch = useDispatch();

    const todolists = useSelector<AppRootStateType, Array<TodolistDomainType>>(state => state.todolists)
    const [showAddTodo, setShowAddTodo] = useState(false);
    const [showUpdateTodo, setShowUpdateTodo] = useState(false);
    const [currentTodo, setCurrentTodo] = useState("todoId");

    const isLoggedIn = useSelector<AppRootStateType, boolean>(state =>
        state.login.isLogin)

    useEffect(() => {
        dispatch(fetchTodolistsTC());
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
    console.log(todolists)

    return <>
        <input type={"text"}/>
        <button>Sort by</button>
        <Grid container spacing={1} direction="column">
            {todolists.map(tl => {
                return <Grid container key={tl.id} style={{backgroundColor: "grey",
                    borderRadius: 8, color: 'white', margin: 4, padding: 18, cursor: "pointer"}}
                             direction={"row"} justifyContent={"space-between"}
                             onClick={() => updateTodoHandler(tl.id)}
                >
                    <Grid item>{tl.name}</Grid>
                    <Grid item>Created at: {tl.published_at}</Grid>
                    <Grid item>Completed: {tl.task.filter(f => f.isDone === true).length} Uncompleted: {tl.task.filter(f => f.isDone === false).length} All: {tl.task.length + 1}</Grid>
                </Grid>
            })}
        </Grid>
        <AddIcon style={{position: "sticky", bottom: 10, cursor: "pointer", borderRadius: 50, fontSize: 40,
            right: 10, backgroundColor: "white", color: 'orange', margin: 4, padding: 18}}onClick={() => addTodoHandler()}>
            Add</AddIcon>
        {showAddTodo &&
        <ModalAddTodo
            show={showAddTodo} setShow={setShowAddTodo}
        />}
        {showUpdateTodo &&
        <ModalUpdateTodo
            show={showUpdateTodo} setShow={setShowUpdateTodo} todolistID={currentTodo}
        />}

    </>
}
