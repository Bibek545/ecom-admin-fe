import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import DefaultLayout from "../component/layout/DefaultLayout.jsx";
import { HomePage } from "../pages/home/HomePage.jsx";
import SignUpPage from "../pages/auth/SignUpPage.jsx";
import LoginPage from "../pages/auth/LoginPage.jsx";
import ActivateUserPage from "../pages/auth/ActivateUserPage.jsx";


 const AppRoutes =() => {
    return (
        <Routes>
            {
                <Route path ='/' element = {<DefaultLayout/>}>
                    <Route index element = {<HomePage/>}></Route>
                    <Route path="signup" element = {<SignUpPage/>}></Route>
                    <Route path="activate-user" element = {<ActivateUserPage />}></Route>
                    <Route path="login" element = {<LoginPage/>}></Route>

                </Route>
            }
        </Routes>
    )
}

export default AppRoutes;