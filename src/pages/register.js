import React from "react";
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
                    <input type="text" placeholder="CPF" required />
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Senha" required />
                    <a href="#">Already have a account?</a>
                    <button type="submit">Registrar</button>
                </Content>
            </ContentForm>
        </Container>
    );
};

export default Register;