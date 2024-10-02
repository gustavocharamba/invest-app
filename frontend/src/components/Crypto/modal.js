import React from "react";

import { ModalBackground, ModalContent, CloseButton} from "./modalStyled"

const Modal = ({ isOpen, onClose, crypto }) => {
    if (!isOpen) return null;
  
    return (
      <ModalBackground onClick={onClose}>
        <ModalContent onClick={e => e.stopPropagation()}>
          <CloseButton onClick={onClose}>Close</CloseButton>
          <h2>{crypto.name} ({crypto.symbol})</h2>
          <p>Price: ${parseFloat(crypto.price).toFixed(2)}</p>
          <p>24h Change: {crypto.change}%</p>
          <p>Market Cap: ${parseFloat(crypto.marketCap).toLocaleString()}</p>
          <p>24h Volume: ${parseFloat(crypto["24hVolume"]).toLocaleString()}</p>
        </ModalContent>
      </ModalBackground>
    );
  };
  
  export default Modal;