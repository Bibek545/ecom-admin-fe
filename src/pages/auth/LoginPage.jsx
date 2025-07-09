import React from "react";
            import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { loginInputs } from "../../assets/customInputs/userLoginInputs";
import CustomInput from "../../customInput/CustomInput";

const LoginPage = () => {
    return (
        <>
        <h3>This is the login page.</h3>
        <div className="d-flex justify-content-center">
            
    <Form style={{width:"450px"}} className="card p-5 mt-5 shadow-lg mb-5">
        <h3>Login to continue</h3>
        {
            loginInputs.map((input)=> (
                <CustomInput key={input.email} {...input} />
            ))
        }

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>            
        </div>
        </>
    )
};

export default LoginPage;