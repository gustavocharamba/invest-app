import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, ContentForm, Content } from "./loginStyled"

import { api } from "../api/api"

const Login = () => {

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleChange = (event) => {
        const {name, value} = event.target;

        setUser({
            ...user, [name]: value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        try{
            const response = await api.post("http://localhost:8080/login",{
                email: user.email,
                password: user.password
            })
            console.log("Login successful", response.data)

        } catch (error) {
            console.error("Login Error", error)
        }
    }

    return(
        <Container>
            <ContentForm onSubmit={handleSubmit}>
                <Content>
                    <h2>Login</h2>
                    <input type="email" name="email" placeholder="Email" value={user.email} onChange={handleChange} required/>
                    <input type="password" name="password" placeholder="Password" value={user.password} onChange={handleChange} required/>
                    <Link to={"/recovery"}>Forgot your password?</Link>
                    <Link to={"/register"}>Register</Link>
                    <button type="submit">Login</button>
                </Content>
            </ContentForm>
        </Container>
    )
}

export default Login