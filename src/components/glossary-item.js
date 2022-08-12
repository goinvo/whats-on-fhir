import React from "react"
import {
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from '@chakra-ui/react'

import glossary from '../data/glossary.js'

const glossaryStyles = {
  color: 'blue'
}

class GlossaryItem extends React.Component {
  render() {
    const word = glossary.find(word => word.id === this.props.id)

    return (
      <Popover
        trigger='hover'
        strategy='fixed'
        openDelay={300}>
        <PopoverTrigger>
          <Link href={`/glossary#${this.props.id}`} style={{color: 'blue'}}>{this.props.children}</Link>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>{word.title}</PopoverHeader>
          <PopoverBody>{word.description}</PopoverBody>
        </PopoverContent>
      </Popover>
    )
  }
}

export default GlossaryItem