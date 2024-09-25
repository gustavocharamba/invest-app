import styled from "styled-components";
import { colors } from "../global/globalColors"

export const MenuContainer = styled.div`
    height: 100%;
    width: 15%;
    color: whitesmoke;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const MenuItem = styled.div`
    border-radius: 16px;
    margin-bottom: 15px;
    display: flex;
    height: 55px;
    width: 150px;
    align-items: center;
    justify-content: start;
    padding-left: 10px;
    font-weight: bold;
    
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
        transition: 175ms;
    }
`;