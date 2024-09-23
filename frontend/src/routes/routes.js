import React from "react"
import { Route, Routes } from "react-router-dom"

import Login from "../pages/login"
import Register from "../pages/register"
import Recovery from "../pages/recovery"
 
const PageRouter = () => {
    return(
        <Routes>
            <Route element={<Login/>} path="/"/>
            <Route element={<Register/>} path="/register"/>
            <Route element={<Recovery/>} path="/recovery"/>
        </Routes>
    )
}

export default PageRouter