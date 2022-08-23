export default [
  {
    id: 'organization',
    title: 'Organization',
    description: 'Any healthcare-related group, company, NGO, or general community using (implementing) FHIR.'
  },
  {
    id: 'use-case',
    title: 'Use Case',
    description: 'A problem to solve in the realm of healthcare data interoperability, leveraging a FHIR implementation guide.'
  },
  {
    id: 'resource',
    title: 'Resource',
    description: 'The core building blocks of FHIR, a resource is a collection of data elements used to represent any sort of concept in healthcare. For instance, a patient is a Patient resource, diabetes is a Condition resource, and a blood pressure reading is an Observation resource.'
  },
  {
    id: 'implementation',
    title: 'Implementation',
    description: 'This term can be confusing, as it is technically different than an "implementation guide". An implementation can be thought of as synonymous with the organization, or whoever sets up the use of FHIR data and APIs in their computer system. The organization implements the FHIR system to participate in sharing of health data for some use case.'
  },
  {
    id: 'implementation-guide',
    title: 'Implementation Guide',
    description: 'An implementation guide (IG) is a FHIR resource that serves literally as a guide, like instructions, for organizations to build their FHIR system to interact with others. If organizations want to declare they support a particular use case, they must conform to that use case\'s implementation guide. IGs are usually a collection of conformance resources; logical statements describing what data to use and how.'
  }
]