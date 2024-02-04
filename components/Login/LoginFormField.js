
import React from 'react';
import { Field, ErrorMessage } from 'formik'; // Import Field and ErrorMessage from Formik
import { Form as BootstrapForm } from 'react-bootstrap';

const LoginFormField = ({ text, name, placeholder, isPassword }) => {
    return (
        <BootstrapForm.Group className="mb-3" >
            <BootstrapForm.Label>{text}</BootstrapForm.Label>
            <Field
                type={isPassword ? 'password' : 'text'}
                name={name}
                as={BootstrapForm.Control}
                placeholder={placeholder}
            />
            <ErrorMessage name={name} component="div" className="text-danger" />
        </BootstrapForm.Group>
    );
};

export default LoginFormField;