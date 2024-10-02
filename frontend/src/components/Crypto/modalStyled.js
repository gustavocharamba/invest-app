import styled from 'styled-components';
import { colors } from '../../global/globalColors';

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: ${colors.outerSpace};
  padding: 20px;
  border-radius: 10px;
  max-width: 500px;
  width: 90%;
  color: white;
`;

export const CloseButton = styled.button`
  background-color: ${colors.ashGray};
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  float: right;
`;
