import React from "react"

import {
  Box,
  Flex,
  Link,
  useColorModeValue,
} from '@chakra-ui/react'

import Navigation from './navigation.js'

export default function Layout({ children }) {
  const wrapperStyles = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh'
  }
  const layoutStyles = {
    flex: 1
  }
  const contentStyles = {
    padding: '1rem 2rem'
  }
  const footerStyles = {
    flexGrow: 0,
  }

  return (
    <div style={{...wrapperStyles}}>
      <div style={{...layoutStyles}}>
        <style>
          {/* TODO: Placeholder, quick styles for library comp since inline style object is overwritten by the comp */}
          {`
            .chakra-popover__popper {
              display: inline;
            }
          `}
        </style>
        <Navigation />
        <div style={{...contentStyles}}>
          {children}
        </div>
      </div>
      <div style={{...footerStyles}}>
          <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
            <Flex h={16} alignItems={'center'} justifyContent={'flex-end'} w='100%'>
              <Link href="mailto:whatsonfhir@goinvo.com" isExternal>whatsonFHIR@goinvo.com</Link>
              <div style={{ margin: '0 1rem' }}>|</div>
              <Link href="https://github.com/goinvo/whats-on-fhir" isExternal>GitHub</Link>
            </Flex>
          </Box>
        </div>
    </div>
  )
}