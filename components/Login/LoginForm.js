import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button, Form as BootstrapForm } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import LoginFormField from './LoginFormField';

const initialValues = {
    username: '',
    password: '',
};

const validationSchema = Yup.object({
    username: Yup.string().required('Required').min(1).max(10),
    password: Yup.string().required('Required').min(1).max(10),
});

const LoginForm = () => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (values, { resetForm }) => {
                alert(JSON.stringify(values, null, 2));
                console.log(values);
                resetForm();
            }}
        >
            <Form>
                <LoginFormField text="Username" name="username" placeholder="enter username" isPassword={false} />
                <LoginFormField text="Password" name="password" placeholder="enter password" isPassword={true} />

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <p className="forgot-password text-right mt-2">
                    Forgot <a href="#">password?</a>
                </p>
            </Form>
        </Formik>
    );
};

export default LoginForm;