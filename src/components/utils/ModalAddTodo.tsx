import React, {useCallback} from "react";
import {Checkbox, FormControl, FormControlLabel, FormGroup, TextField, TextareaAutosize} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {useFormik, Field, FormikProvider} from "formik";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {Modal} from "./ModalTodo";
import {addTodolistTC, TodolistDomainType} from "../../bll/todolists-reducer";
import useId from "react-id-generator";

type PropsType = {
    show: boolean
    setShow: (show: boolean) => void
}


type FormikErrorType = {
    name?: string
}


export const ModalAddTodo = (props: PropsType) => {
    const dispatch = useDispatch();
    const taskId = useId();

    const formik = useFormik({
        initialValues: {
            name: '',
            task: [
                {
                    id: "",
                    name: "",
                    isDone: false,
                },
            ],
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.name) {
                errors.name = 'name is required';
            }
            return errors;
        },
        onSubmit: values => {
            props.setShow(false)
            dispatch(addTodolistTC(values))
            console.log(values)
            formik.resetForm();
        },
    });
    const handleNewField = () => {
        formik.setFieldValue("task", [
            ...formik.values.task,
            {id: "", name: "", isDone: false},
        ]);
    };


    return (
        <Modal
            height={800}
            width={880}
            backgroundOnClick={() => props.setShow(false)}
            enableBackground={true}
            show={props.show}>
            <form onSubmit={formik.handleSubmit}>
                <FormikProvider value={formik}>
                    <FormControl>
                        <FormGroup>
                            <Grid container direction='column' spacing={1} alignItems='center'>
                                <Grid item>
                                    <TextField
                                        label="List name"
                                        margin="normal"
                                        name="name"
                                        onChange={formik.handleChange}
                                        value={formik.values.name}
                                        onBlur={formik.handleBlur}/>
                                    {formik.touched.name && formik.errors.name ?
                                        <div style={{color: "blue"}}>{formik.errors.name}</div> : null}
                                </Grid>
                                <Grid item>
                                    {formik.values.task.map((task, index) => (
                                        <Grid item key={index}>
                                            <label>
                                                <Field type="checkbox" name={`task[${index}].isDone`}/>
                                            </label>
                                            <TextareaAutosize minRows={1} placeholder="Task name"
                                                              {...formik.getFieldProps(`task[${index}].name`)}/>

                                        </Grid>
                                    ))}
                                </Grid>
                                <Grid container direction={'row'} justifyContent={"space-between"}>
                                    <Grid item>
                                        <Button variant={'contained'}
                                                color={'secondary'}>Cancel</Button>
                                    </Grid>
                                    <Grid item>
                                        <Button variant={'contained'}
                                                color={'primary'} onClick={handleNewField}>Add</Button>
                                    </Grid>
                                </Grid>

                                <Grid container direction={'row'} justifyContent={"space-between"}>
                                    <Grid item>
                                        <Button variant={'contained'} color={'secondary'}>Cancel</Button>
                                    </Grid>
                                    <Grid item>
                                        <Button type={'submit'} variant={'contained'} color={'primary'}>Save</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </FormGroup>
                    </FormControl>
                </FormikProvider>
            </form>

        </Modal>
    )

};
