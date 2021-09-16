import React, {useState} from "react";
import {Checkbox, FormControl, TextField} from "@material-ui/core";
import {useSelector} from "react-redux";
import {Field} from "formik";
import Grid from "@material-ui/core/Grid";
import {Modal} from "./ModalTodo";
import {TodolistDomainType} from "../../bll/todolists-reducer";
import {AppRootStateType} from "../../bll/store";
import Button from "@material-ui/core/Button";
import {AddedTask} from "./AddedTask";

type PropsType = {
    show: boolean
    setShow: (show: boolean) => void
    todolistID: string
}

export const ModalUpdateTodo = (props: PropsType) => {
    const todolists = useSelector<AppRootStateType, Array<TodolistDomainType>>(state => state.todolists)
    const todolist = todolists.find(item => item.id === props.todolistID) || null
    const [countAddedTasks, setCountAddedTasks] = useState(0)

    return (
        <>
            {todolist &&
            <Modal
                height={800}
                width={880}
                backgroundOnClick={() => props.setShow(false)}
                enableBackground={true}
                show={props.show}>
                <FormControl variant="outlined">
                    <TextField id="todolist-name"
                               label="Todolist"
                               variant="filled"
                               value={todolist.name}
                    />
                    <Grid item>
                        {todolist.task.map((task, index) => (
                            <AddedTask checked={task.isDone} value={task.name}/>
                        ))}
                        {[...Array(countAddedTasks)].map((_, i) => <AddedTask checked={false} value={''}
                                                                              key={i}/>)}
                        <Grid item>
                            <Button variant={'contained'}
                                    color={'primary'}
                                    onClick={() => setCountAddedTasks(countAddedTasks + 1)}>Add</Button>
                        </Grid>
                    </Grid>


                </FormControl>
            </Modal>}
        </>

    )

};
