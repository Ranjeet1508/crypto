import { Box, Text, Image } from '@chakra-ui/react'
import React from 'react'

const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} w={'full'} h={'85vh'}>
      
      <Image w={'full'} h={'full'} objectFit={'contain'} src={'https://i.pinimg.com/236x/0b/20/52/0b2052350c338bcb585c48a5fa32aa3e.jpg'} />

      <Text fontSize={'5xl'} textAlign={'center'} fontWeight={'thin'} mt={'-40'} color={'whiteAlpha.700'}>Your crypto buddy</Text>
    </Box>
  )
}

export default Home
