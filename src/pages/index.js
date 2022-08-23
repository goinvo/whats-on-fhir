import * as React from "react"
import JsxParser from 'react-jsx-parser'
import {
  Heading,
  Link
} from '@chakra-ui/react'

import Layout from '../components/layout.js'
import GlossaryItem from '../components/glossary-item.js'

// styles
const containerStyles = {
  maxWidth: 600,
  margin: '0 auto',
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 0,
}
const hrStyles = {
  borderTop: '1px solid #bababa',
  borderBottom: 0,
  borderLeft: 0,
  borderRight: 0,
  margin: '1rem 0',
}
const cardStyles = {
  padding: '2rem',
  marginBottom: '3rem',
  border: '1px solid #bababa',
  borderRadius: '10px'
}
const descriptionStyle = {
  marginTop: 10,
  marginBottom: 0,
}

const prompts = [
  {
    verb: "is",
    title: "a framework.",
    description: "A very high level, or abstracted framework, that is. Some may call it a platform, system, or even method. FHIR provides very generalized building blocks to represent heath data in a variety of settings and applications. It provides avenues for these building blocks to be configured and customized to meet specific needs. On top of that, it provides guidance on how these building blocks should be communicated back and forth between systems across the internet. To understand this better, see the <Link href='/analogies' style={{color: 'blue'}}>the FHIR orchestra</Link>. The abstract or 'meta' nature of FHIR means..."
  },
  {
    verb: "is",
    title: "flexible.",
    description: "Designed to work with nearly any health data system across the world, FHIR is highly flexible, extensible, and customizable. Purposefully built this way in order to handle a variety of healthcare data <GlossaryItem id='use-case'>use cases</GlossaryItem>, minimize the barrier to entry for <GlossaryItem id='organization'>organizations</GlossaryItem>; the organization's system can pick and choose what <Glossary>use cases</Glossary> they want to support. They can also build their own use cases, either building off an existing one as a starting point, or entirely from scratch. All of this means FHIR has avenues for both broadly systemic, national, even global health data interoperability, as well as smaller community interoperability for more focused use cases (e.g. a specific medical study).",
    conjunction: "but is",
    conTitle: "almost too flexible.",
    conDescription: "Being this flexible can come with some downsides. Primarily, because it's up to organizations to pick and choose what they support, FHIR doesn't <em>ensure or enforce</em> broad interoperability across systems, only if those organizations choose to support the same use cases. Additionally, because of it's vast and generalized scope combined with lots of flexibility, it can make concepts hard to learn for newcomers. Which leads us to..."
  },
  {
    verb: "is",
    title: "complicated.",
    description: "The framework is purposefully built to be non-specific. Since FHIR doesn't directly prescribe specific usage or data standardization, it can be hard to digest the various documentation and learning materials. Even the naming of concepts within FHIR can be ambiguous, like a <GlossaryItem id='resource'>'Resource'</GlossaryItem> or <GlossaryItem id='implementation'>'Implementation'</GlossaryItem>. In order to adequately describe the purposes and uses of a system this broad and generalized, it requires a lot of documentation, which ends up being spread across disparate locations. In fact, FHIR is so complicated that its maintainers and community members are constantly active in a dedicated <Link href='http://chat.fhir.org' isExternal style='color: blue;'>FHIR chat application</Link>, as they expect there to be plenty of questions and discussion on topics. And all this is assuming moderate experience with software. For many clinicians, patients, even non-healthcare oriented software engineers, FHIR is unintelligible. On top of being a bit tough to grasp..."
  },
  {
    verb: "is",
    title: "constantly evolving.",
    description: "<GlossaryItem id='use-case'>Use cases</GlossaryItem> are being developed and refined at a regular rhythm. Some tools associated with FHIR, like the <Tool>IG Publisher</Tool>, can be updated multiple times a day. Other components of the system like <GlossaryItem id='implementation-guide'>Implementation Guides</GlossaryItem>, while still being consistently added and adjusted, can take years to reach maturity or practical use. Meaning..."
  },
  {
    verb: "is",
    title: "slow to progress.",
    description: "A bit ironic as these are 'Fast' Healthcare Interoperability Resources. Building Implementation Guides using FHIR generally takes a diverse team, often made up of volunteers including software developers, data engineers, and clinicians. A lot of time is spent reaching consensus on the best ways to build things, and typically it takes many iterations to reach even a useable first draft release. It can take years to go from a proposed use case to an approved, workable FHIR IG release. FHIR itself began development in 2012 and was first introduced for draft use in 2014. Since then, interest has slowly picked up among public and private sector health and governance organizations, with the ONC mandating US healthcare organizations provide the ability to exchange health data using FHIR-based interfaces by the end of 2023. Yet only somewhere in the range of <Link href='https://www.fedscoop.com/fhir-standard-adoption-stagnant-onc/' isExternal style='color: blue;'>22</Link> - <Link href='https://ehrintelligence.com/news/api-adoption-slow-widespread-fhir-uptake-expected-by-2024' isExternal style='color: blue;'>24%</Link> of healthcare companies are currently using FHIR-based APIs. Of course, speed is relative, and let us remember that FHIR is set on solving a massive and complicated problem, so we can understand it may appear to move slow at times."
  },
  {
    verb: "is",
    title: "open.",
    description: "FHIR is freely available for the world to use, anyone can use the FHIR system and build FHIR based applications. Anyone is able to participate in FHIR based communities and endeavors to develop specific use cases."
  },
  {
    verb: "is",
    title: "<em>not</em> a data standard.",
    description: "FHIR is more like the standardization of how to make data standards. Yes, it's a bit confusing. It's almost like a meta-standard, a standard to build various standards. It helps to standardize the structure of the data, but not the content within. While this might seem overly complicated, it is necessary for the current state of electronic healthcare data. If FHIR were to say 'this is the one and only data standard which you must conform to', lots of organizations would be incapable of meeting those standards, as they may not have all the required data, they may not want to share the extent of the standardized data, or simply they wouldn't want to invest in the work to meet the standardization. All that said, there is an implementation built with FHIR called 'US Core', which aims to set a 'floor' (basically a standard) for health data interoperability in the US."
  },
  {
    verb: "does",
    title: "move Health IT to APIs.",
    description: "Much of the focus of FHIR is to facilitate use of already well established electronic methods of communication across the internet, like the use of web-based APIs. The basic concept being web APIs allow computer systems to talk to each other in order to add, edit, delete, retrieve, and search data. For instance, with FHIR enabled APIs, a system could theoretically ask for a list of all patients with diabetes, or tell another system when a patient's address changes."
  },
  {
    verb: "does",
    title: "reduce excessive and cluttered exchange.",
    description: "Electronic health data exchange before FHIR has tended to be bulky and messy. Two systems that agree to share data oftentimes dump all their data to each-other, including data that may not be necessary for the others' use. It can also include unformatted, unstructured, or incorrectly formatted data, making it difficult for the receiver of the data to accurately identify or utilize it. FHIR moves health data exchange to smaller bites, with the ability to have finer control over what is requested and what is delivered, thus providing better privacy, security, and efficiency."
  },
  {
    verb: "does",
    title: "<em>not</em> prescribe a terminology.",
    description: "FHIR doesn't say \"you must use SNOMED\" or \"you must use ICD-10\". Instead, it includes ways to specify your terminology and medical coding, so anyone reading your data can see which terminology is being used for each data point. As such, while FHIR does provide ability to support various terminology, it does not solve existing issues around standardizing terminology. However, IG's built using FHIR, like US Core, are part of the path towards solving terminology issues."
  },
  {
    verb: "does",
    title: "<em>not</em> ensure interoperability.",
    description: "Since FHIR is not a prescribed standard data model, there is no inherent guarantee any two systems will be interoperable or have practical usage between them. Two different systems could opt to support any number of different use cases, and there aren't mechanisms to force them to have overlap. Although not often seen in reality, technically a system could be 'FHIR compliant' without exchanging any health data, instead merely providing a statement using minimal FHIR configuration that it does not provide data through any FHIR mediums. It doesn't set out to solve governance of interoperability or data ownership, though it does provide tools to help enable those."
  },
  {
    verb: "does",
    title: "<em>not</em> solve interoperability.",
    description: "In addition to above, there are some other barriers to true interoperability that FHIR does not just magically 'solve'. It doesn't automatically give you infrastructure or security requirements out of the box, and it still takes a significant amount of effort (time and money) to implement FHIR. In addition, exchanging of patient data across systems can easily lead to duplicates, multiple 'versions' of the same patient in the database. While FHIR, outlines methods to interact with services to match patient duplicates together (called 'patient matching'), it does not provide the service itself. FHIR aims to provide solutions to many interoperability issues, but it doesn't, and shouldn't, do 'all the things'."
  },
  {
    verb: "<i>does</i>",
    title: "improve the health data ecosystem.",
    description: "While FHIR isn't a panacea to solve all of interoperability, it's a huge foundational step towards the future. The adoption and evolution of FHIR greatly improves the portability, breadth, and quality of electronic health data. The vision of FHIR is backed by US government health organizations including CMS, ONC, and HHS, as well as companies like Cerner, Epic, Athena Health, Apple, and Google. National adoption is growing alongside policy, with over <Link href='https://ehrintelligence.com/news/api-adoption-slow-widespread-fhir-uptake-expected-by-2024' isExternal style={{ color: 'blue' }}>60% of providers and payers saying they will use APIs by the end of 2023</Link>. Beyond the US, it opens avenues to the entire world to share health data, improve data ownership, improve population health and research, and reach better health outcomes."
  },
]

