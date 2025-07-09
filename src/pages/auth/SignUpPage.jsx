import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { signUpInputes } from "../../assets/customInputs/userSignUpInputs.js";
import CustomInput from "../../customInput/CustomInput.jsx";
import { useForm } from "../../hooks/useForm.js";
import { signUpNewUserApi } from "../../helpers/authApi.js";


const initialState = {}

const SignUpPage = () => {
    const {form, setForm, handleOnChange} = useForm(initialState);


    const handleOnSubmit = async (e) => {
        e.preventDefault();
        console.log(form);

        const {confirmPassword, ...rest} = form
        if(confirmPassword!==rest.password) return alert("Password does not match")
            const result = await signUpNewUserApi(rest)
        console.log(result);


    }



  return (
    <>
    <h3>This is sign up page.</h3>
    <div className="d-flex justify-content-center">
    <Form onSubmit={handleOnSubmit} 
     style={{width: "450px"}} className="card p-5 mt-5 shadow-lg mb-5">
       <h3>Sing up to continue</h3>
       {
        signUpInputes.map((input)=>(
        <CustomInput key={input.name} {...input} onChange = {handleOnChange}/>))
       }
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    </>
    
  )
}

export default SignUpPage;
