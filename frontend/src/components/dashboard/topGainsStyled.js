import styled from "styled-components";

import { colors } from "../../global/globalColors";
import { Item } from "./mainStyled";

export const Container = styled(Item)`
    width: calc(35% - 20px);
    height: calc(40% - 20px);
    display: flex;
`;