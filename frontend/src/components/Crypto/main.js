import React from "react";

import { MainContainer, HeaderContainer, BodyContainer } from "./mainStyled"

const Main = () => {
    return(
        <MainContainer>
            <HeaderContainer>
            <div>
                    <h2>Cryh4to</h2>
                </div>
                <div>
                    <a>Account</a>
                </div>
            </HeaderContainer>
            <BodyContainer>
                <div>
                    <h4>Name</h4>
                    <h4>h4rice</h4>
                    <h4>1h % </h4>
                    <h4>24 %</h4>
                    <h4>7d %</h4>
                    <h4>Market Cah4</h4>
                    <h4>Volume (24h)</h4>
                </div>

            </BodyContainer>
        </MainContainer>
    )
}

export default Main