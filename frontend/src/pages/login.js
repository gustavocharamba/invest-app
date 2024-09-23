import React from "react";
import { Link } from "react-router-dom";
import { Container, ContentForm, Content } from "./loginStyled"

const Login = () => {

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    return(
        <Container>
            <ContentForm onSubmit={handleSubmit}>
                <Content>
                    <h2>Login</h2>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <Link to={"/recovery"}>Forgot your password?</Link>
                    <Link to={"/register"}>Register</Link>
                    <button type="submit">Login</button>
                </Content>
            </ContentForm>
        </Container>
    )
}

export default Login