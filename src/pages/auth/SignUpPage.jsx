import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { signUpInputes } from "../../assets/customInputs/userSignUpInputs.js";
import CustomInput from "../../customInput/CustomInput.jsx";

const SignUpPage = () => {
  return (
    <>
    <h3>This is sign up page.</h3>
    <div className="d-flex justify-content-center">
    <Form style={{width: "450px"}} className="card p-5 mt-5 shadow-lg mb-5">
       <h3>Sing up to continue</h3>
       {
        signUpInputes.map((input)=>(
        <CustomInput key={input.name} {...input}/>))
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
