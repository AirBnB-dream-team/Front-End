import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {connect} from 'react-redux';
import {register} from '../actions/register'







function RegisterForm(props){   
   
    const { values,
            touched,
            errors,
          } = props;
    return (
            <div className='register'>
                <Form className='registration-form'>
                    <h2>Register Your Account </h2>
                    <div>
                        
                        <Field
                            name='username' 
                            id='username' 
                            placeholder="Username"
                            value={values.username}

                        />
                        {touched.username && errors.username && (
                            <p className="errors"> {errors.username}</p>
                        )}
                    </div>
                    <div>
                        
                        <Field 
                            type='password' 
                            name='password' 
                            id='password'
                            id='username' 
                            placeholder="Create Password"
                            value = {values.password}
                        />
                        {touched.password && errors.password && (
                            <p className="errors"> {errors.password}</p>
                        )}
                    </div>
                    
                    
                    <div>
                        
                        <Field
                            type='email' 
                            name='email' 
                            value = {values.email}
                            placeholder="Email address"
                        />
                        {touched.email && errors.email && (
                            <p className="errors"> {errors.email}</p>
                        )}
                    </div>
                    <div>
                        <button type="submit">Register</button>
                    </div>

                </Form>
            </div>
            
       

    )
}

const FormikRegisterForm = withFormik({
    mapPropsToValues({ username, password, email }) {
        return {
          username: username || "",
          password: password || "",
          email: email || ""
        };
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().required('Username required'),
        email: Yup.string().email('Invalid Email Address').required('Email required'),
        password:Yup.string().min(3, "3 or more characters").matches('^(?=.*[0-9]$)(?=.*[a-zA-Z])', "Password must contain atleast 1 letter and 1 number").required("Password required")
    }),
    handleSubmit(values, {props, resetForm}) {
        props.register(values);
        resetForm();
      }

})(RegisterForm);

export default connect(null, {register})(FormikRegisterForm);