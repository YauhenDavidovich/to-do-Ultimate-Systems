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
    let rez = {};
    todolists.forEach(function (item) {
        // @ts-ignore
        rez[item.isDone] ? rez[item.isDone]++ : rez[item.isDone] = 1;
    });
    const [showAddTodo, setShowAddTodo] = useState(false);

    const isLoggedIn = useSelector<AppRootStateType, boolean>(state =>
        state.login.isLogin)

    useEffect(() => {
        dispatch(fetchTodolistsTC());
    }, [dispatch])


    const addTodoHandler = useCallback(() => {
        setShowAddTodo(true)
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
                    borderRadius: 8, color: 'white', margin: 4, padding: 18}}
                             direction={"row"} justifyContent={"space-between"}>
                    <Grid item>{tl.name}</Grid>
                    <Grid item>Created at: {tl.published_at}</Grid>
                    <Grid item>Completed: {tl.task.filter(f => f.isDone === true).length} Uncompleted: {tl.task.filter(f => f.isDone === false).length} All: {tl.task.length + 1}</Grid>
                </Grid>
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
