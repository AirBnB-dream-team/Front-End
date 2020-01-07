import React from 'react';
import { Formik } from 'formik';
import {connect} from 'react-redux';

import {login} from '../actions/login'

const Login = () => (
    <div className="login-form" style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "3rem" }}>Login:</h1>
        <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
            }) => (
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        placeholder="Email"
                        style={{ width: "300px", height: "30px", fontSize: "1.2rem", paddingLeft: "6px", marginRight: "2px" }}
                    />
                    {errors.email && touched.email && errors.email}
                    <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        placeholder="Password"
                        style={{ width: "300px", height: "30px", fontSize: "1.2rem", paddingLeft: "6px", marginLeft: "2px" }}
                    />
                    {errors.password && touched.password && errors.password}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        style={{ width: "80px", height: "35px", fontSize: "1.2rem", marginLeft: "4px" }}
                    >
                        Submit
                    </button>
                </form>
            )}
        </Formik>
    </div>
);

export default connect(null, {login})(Login);