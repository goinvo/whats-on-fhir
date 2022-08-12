import React from 'react'
import { Heading } from '@chakra-ui/react'

import Layout from '../components/layout.js'

import glossary from '../data/glossary.js'

const GlossaryPage = () => {
  return (
    <Layout>
      <Heading as='h1' size='2xl' style={{textAlign: 'center', marginTop: '2rem', marginBottom: '3rem' }}>Glossary</Heading>
      {
        glossary.map(word => {
          return (
            <p key={word.id} id={word.id}>
              <b>{word.title}:</b> {word.description}
            </p>
          )
        })
      }
    </Layout>
  )
}

export default GlossaryPage