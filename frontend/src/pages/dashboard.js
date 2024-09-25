import React, { useEffect } from "react";
import { Container, DashboardBox } from "./dasboardStyled"

import DashboardMenu from "../components/dashboardMenu";
import DashboardContent from "../components/dashboardContent";



const Dashboard = () => {
    return(
        <Container>
            <DashboardBox>
                <DashboardMenu>
                    
                </DashboardMenu>
                <DashboardContent>
                    
                </DashboardContent>
            </DashboardBox>
        </Container>
    )
}

export default Dashboard