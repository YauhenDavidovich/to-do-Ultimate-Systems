import React from 'react';
import {Button, FormControl, FormGroup, Grid, TextField} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {useFormik} from "formik";
import {loginTC} from "../../bll/login-reducer";

type FormikErrorType = {
    identifier?: string
    password?: string
}


export const LoginForm = () => {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            identifier: '',
            password: ''
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.identifier) {
                errors.identifier = 'Required';
            }

            if(!values.password) {
                errors.password = 'Required';
            }
            return errors;


        },
        onSubmit: values => {
            dispatch(loginTC(values))
            formik.resetForm()

        },
    })


    return <Grid container justify="center">
        <Grid item xs={4}>
            <form onSubmit={formik.handleSubmit}>
                <FormControl>
                    <FormGroup>
                        <TextField
                            label="Username or email"
                            margin="normal"
                            name="identifier"
                            onChange={formik.handleChange}
                            value={formik.values.identifier}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.identifier && formik.errors.identifier && <div style={{color: 'red'}}>{formik.errors.identifier}</div>}

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

                        <Button type={'submit'} variant={'contained'} style={{backgroundColor: 'orange', color: 'white'}}>Login</Button>
                    </FormGroup>
                </FormControl>
            </form>
        </Grid>
    </Grid>
}
