import React from "react";

import { MainContainer, HeaderContainer, BodyContainer} from "./mainStyled";
import TotalAssets from "./totalAssets"
import AssetsGraph from "./assetsGraph";
import MonthProfit from "./monthProfit";
import TopGains from "./topGains";


const Main = () => {
    return(
        <MainContainer>
            <HeaderContainer>
                <div>
                    <h2>Dashboard</h2>
                </div>
                <div>
                    <a>Account</a>
                </div>
            </HeaderContainer>
            <BodyContainer>
                <TotalAssets></TotalAssets>
                <AssetsGraph></AssetsGraph>
                <MonthProfit></MonthProfit>
                <TopGains></TopGains>
            </BodyContainer>
        </MainContainer>
    )
}

export default Main