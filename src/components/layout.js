import React from "react"

import Navigation from './navigation.js'

export default function Layout({ children }) {
  const contentStyles = {
    padding: '1rem 2rem'
  }

  return (
    <div>
      <Navigation />
      <div style={{...contentStyles}}>
        {children}
      </div>
    </div>
  )
}