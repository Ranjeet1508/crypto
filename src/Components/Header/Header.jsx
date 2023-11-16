import { Button, HStack, Heading, Spacer } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <HStack p={'4'} shadow={'base'} bgColor={'blackAlpha.900'}>
      <Heading fontSize={'2xl'} color={'yellow.400'} fontWeight={'400'}>MyCrypto ₿</Heading>
      
      <Spacer/>

      <Button variant={'unstyled'} color={'white'}>
        <Link to={'/'}>Home</Link>
      </Button>

      <Button variant={'unstyled'} color={'white'}>
        <Link to={'/exchanges'}>Exchanges</Link>
      </Button>

      <Button variant={'unstyled'} color={'white'}>
        <Link to={'/coins'}>Coins</Link>
      </Button>

    </HStack>
  )
}

export default Header
