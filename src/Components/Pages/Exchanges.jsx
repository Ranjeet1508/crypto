import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { server } from '../../index.js';
import { Container, HStack } from '@chakra-ui/react';
import Loader from '../Loader/Loader.jsx';
import ExchangeCard from '../Card/ExchangeCard.jsx';
import ErrorComponent from '../Error/ErrorComponent.jsx';

const Exchanges = () => {
    const [exchanges, setExchanges] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    useEffect(() => {
        getDataFromApi();
    }, [])


    const getDataFromApi = async () => {
        try {
            const { data } = await axios.get(`${server}/exchanges`)
            console.log(data)
            setExchanges(data);
            setLoading(false);
        } catch (error) {
            console.log(error)
            setError(true);
            setLoading(false)
        }
    }

    if(error) return <ErrorComponent />

    return (
        <Container maxW={'container.xl'}>
            {loading ? <Loader /> : <>

                <HStack wrap={'wrap'} justifyContent={'center'}>
                    {exchanges.map((elem, idx) =>
                        <ExchangeCard
                            name={elem.name}
                            image={elem.image}
                            rank={elem.trust_score_rank}
                            url={elem.url}
                        />
                    )}
                </HStack>
            </>}
        </Container>
    )
}

export default Exchanges
