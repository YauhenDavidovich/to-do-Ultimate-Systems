import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../bll/store";
import {Redirect} from "react-router-dom";
import {Button, Grid} from "@material-ui/core";
import {useCallback, useEffect, useState} from "react";
import {fetchTodolistsTC, TodolistDomainType} from "../../bll/todolists-reducer";
import {ModalAddTask} from "../utils/ModalAddTask";

export const TodolistsList = () => {
    const dispatch = useDispatch();

    const todolists = useSelector<AppRootStateType, Array<TodolistDomainType>>(state => state.todolists)
    const [showAddTodo, setShowAddTodo] = useState(false);

    const isLoggedIn = useSelector<AppRootStateType, boolean>(state =>
        state.login.isLogin)
    // const userId = useSelector<AppRootStateType, number>(state =>
    //     state.login.id)

    useEffect(() => {
        dispatch(fetchTodolistsTC());
    }, [dispatch])


    const addTodoHandler = useCallback(() => {
        setShowAddTodo(true)
    }, [])

    if (!isLoggedIn) {
        return <Redirect to={'/login'}/>
    }

    return <>
        <input type={"text"}/>
        <button>Sort by</button>
        <Grid container spacing={3}>
            {todolists.map(tl => {
                return <Grid item key={tl.id}></Grid>
            })}
        </Grid>
        <Button onClick={() => addTodoHandler()}>
            Add</Button>
        {showAddTodo &&
        <ModalAddTask
            show={showAddTodo} setShow={setShowAddTodo}
        />}
    </>
}
