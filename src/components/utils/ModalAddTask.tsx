import React from "react";
import {FormControl, FormGroup, TextareaAutosize} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {useFormik} from "formik";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {Modal} from "./ModalTask";
import {addTodolistTC} from "../../bll/todolists-reducer";

type AddTodoModalType = {
    show: boolean
    setShow: (show: boolean) => void
}

type FormikErrorType = {
    todosName?: string
}


export const ModalAddTask = (props: AddTodoModalType ) => {

    const dispatch = useDispatch();

    const demoTodo = {
        name: "My to do list name",
        task: [
            {
                id: 232323,
                name: "task 1",
                isDone: false
            }
        ]
    }
    const formik = useFormik({
        initialValues: {
            todosName: ''
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.todosName) {
                errors.todosName = 'name is required';
            }
            return errors;
        },
        onSubmit: values => {
            props.setShow(false)
            dispatch(addTodolistTC(demoTodo))
            formik.resetForm();
        },
    })

    return (
        <Modal
            height={200}
            width={180}
            backgroundOnClick={() => props.setShow(false)}
            enableBackground={true}
            show={props.show}>

            <form onSubmit={formik.handleSubmit}>

                <FormControl>
                    <FormGroup>
                        <Grid container direction='column' spacing={1} alignItems='center'>
                            <Grid item>
                                <TextareaAutosize minRows={3} placeholder="List name"
                                                  {...formik.getFieldProps("todosName")}/>
                                {formik.touched.todosName && formik.errors.todosName ?
                                    <div style={{color: "blue"}}>{formik.errors.todosName}</div> : null}
                            </Grid>
                            <Grid item>
                                <Button type={'submit'} variant={'contained'} color={'primary'}>Save</Button>
                            </Grid>
                            <Grid item>
                                <Button type={'submit'} variant={'contained'} color={'secondary'}>Cancel</Button>
                            </Grid>
                        </Grid>
                    </FormGroup>
                </FormControl>
            </form>

        </Modal>
    )

};
