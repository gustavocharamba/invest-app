import styled from "styled-components";
import { colors } from "../global/globalColors";

export const ContentContainer = styled.div`
    height: 100%;
    width: 100%;
    border-radius: 24px;
    color: whitesmoke;
    overflow: hidden; /* Para esconder conteúdo que ultrapassa */
`;

export const HeaderContainer = styled.div`
    height: 10%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    border-bottom: 0.5px solid ${colors.onyx};

    div {
        width: 250px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const BodyContainer = styled.div`
    height: 90%;
    width: 100%;
    display: grid;
    grid-template-areas: 
        "total" "graph"
        "month" "top";
`;  
