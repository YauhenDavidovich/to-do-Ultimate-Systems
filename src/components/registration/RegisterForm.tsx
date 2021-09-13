import React from 'react'
import {FormControl, FormGroup, FormLabel, TextField, Button, Grid} from '@material-ui/core'
import {useFormik} from "formik";
import {useDispatch} from "react-redux";
import {registerTC} from "../../bll/registration-reducer";

type FormikErrorType = {
    username?: string
    email?: string
    password?: string
    repeatPassword?: string

}


export const RegistrationForm = () => {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            repeatPassword: ''
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            if(!values.password) {
                errors.password = 'Required';
            } else if (values.password.length < 3) {
                errors.password = 'Must be 3 characters or more';
            }
            if(values.password !==values.repeatPassword) {
                errors.repeatPassword = 'The password does not match';
            }
            return errors;


        },
        onSubmit: values => {
            formik.resetForm()
            dispatch(registerTC({username:values.username, email: values.email, password: values.password}))
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
                        {formik.touched.email && formik.errors.email && <div style={{color: 'red'}}>{formik.errors.email}</div>}

                        <TextField
                            label="Email"
                            margin="normal"
                            name="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.email && formik.errors.email && <div style={{color: 'red'}}>{formik.errors.email}</div>}
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
                        <TextField
                            type="password"
                            label="Repeat password"
                            margin="normal"
                            name="repeatPassword"
                            onChange={formik.handleChange}
                            value={formik.values.repeatPassword}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.repeatPassword && formik.errors.repeatPassword && <div style={{color: 'red'}}>{formik.errors.repeatPassword}</div>}

                        <Button type={'submit'} variant={'contained'} color={'primary'}>Create</Button>
                    </FormGroup>
                </FormControl>
            </form>
        </Grid>
    </Grid>
}
