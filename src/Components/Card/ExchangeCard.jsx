import {
    VStack,
    Image,
    Heading,
    Text
}
    from '@chakra-ui/react'
import React from 'react'

const ExchangeCard = ({ name, image, rank, url }) => {
    return (
        <a href={url} target={'blank'}>
            <VStack w={'52'} shadow={'lg'} p={'8'} transition={'all 0.5s'} borderRadius={'lg'} m={'4'} css={{"&:hover":{
                transform:"scale(1.1)"
            }}}>
                <Image src={image} w={'10'} height={'10'} objectFit={'contain'} />

                <Heading size={'md'} noOfLines={'1'}>{rank}</Heading>
                <Text size={'md'} noOfLines={'1'}>{name}</Text>
            </VStack>
        </a>
    )
}

export default ExchangeCard
