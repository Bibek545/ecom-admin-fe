import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout.jsx";
import { HomePage } from "../pages/home/HomePage.jsx";


 const AppRoutes =() => {
    return (
        <Routes>
            {
                <Route path ='/' element = {<DefaultLayout/>}>
                    <Route index element = {<HomePage/>}></Route>
                </Route>
            }
        </Routes>
    )
}

export default AppRoutes;