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
    height: 350px;
    width: 450px;
    border-radius: 32px;
    background-color: ${colors.frenchGray};
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* Sombra para profundidade */
`;

export const Content = styled.div`
    height: 80%;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between; /* Para distribuir o espaço uniformemente */

    h2 {
        color: ${colors.erieBlack};
        margin: 20px 0; /* Espaço acima e abaixo do título */
        font-size: 24px; /* Tamanho do texto */
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
            border-color: ${colors.erieBlack};
            outline: none;
        }
    }

    a {
        font-size: 14px;
        font-weight: bold;
        text-align: center;
        margin: 0; /* Margem reduzida a 0 */
        color: ${colors.erieBlack}; /* Cor do texto do link */
        text-decoration: none; /* Remove sublinhado */
        transition: color 0.3s; /* Efeito de transição suave */
        
        &:hover {
            color: ${colors.blue}; /* Cor ao passar o mouse */
        }
    }

    button {
        width: 150px;
        height: 50px;
        border-radius: 32px;
        border: 1px solid ${colors.slateGray};
        background-color: ${colors.erieBlack};
        color: white;
        font-weight: bold;
        cursor: pointer;
        transition: background-color 0.3s; /* Efeito de transição suave */

        &:hover {
            background-color: ${colors.onyx}; /* Cor ao passar o mouse */
        }
    }
`;
