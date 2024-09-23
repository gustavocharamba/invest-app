import React from "react"
import { Route, Routes } from "react-router-dom"

import Login from "../pages/login"
import Register from "../pages/register"
 
const PageRouter = () => {
    return(
        <Routes>
            <Route element={<Login/>} path="/"/>
            <Route element={<Register/>} path="/register"/>
        </Routes>
    )
}

export default PageRouter