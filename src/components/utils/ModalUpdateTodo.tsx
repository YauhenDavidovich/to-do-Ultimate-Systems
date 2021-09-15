import React, {useCallback} from "react";
import {Checkbox, FormControl, FormControlLabel, FormGroup, TextField, TextareaAutosize} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {useFormik, Field, FormikProvider} from "formik";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {Modal} from "./ModalTodo";
import {addTodolistTC, TodolistDomainType} from "../../bll/todolists-reducer";
import useId from "react-id-generator";
import {AppRootStateType} from "../../bll/store";

type PropsType = {
    show: boolean
    setShow: (show: boolean) => void
    todolistID: string
}


type FormikErrorType = {
    name?: string
}


export const ModalUpdateTodo = (props: PropsType) => {
    const todolist = useSelector<AppRootStateType, Array<TodolistDomainType>>(state => state.todolists.filter(f => f.id === props.todolistID))
    console.log(todolist)



    return (
        <Modal
            height={800}
            width={880}
            backgroundOnClick={() => props.setShow(false)}
            enableBackground={true}
            show={props.show}>
           <>{todolist[0].name}</>
           <>{todolist[0].name}</>

        </Modal>
    )

};
