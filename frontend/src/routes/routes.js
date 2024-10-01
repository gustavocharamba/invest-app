import React from "react"
import { Route, Routes } from "react-router-dom"

import Login from "../pages/login"
import Register from "../pages/register"
import Recovery from "../pages/recovery"
import Dashboard from "../pages/dashboard"
import Crypto from "../pages/crypto"
 
const PageRouter = () => {
    return(
        <Routes>
            <Route element={<Login/>} path="/"/>
            <Route element={<Register/>} path="/register"/>
            <Route element={<Recovery/>} path="/recovery"/>
            <Route element={<Dashboard/>} path="/dashboard"/>
            <Route element={<Crypto/>} path="/crypto"/>
        </Routes>
    )
}

export default PageRouter