// markup
const IndexPage = () => {
  return (
    <Layout>
      <main>
        <title>What's on FHIR?</title>
        <div style={containerStyles}>
          <Heading as='h1' size='2xl' style={{textAlign: 'center', marginTop: '2rem', marginBottom: '3rem' }}>What's on FHIR?</Heading>
          {prompts.map(prompt => (
            <div key={prompt.title} style={{ ...cardStyles }}>
              <Heading as='h4' size='sm' style={headingStyles}>FHIR <JsxParser renderInWrapper={false} jsx={prompt.verb} />...</Heading>
              <Heading as='h2' size='lg' style={headingStyles}><JsxParser renderInWrapper={false} jsx={prompt.title} /></Heading>
              <hr style={hrStyles} />
              <p style={descriptionStyle}>
                <JsxParser
                  components={{ GlossaryItem, Link }}
                  jsx={prompt.description}>
                </JsxParser>
              </p>
              {
                prompt.conjunction ?
                  <div style={{marginTop: '2rem'}}>
                    <Heading as='h4' size='sm' style={headingStyles}>{prompt.conjunction}...</Heading>
                    <Heading as='h2' size='lg' style={headingStyles}>{prompt.conTitle}</Heading>
                    <hr style={hrStyles} />
                    
                    <p style={descriptionStyle}>
                    <JsxParser
                      components={{ GlossaryItem }}
                      jsx={prompt.conDescription}>
                    </JsxParser>
                    </p>
                  </div>
                : null
              }
            </div>
          ))}
        </div>
      </main>
    </Layout>
  )
}

export default IndexPage
