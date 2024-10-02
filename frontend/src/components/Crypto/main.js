import React, { useEffect, useState } from "react";
import axios from "axios";

import { MainContainer, HeaderContainer, BodyContainer, CryptoTableWrapper, 
     TableRow, TableCell, HeaderRow, HeaderCell, CryptoTable, LoadingContainer } from "./mainStyled";

import Modal from "./modal";

const Main = () => {
    const [cryptos, setCryptos] = useState([]);
    const [error, setError] = useState(null);
    const [selectedCrypto, setSelectedCrypto] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const getCryptos = async () => {
        const options = {
          method: 'GET',
          url: 'https://coinranking1.p.rapidapi.com/coins',
          params: {
            referenceCurrencyUuid: '5k-_VTxqtCEI',
            timePeriod: '3h',
            tiers: '1',
            orderBy: 'marketCap',
            orderDirection: 'desc',
            limit: '50',
          },
          headers: {
            'x-rapidapi-key': 'e2a99c8790msh90aed4d017ed0b2p129056jsna141f90f1eda',
            'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
          },
        };
  
        try {
          const response = await axios.request(options);
          setCryptos(response.data.data.coins);
        } catch (error) {
          console.error(error);
          setError("Failed to fetch cryptocurrencies. Please try again.");
        } finally {
          setIsLoading(false);
        }
      };
  
      getCryptos();
    }, []);
  
    const handleRowClick = (crypto) => {
      setSelectedCrypto(crypto);
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
      setSelectedCrypto(null);
    };
  
    if (isLoading) {
      return <LoadingContainer>Loading...</LoadingContainer>;
    }
  
    return (
      <MainContainer>
        <HeaderContainer>
          <div>
            <h2>Crypto</h2>
          </div>
          <div>
            <a href="#">Account</a>
          </div>
        </HeaderContainer>
  
        <BodyContainer>
          {error ? (
            <p>{error}</p>
          ) : (
            <CryptoTableWrapper>
              <CryptoTable>
                <HeaderRow>
                  <HeaderCell>Symbol</HeaderCell>
                  <HeaderCell>Name</HeaderCell>
                  <HeaderCell>Price</HeaderCell>
                  <HeaderCell>1h %</HeaderCell>
                  <HeaderCell>Market Cap</HeaderCell>
                  <HeaderCell>Volume (24h)</HeaderCell>
                </HeaderRow>
                {cryptos.map((crypto) => (
                  <TableRow key={crypto.uuid} onClick={() => handleRowClick(crypto)}>
                    <TableCell>{crypto.symbol}</TableCell>
                    <TableCell>{crypto.name}</TableCell>
                    <TableCell>${parseFloat(crypto.price).toFixed(2)}</TableCell>
                    <TableCell>{crypto.change}%</TableCell>
                    <TableCell>${parseFloat(crypto.marketCap).toLocaleString()}</TableCell>
                    <TableCell>${parseFloat(crypto["24hVolume"]).toLocaleString()}</TableCell>
                  </TableRow>
                ))}
              </CryptoTable>
            </CryptoTableWrapper>
          )}
        </BodyContainer>
  
        <Modal isOpen={isModalOpen} onClose={closeModal} crypto={selectedCrypto} />
      </MainContainer>
    );
  };
  
  export default Main;