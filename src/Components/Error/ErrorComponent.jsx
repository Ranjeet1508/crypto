import { Alert, AlertIcon, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const ErrorComponent = () => {
  return (
    <Alert>
      <AlertIcon/>
      <Heading color={'red'}>Server Error!</Heading>
    </Alert>
  )
}

export default ErrorComponent
