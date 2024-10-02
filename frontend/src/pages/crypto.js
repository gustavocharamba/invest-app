import React from "react";

import { Container } from "./cryptoStyled"
import Menu from "../components/menu"
import Main from "../components/crypto/main"

const Crypto = () => {
    return(
        <Container>
            <Menu/>
            <Main/>
        </Container>
    )
}

export default Crypto