import styled from "styled-components";
import { colors } from "../global/globalColors";

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${colors.deepBlack};

`;

export const ContentForm = styled.form`
    height: 350px;
    width: 450px;
    border-radius: 32px;
    background-color: ${colors.slateGray};
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

export const Content = styled.div`
    height: 80%;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    h2 {
        color: ${colors.erieBlack};
        margin: 20px 0;
        font-size: 24px;
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
        color: ${colors.deepBlack};

        &:hover {
            color: ${colors.outerSpace};
            transition: 175ms;
        }
    }

    button {
        width: 150px;
        height: 50px;
        border-radius: 32px;
        border: 0;
        background-color: ${colors.deepBlack};
        color: white;
        font-weight: bold;
        cursor: pointer;
        transition: background-color 0.3s;

        &:hover {
            background-color: ${colors.onyx};
            transition: 175ms;
        }
    }
`;
