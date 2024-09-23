import React from "react";
import { Link } from "react-router-dom";
import { Container, ContentForm, Content } from "./recoveryStyled";

const Recovery = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <Container>
            <ContentForm onSubmit={handleSubmit}>
                <Content>
                    <h2>Recovery</h2>
                    <input type="email" placeholder="Email" required />
                    <Link to={"/"}>Login</Link>
                    <button type="submit">Send</button>
                </Content>
            </ContentForm>
        </Container>
    );
};

export default Recovery;