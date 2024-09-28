// pages/index.js
'use client'
import { useEffect, useState } from 'react';

const Demo = () => {
    const [metaMaskData, setMetaMaskData] = useState(null);
    const [topSellers, setTopSellers] = useState([]);

    useEffect(() => {
        // const fetchMetaMaskData = async () => {
        //     try {
        //         const response = await fetch('https://api.coingecko.com/api/v3/coins/ethereum');
        //         const data = await response.json();
        //         setMetaMaskData(data);
        //     } catch (error) {
        //         console.error('Error fetching MetaMask data:', error);
        //     }
        // };

        const fetchTopSellers = async () => {
            try {
                const response = await fetch(
                    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1'
                );
                const data = await response.json();
                setTopSellers(data);
            } catch (error) {
                console.error('Error fetching top sellers:', error);
            }
        };

        // fetchMetaMaskData();
        fetchTopSellers();
    }, []);
console.log(topSellers ,"Trending NFTs");
    return (
        <div className='text-white'>
            <h1>MetaMask (Ethereum) Data</h1>
            {metaMaskData ? (
                <div>
                    {/* <p>Name: {metaMaskData.name}</p>
                    <p>Symbol: {metaMaskData.symbol}</p>
                    <p>Market Cap: {metaMaskData.market_data.market_cap.usd}</p>
                    <p>Current Price: {metaMaskData.market_data.current_price.usd}</p> */}
                </div>
            ) : (
                <p>Loading MetaMask data...</p>
            )}

            <h2>Top Sellers (Top Cryptocurrencies by Market Cap)</h2>
            <ul>
                {topSellers.map((coin) => (
                    <li key={coin.id}>
                        {coin.name} - ${coin.current_price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Demo;
