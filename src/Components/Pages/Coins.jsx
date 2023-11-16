
import { Button, Container, HStack, Radio, RadioGroup } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loader from '../Loader/Loader';
import { server } from '../..';
import ErrorComponent from '../Error/ErrorComponent';
import ExchangeCard from '../Card/ExchangeCard';
import CoinsCard from '../Card/CoinsCard';

const Coins = () => {
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [page, setPage] = useState(1);
    const [currency, setCurruncy] = useState('inr');
    const currencySymbol = currency==='inr' ? '₹' : currency==='eur' ? '€' : '$'
    const btn = new Array(132).fill(1);


    useEffect(() => {
        getDataFromApi();
    }, [currency, page])


    const getDataFromApi = async () => {
        try {
            const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`)
            console.log(data)
            setCoins(data);
            setLoading(false);
        } catch (error) {
            console.log(error)
            setError(true);
            setLoading(false)
        }
    }

    const changePage = (page) => {
        setPage(page);
        setLoading(true);
    }

    if(error) return <ErrorComponent />

    return (
        <Container maxW={'container.xl'}>
            {loading ? <Loader /> : <>

            <RadioGroup value={currency} p={8} onChange={setCurruncy}>
                <HStack spacing={4}>
                    <Radio value={'inr'}>INR</Radio>
                    <Radio value={'usd'}>USD</Radio>
                    <Radio value={'eur'}>EUR</Radio>
                </HStack>
            </RadioGroup>

                <HStack wrap={'wrap'} justifyContent={'center'}>
                    {coins.map((elem, idx) =>
                        <CoinsCard
                            key={idx}
                            id={elem.id}
                            price={elem.current_price}
                            name={elem.name}
                            image={elem.image}
                            symbol={elem.symbol}
                            currencySymbol={currencySymbol}                            
                        />
                    )}
                </HStack>

                <HStack w={'full'} overflowX={'auto'} p={'8'}>
                    {btn.map((item,idx) => 
                    <Button key={idx} bgColor={'blackAlpha.900'} color={'white'} onClick={() => changePage(idx)}>{idx}</Button>
                    )}
                </HStack>
            </>}
        </Container>
    )
}

export default Coins
