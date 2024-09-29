import styled from "styled-components";

import { colors } from "../global/globalColors";

export const Container = styled.div`
    height: 100%;
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;

    div {
        height: 95%;
        width: 100%;
        border-radius: 18px;
        border: 0.5px solid ${colors.onyx}
    }
`