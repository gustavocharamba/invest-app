import React from "react";
import { Link } from "react-router-dom";
import { Container, ContentForm, Content } from "./registerStyled";

const Register = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // lógica de submissão do formulário de registro
    };

    return (
        <Container>
            <ContentForm onSubmit={handleSubmit}>
                <Content>
                    <h2>Register</h2>
                    <input type="text" placeholder="Nome" required />
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Senha" required />
                    <Link to={"/"}>Already have a account?</Link>
                    <button type="submit">Registrar</button>
                </Content>
            </ContentForm>
        </Container>
    );
};

export default Register;