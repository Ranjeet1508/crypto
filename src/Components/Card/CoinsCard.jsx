import {
    VStack,
    Image,
    Heading,
    Text
}
    from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const CoinsCard = ({ id, name, image, price, symbol, currencySymbol='₹' }) => {
    return (
        <Link to={`/coin/${id}`}>
            <VStack w={'52'} shadow={'lg'} p={'8'} transition={'all 0.5s'} borderRadius={'lg'} m={'4'} css={{"&:hover":{
                transform:"scale(1.1)"
            }}}>
                <Image src={image} w={'10'} height={'10'} objectFit={'contain'} />

                <Heading size={'md'} noOfLines={'1'}>{symbol}</Heading>
                <Text noOfLines={'1'}>{name}</Text>
                <Text noOfLines={'1'}>{price ? `${currencySymbol}${price}`: "NA"}</Text>
            </VStack>
        </Link>
    )
}

export default CoinsCard
