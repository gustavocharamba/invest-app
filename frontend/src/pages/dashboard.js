import React, { useEffect } from "react";
import { Container } from "./dasboardStyled"

import DashboardMenu from "../components/dashboardMenu";
import DashboardContent from "../components/dashboardContent";



const Dashboard = () => {
    return(
        <Container>
            <DashboardMenu>
                
            </DashboardMenu>
            <DashboardContent>
                
            </DashboardContent>
        </Container>
    )
}

export default Dashboard