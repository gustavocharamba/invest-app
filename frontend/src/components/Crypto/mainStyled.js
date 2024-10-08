import styled from "styled-components";
import { colors } from "../../global/globalColors";

export const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  border-radius: 24px;
  color: whitesmoke;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;

export const HeaderContainer = styled.div`
  height: 10%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${colors.onyx};
  padding: 0 20px;

  div {
    width: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h2 {
    font-size: 24px;
    font-weight: bold;
  }

  a {
    color: ${colors.blueJeans};
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease;

    &:hover {
      color: ${colors.carolinaBlue};
    }
  }
`;

export const BodyContainer = styled.div`
  height: 90%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const CryptoTableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 40px);
  height: calc(100% - 40px);
  border: 1px solid ${colors.onyx};
  border-radius: 12px;
  overflow: hidden;
`;

export const HeaderRow = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr 2fr 2fr;
  background-color: ${colors.outerSpace};
  color: white;
  font-weight: bold;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
`;

export const HeaderCell = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CryptoTable = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
`;

export const TableBody = styled.div`
  overflow-y: auto;
  flex-grow: 1;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${colors.raisinBlack};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${colors.onyx};
    border-radius: 4px;
  }
`;

export const TableRow = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr 2fr 2fr;
  color: white;
  font-weight: bold;
  transition: background-color 0.3s ease;
  border-bottom: 1px solid ${colors.onyx};
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: ${colors.outerSpace};
  }
`;

export const TableCell = styled.div`
  height: 60px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoadingContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
width: 100%;
background-color: ${colors.raisinBlack};
color: ${colors.blueJeans};
font-size: 24px;
`;