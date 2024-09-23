import React from "react";
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
                    <a href="#">Forgot your password?</a>
                    <a href="/register">Register</a>
                    <button type="submit">Login</button>
                </Content>
            </ContentForm>
        </Container>
    )
}

export default Login