import React from "react"

import Navigation from './navigation.js'

export default function Layout({ children }) {
  const contentStyles = {
    padding: '1rem 2rem'
  }

  return (
    <div>
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
  )
}