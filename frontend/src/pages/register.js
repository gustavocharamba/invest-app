import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, ContentForm, Content } from "./registerStyled";
import { api } from "../api/api"

const Register = () => {

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handleChange = (event) => {
        const {name, value} = event.target;

        setUserData({
            ...userData, [name]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitted")

        api.post("/users", userData).then(
            (response) => {
                console.log("User registered succesfully:", response.data)
            }
        ).catch((error) => {console.log("Error registering user:", error)})
    };

    return (
        <Container>
            <ContentForm onSubmit={handleSubmit}>
                <Content>
                    <h2>Register</h2>
                    <input type="text" name="name" placeholder="Nome" value={userData.name} onChange={handleChange} required/>
                    <input type="email" name="email" placeholder="Email" value={userData.email} onChange={handleChange} required />
                    <input type="password" name="password" placeholder="Senha" value={userData.password} onChange={handleChange} required />
                    <Link to={"/"}>Already have a account?</Link>
                    <button type="submit">Registrar</button>
                </Content>
            </ContentForm>
        </Container>
    );
};

export default Register;