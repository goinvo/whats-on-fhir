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
        <Heading as='h1' size='2xl' style={{textAlign: 'center', marginTop: '2rem', marginBottom: '3rem' }}>The FHIR Orchestra</Heading>

        <div style={{...analogyStyles}}>
          <p style={{ marginTop: '.5rem' }}>It's no surprise that conceptualizing complex systems is difficult. Add on top, FHIR is an abstract or generalized system. It can be hard to think about these generalized 'Resources' and 'Implementations' in a concrete way. One analogy that may work, is a musical system. We won't get into the history of music theory, but they are systems established to enable musicians to write and play music in a coordinated fashion. So let's build out the FHIR orchestra, if you will, with the hopes of coming together to play a song. However, before we put our orchestra all together, we need to understand what we're trying to achieve and the basics of the music system that will 'orchestrate' it all.</p>
        </div>

        <div style={{...analogyStyles}}>
          <Heading as='h2' size='lg'>Use Case</Heading>
          <p style={{ marginTop: '.5rem' }}>The goal of the orchestra is to play a song together in a harmonious fashion. In FHIR, the song is a Use Case, or a particular problem in the healthcare space that needs solving. This could be as simple as how to share patient data for specific research studies (like studying cancer), moving data through systems that automate billing, or as complex as running data through algorithms to identify and predict health outcomes at an individual or population level. The key is that no matter the use case, the community comes together to arrive at a consensus about how a particular goal is best achieved, and then implements it in FHIR and iterates on it over time, similar to how a song might be practiced and changed over time by the song writer.</p>
        </div>

        <div style={{...analogyStyles}}>
          <Heading as='h2' size='lg'>Data Elements</Heading>
          <p style={{ marginTop: '.5rem' }}>At the core of a musical system, we have individual pitches of sound called notes. Each note is a distinct, small piece of the whole that conveys a specific pitch. In FHIR, it's a specific piece of data. "Do - Re - Mi" are three musical notes. A patient's name, date of birth, and phone number are three Data Elements.</p>
        </div>

        <div style={{...analogyStyles}}>
          <Heading as='h2' size='lg'>Resources</Heading>
          <p style={{ marginTop: '.5rem' }}>A Resource in FHIR is generally a noun, like a Patient or an Observation (like when a nurse records your vital signs, each being an 'observation' made about you). In the FHIR orchestra, a Resource might similarly be many things, like a musician or a music stand, but lets use a musical instrument: a piano. More specifically, the piano Resource is more like the concept of a piano, or any keyboard based instrument.</p>
        </div>

        <div style={{...analogyStyles}}>
          <Heading as='h2' size='lg'>Instances</Heading>
          <p style={{ marginTop: '.5rem' }}>This is more of a general software engineering term, but it may be useful for helping understand FHIR-speak. If a Resource is a noun, an Instance is like a proper noun, it's specific. There's the concept of a patient Resource, then there's a specific patient, like you or your neighbor. There are many specific pianos in the world: the piano in Boston Symphony Hall is not the exact same piano as the one at Carnegie Hall in New York. They are different, and the same pitch or notes played on each may produce a different timbre (the character of the sound, one piano might sound buzzy and the other more pure) of sound. Categorically though, they are two "instances" of the same type of musical instrument: a piano.</p>
        </div>

        <div style={{...analogyStyles}}>
          <Heading as='h2' size='lg'>Profiles</Heading>
          <p style={{ marginTop: '.5rem' }}>We have many notes on our piano, but how do we know which notes to play? Music can convey emotions to us through the use of musical keys and scales, or basically which collection of notes the musician chooses to play ("do - re - mi" are the first three notes of the major scale). A piano has 88 notes on it, it comes with enough notes to create almost any style of song. We know that individual notes alone don't make for a very complete song, and to the contrary, if we were to just bash all the keys at once, we wouldn't have a very harmonious sound. So the musician uses familiar groups of notes (a musical scale); notes that come together in a harmonious way. This is what the Profile is to a Resource, a definition of which notes are being used on the piano. Picking a scale also allows other musicians to join in and play along, understanding which notes are in use. A FHIR Profile (musical scale) is applied to the Resource (piano) to select the desired Data Elements (notes) in order to solve a use case (craft a song).</p>
        </div>

        <div style={{...analogyStyles}}>
          <Heading as='h2' size='lg'>Extensions</Heading>
          <p style={{ marginTop: '.5rem' }}>Now, it's true the piano has many notes, but it doesn't have <em>all</em> the notes. There are pitches above and below the piano's notes that the human ear can hear. We may find for a particular song we want to add notes to the piano, well Extensions let us do just that. We can attach extra notes onto the piano. Additionally, sometimes musical scales can be adjusted a little. For instance, you might be playing some jazz, and sneaking in some notes outside of the defined scale can actually work quite well. The musician can determine which notes they'd like to add of their own accord. Extensions are basically ways to add notes to the scale or instrument for specific scenarios. In FHIR we use Extensions to add Data Elements to Resources and Profiles.</p>
        </div>

        <div style={{...analogyStyles}}>
          <Heading as='h2' size='lg'>Implementation Guide</Heading>
          <p style={{ marginTop: '.5rem' }}>Okay, we have all pieces in place except one. The final piece is to bring the song together. To do this, we need some sort of instructions everyone can share, so everyone knows how to play the same song together. In music, this would be the sheet music, or the papers on the music stands the musicians read as they play. It's all the criteria to play the song in the same repeatable and predictable way, including the notes, tempo, time signature, etc. This is our Implementation Guide, a comprehensive way to represent the song. In the case of FHIR, it's the instructions for what Resources, Profiles, and Capabilities are required to conform to a particular use case.</p>
        </div>

        <div style={{...analogyStyles}}>
          <Heading as='h2' size='lg'>Capability Statement</Heading>
          <p style={{ marginTop: '.5rem' }}>Bonus content! A Capability Statement may sound obvious to some, but is a way to specify to others what you are capable of. As a musician you might say, "hey I can play 'Mary Had a Little Lamb' and 'La Campanella'!" A Capability Statement is a way for computer systems to broadcast what Implementations and other features they support in FHIR.</p>
        </div>
      </div>
    </Layout>
  )
}

export default AnalogiesPage