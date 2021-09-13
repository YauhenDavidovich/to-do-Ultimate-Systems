import React from 'react';
import {Button, FormControl, FormGroup, FormLabel, Grid, TextField} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {useFormik} from "formik";

type FormikErrorType = {
    username?: string
    password?: string
}


export const LoginForm = () => {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.username) {
                errors.username = 'Required';
            }

            if(!values.password) {
                errors.password = 'Required';
            }
            return errors;


        },
        onSubmit: values => {
            formik.resetForm()
        },
    })


    return <Grid container justify="center">
        <Grid item xs={4}>
            <form onSubmit={formik.handleSubmit}>
                <FormControl>
                    <FormLabel>
                        <p>Create an new account:</p>
                    </FormLabel>
                    <FormGroup>
                        <TextField
                            label="Username"
                            margin="normal"
                            name="username"
                            onChange={formik.handleChange}
                            value={formik.values.username}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.username && formik.errors.username && <div style={{color: 'red'}}>{formik.errors.username}</div>}

                        <TextField
                            type="password"
                            label="Password"
                            margin="normal"
                            name="password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.password && formik.errors.password && <div style={{color: 'red'}}>{formik.errors.password}</div>}

                        <Button type={'submit'} variant={'contained'} color={'primary'}>Login</Button>
                    </FormGroup>
                </FormControl>
            </form>
        </Grid>
    </Grid>
}
