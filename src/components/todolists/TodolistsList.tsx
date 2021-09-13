import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../bll/store";
import {Redirect} from "react-router-dom";
import {Grid} from "@material-ui/core";
import {useEffect} from "react";
import {fetchTodolistsTC, TodolistDomainType} from "../../bll/todolists-reducer";

export const TodolistsList = () => {
    const dispatch = useDispatch();

    const todolists = useSelector<AppRootStateType, Array<TodolistDomainType>>(state => state.todolists)

    const isLoggedIn = useSelector<AppRootStateType, boolean>(state =>
        state.login.isLogin)
    // const userId = useSelector<AppRootStateType, number>(state =>
    //     state.login.id)

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
                return <Grid item key={tl.id}></Grid>
            })}
        </Grid>
    </>
}
