import { Avatar, Box, Stack, VStack, Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} color={'whiteAlpha.700'} minH={'48'} px={'16'} py={['16', '8']}>
      

      <Stack direction={['column', 'row']} h={'full'} alignItems={'center'}>

        <VStack w={'full'} alignItems={['center', 'flex-start']}>
            <Text fontWeight={'bold'}>About Us</Text>
            <Text fontSize={'small'} letterSpacing={'widest'} textAlign={['center', 'left']}>We are best crypto trading app in india, we provide guidance at reasonable price</Text>
        </VStack>

        <VStack>
            <Avatar boxSize={'28'} mt={['4', '0']} src={'https://res.cloudinary.com/du1wrpcx1/image/upload/v1700132116/professional_ranjeet_qjw08t.jpg'}/>
            <Text fontWeight={'bold'}>Our Founder</Text>
            <Text mt={-2}>Ranjeet</Text>
        </VStack>
      </Stack>
    </Box>
  )
}

export default Footer
