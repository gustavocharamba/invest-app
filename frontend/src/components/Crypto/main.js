import React, { useEffect, useState } from "react";
import axios from "axios"


import { MainContainer, HeaderContainer, BodyContainer, CryptoTableWrapper, 
     TableRow, TableCell, HeaderRow, HeaderCell, CryptoTable } from "./mainStyled"

const Main = () => {

    // const [ cryptos, setCryptos ] = useState([])
    // const [ loading, setLoading ] = useState(true)
    // const [error, setError] = useState(null);

    // useEffect(() => {
    //     const getCryptos = async () => {
    //         const options = {
    //             method: 'GET',
    //             url: 'https://real-time-finance-data.p.rapidapi.com/market-trends',
    //             params: {
    //                 trend_type: 'CRYPTO',
    //                 country: 'us',
    //                 language: 'en'
    //             },
    //             headers: {
    //                 'x-rapidapi-key': 'e2a99c8790msh90aed4d017ed0b2p129056jsna141f90f1eda',
    //                 'x-rapidapi-host': 'real-time-finance-data.p.rapidapi.com'
    //             }
    //         };
            
    //         try {
    //             const response = await axios.request(options);
    //             const trends = response.data.data.trends; // Accessing the trends data
    //             setCryptos(trends); // Updating the state with the data
    //         } catch (error) {
    //             setError('Failed to fetch data'); // Setting error state
    //         } finally {
    //             setLoading(false); // Marking loading as finished
    //         }
    //     };

    //     getCryptos(); // Call the function to fetch data when the component mounts
    // }, []); // Empty dependency array to run the effect once on mount
    // console.log(cryptos)
    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>{error}</p>;

    return(
        <MainContainer>
            <HeaderContainer>
            <div>
                    <h2>Crypto</h2>
                </div>
                <div>
                    <a>Account</a>
                </div>
            </HeaderContainer>
            <BodyContainer>
                {/* <CryptoTableWrapper>
                    <TableHeader>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>1h %</TableCell>
                            <TableCell>24h %</TableCell>
                            <TableCell>7d %</TableCell>
                            <TableCell>Market Cap</TableCell>
                            <TableCell>Volume (24h)</TableCell>
                        </TableRow>
                    </TableHeader>

                    {cryptos.map((crypto, index) => (
                        <TableRow key={index}>
                            <TableCell>{crypto.name}</TableCell>
                            <TableCell>${crypto.price}</TableCell>
                            <TableCell>{crypto.change_1h}%</TableCell>
                            <TableCell>{crypto.change_24h}%</TableCell>
                            <TableCell>{crypto.change_7d}%</TableCell>
                            <TableCell>${crypto.market_cap}</TableCell>
                            <TableCell>${crypto.volume_24h}</TableCell>
                        </TableRow>
                    ))}
                    </CryptoTableWrapper> */}

                    <CryptoTableWrapper>
                        <HeaderRow>
                            <HeaderCell>Name</HeaderCell>
                            <HeaderCell>Price</HeaderCell>
                            <HeaderCell>1h %</HeaderCell>
                            <HeaderCell>24h %</HeaderCell>
                            <HeaderCell>7d %</HeaderCell>
                            <HeaderCell>Market Cap</HeaderCell>
                            <HeaderCell>Volume (24h)</HeaderCell>
                        </HeaderRow>
                        <CryptoTable>
                            {Array.from({length: 80}).map((_, index) => (
                                <TableRow key={index}>
                                    <TableCell>Bitcoin</TableCell>
                                    <TableCell>$70000</TableCell>
                                    <TableCell>0.17%</TableCell>
                                    <TableCell>0.5%</TableCell>
                                    <TableCell>12%</TableCell>
                                    <TableCell>$1.000.000.000.000</TableCell>
                                    <TableCell>$1.000.000.000.000</TableCell>
                            </TableRow>
                            ))}
                        </CryptoTable>
                    </CryptoTableWrapper>
            </BodyContainer>
        </MainContainer>
    )
}

export default Main