import styled from "styled-components";
import { colors } from "../global/globalColors";

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${colors.softGray};

`;

export const DashboardBox = styled.div`
    height: 850px;
    width: 1650px;
    border-radius: 48px;
    background-color: ${colors.deepBlack};
    display: flex;
    align-items: center;
`
