import React from 'react';
import { withFormik, Form, Field } from 'formik';
//import * as Yup from 'yup';
import axios from 'axios';
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
`



function RegisterForm(props){   
   
    const { values,
            touched,
            errors,
          } = props;
    return (
        <StyledDiv>
            <Form className='login-form'>
                <label htmlFor='username'>Username</label>
                <Field
                    
                    name='username' 
                    id='username' 
                    value={values.username}
                   
                    
                />
                <label htmlFor='password'>Password</label>
                <Field 
                    type='password' 
                    name='password' 
                    id='password'
                    value = {values.password}
                />

                

                <label htmlFor='email'>Email</label>
                <Field
                    type='email' 
                    name='email' 
                    value = {values.email}
                />
                <button type="submit">Register</button>

            </Form>
        </StyledDiv>
            
       

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
    // validationSchema: Yup.object.shape({
    //     username: Yup.string().required()
    // })
    handleSubmit(values, {setStatus, resetForm}) {
        console.log("submitting! ", values);
        // This is just a placeholder api data.
        axios.
        post("https://reqres.in/api/users/", values)
        .then ( res => {
            console.log('Successfully submitted', values)
            setStatus(res.data)
            resetForm();
        })
      }

})(RegisterForm);

export default FormikRegisterForm;