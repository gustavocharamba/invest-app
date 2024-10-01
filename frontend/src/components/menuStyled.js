import styled from "styled-components";
import { colors } from "../global/globalColors"

export const MenuContainer = styled.div`
    height: 100%;
    width: 250px;
    color: whitesmoke;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border-right: 0.5px solid ${colors.onyx};
`;

export const MenuItem = styled.div`
    margin-bottom: 15px;
    display: flex;
    height: 55px;
    width: 100%;
    align-items: center;
    justify-content: center;
    font-weight: bold;

    div {
        height: 100%;
        width: 130px;
        display: flex;
        align-items: center;
        justify-content: start;
        border-radius: 16px;
        padding-left: 10px;

        & > svg {
            margin-right: 10px;
            font-size: 24px;
            color: ${colors.softGray};
        }

        & > a {
            color: whitesmoke;
            text-decoration: none;
            font-size: 16px;
            color: ${colors.softGray};
        }

        &:hover {
            background-color: ${colors.onyx};
            transition: background-color 175ms ease-in-out;
            box-shadow: inset 0px 0px 8px rgba(0, 0, 0, 0.3); 
        }
    }
`;
