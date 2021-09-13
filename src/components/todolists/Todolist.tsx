import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../bll/store";
import {Redirect} from "react-router-dom";
import {Grid} from "@material-ui/core";
import {useEffect} from "react";

export const CardsList = () => {
    const dispatch = useDispatch();

    const todolists = useSelector<AppRootStateType, Array<TodolistDomainType>>(state => state.todolists)

    const isLoggedIn = useSelector<AppRootStateType, boolean>(state =>
        state.login.isLogin)

    useEffect(() => {
        dispatch(fetchTodolistsTC());
    }, [dispatch])


    if (!isLoggedIn) {
        return <Redirect to={'/login'}/>
    }

    return <>
        <input type={"text"}/>
        <button>Sort by</button>
        <Grid container spacing={3}>
            {todolists.map(tl => {
                let allTodolistTasks = tasks[tl.id]
                return <Grid item key={tl.id}></Grid>
            })}
        </Grid>
    </>
}
