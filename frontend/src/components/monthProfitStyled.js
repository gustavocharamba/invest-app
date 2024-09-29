import styled from "styled-components";

import { colors } from "../global/globalColors";

export const Container = styled.div`
    height: 100%;
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;

    div {
        height: 95%;
        width: 97.5%;
        border-radius: 18px;
        border: 0.5px solid ${colors.onyx}
    }
`