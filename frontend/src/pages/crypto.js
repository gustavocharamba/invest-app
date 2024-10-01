import React from "react";

import { Container } from "./cryptoStyled"
import Menu from "../components/menu"
import Main from "../components/Crypto/main"

const Crypto = () => {
    return(
        <Container>
            <Menu/>
            <Main/>
        </Container>
    )
}

export default Crypto