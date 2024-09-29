import styled from "styled-components";
import { colors } from "../global/globalColors";

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ContentForm = styled.form`
    height: 500px;
    width: 550px;
    border-radius: 32px;
    background-color: ${colors.ashGray};
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    height: 90%;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around; 
    
    h2 {
        color: ${colors.deepBlack};
        margin-bottom: 20px;
    }

    input {
        width: 95%;
        height: 40px; 
        padding: 10px;
        border: 2px solid ${colors.slateGray};
        border-radius: 8px;
        background-color: whitesmoke;
        font-size: 16px;

        &:focus {
            border-color: ${colors.deepBlack};
            outline: none;
        }
    }

    a {
        font-size: 14px;
        font-weight: bold;
        text-align: center;
        margin: 10px 0;
        color: ${colors.stormGray};

        &:hover {
            color: ${colors.deepBlack};
            transition: 175ms;
        }
    }

    button {
        width: 150px;
        height: 50px;
        border-radius: 32px;
        border: 1px solid ${colors.slateGray};
        background-color: ${colors.outerSpace};
        color: white;
        font-weight: bold;
        cursor: pointer;

        &:hover {
            background-color: ${colors.onyx};
            transition: 175ms;
        }
    }
`;