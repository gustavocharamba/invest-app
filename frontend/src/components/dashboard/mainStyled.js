import styled from "styled-components";
import { colors } from "../../global/globalColors";

export const MainContainer = styled.div`
    height: 100%;
    width: 100%;
    border-radius: 24px;
    color: whitesmoke;
    overflow: hidden;
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
    width: 100%;
    height: 90%;
    padding: 10px;
    box-sizing: border-box;
    overflow: hidden;
`;

export const Item = styled.div`
    float: left;
    box-sizing: border-box;
    margin: 10px;
    border-radius: 16px;
    border: 0.5px solid ${colors.onyx};
`;
