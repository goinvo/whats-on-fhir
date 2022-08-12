import React from 'react'
import { Heading } from '@chakra-ui/react'

import Layout from '../components/layout.js'

const containerStyles = {
  maxWidth: 600,
  margin: '0 auto',
}

const analogyStyles = {
  marginBottom: '2rem'
}

const AnalogiesPage = () => {
  return (
    <Layout>
      <div style={{...containerStyles}}>
        <Heading as='h1' size='2xl' style={{textAlign: 'center', marginTop: '2rem', marginBottom: '3rem' }}>FHIR Analogies</Heading>
        <div style={{...analogyStyles}}>
          <Heading as='h2' size='lg'>Resources and Profiles</Heading>
          <p style={{ marginTop: '.5rem' }}>One way to think about the relationship between resources and profiles is as a musical instrument, let's say a piano. Music can convey emotions to us through the use of musical keys and scales, or basically which collection of notes the musician chooses to play (do - re - mi are the first three notes of the major scale). A FHIR resource is like a piano, it has a 88 notes on it, it comes with all the notes to create any style of music. We know that individual notes alone don't make for a very complete song, and to the contrary, if we were to just bash all the keys at once, we wouldn't have a very harmonious sound. So the musician uses familiar groups of notes (a musical scale); notes that come together in a harmonious way. Picking a scale also allows other musicians to join in and play along, understanding which notes are in use. A FHIR profile (musical scale) is applied to the resource (piano) to select the desired notes (data elements).</p>
        </div>
        <div style={{...analogyStyles}}>
          <Heading as='h2' size='lg'>Extensions</Heading>
          <p style={{ marginTop: '.5rem' }}>Keeping with the piano analogy above, sometimes musical scales can be adjusted a little. For instance, you might be playing some jazz, and sneaking in some notes outside of the scale can actually work quite well. The musician can determine which notes they'd like to add of their own accord. Extensions in FHIR are basically ways to add notes to the scale for specific scenarios.</p>
        </div>
      </div>
    </Layout>
  )
}

export default AnalogiesPage