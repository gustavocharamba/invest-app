import React from "react";

import { ContentContainer, HeaderContainer, BodyContainer} from "./dashboardContentStyled";
import TotalAssets from "./totalAssets"
import AssetsGraph from "./assetsGraph";
import MonthProfit from "./monthProfit";
import TopGains from "./topGains";


const DashboardContent = () => {
    return(
        <ContentContainer>
            <HeaderContainer>
                <div>
                    <h2>Dashboard</h2>
                </div>
                <div>
                    <a>Account</a>
                </div>
            </HeaderContainer>
            <BodyContainer>
                <TotalAssets/>
                <AssetsGraph/>
                <MonthProfit/>
                <TopGains/>
            </BodyContainer>
        </ContentContainer>
    )
}

export default DashboardContent